import axios from "axios";
import {
  Channel,
  ChannelInfo,
  YoutubeData,
  YoutubeVideo,
} from "../userTypes/youtubeQueriesType";

const key = process.env.REACT_APP_YOUTUBE_API_KEY;
const RELATED_VIDEO_COUNT = 21;

export const getRelatedVideos = async ({
  queryKey,
}: any): Promise<YoutubeVideo[]> => {
  const title = queryKey[2].replaceAll("#", ""); // ! 해쉬태그가 있으면 요청시 에러가 발생합니다.
  const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${RELATED_VIDEO_COUNT}&q=${title}&key=${key}`;
  const { data } = await axios.get<YoutubeData>(url);

  // !연관 비디오데이터를 요청했을때 0번째 데이터는 현재 비디오의 데이터와 동일합니다.
  // !따라서 0번째 값을 제거해줍니다.
  const relatedVideos = data.items.filter(
    (item: YoutubeVideo, i: number) => i !== 0
  );

  return relatedVideos;
};

export const getChannel = async ({ queryKey }: any): Promise<ChannelInfo> => {
  const url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${queryKey[1]}&key=${key}`;
  const { data: channelData } = await axios.get<Channel>(url);
  let channelInfo = channelData.items[0];
  return channelInfo;
};
