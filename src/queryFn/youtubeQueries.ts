import axios from "axios";
import { YoutubeData, YoutubeVideo } from "../userTypes/youtubeQueriesType";

const key = process.env.REACT_APP_YOUTUBE_API_KEY;
const SEARCH_RESULT_COUNT = 50;
const RELATED_VIDEO_COUNT = 21;

// /**
//  * 검색 결과를 요청, 요청당 할당량 100 소모
//  * pageToken 유무에 따라 url이 바뀐다.
//  */
// export const getSearchVideos = async ({ queryKey }) => {
//   const keyword = queryKey[1];
//   const pageToken = queryKey[2];
//   const url = pageToken
//     ? `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${SEARCH_RESULT_COUNT}&q=${keyword}&pageToken=${pageToken}&key=${key}`
//     : `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${SEARCH_RESULT_COUNT}&q=${keyword}&key=${key}`;

//   const { data } = await axios.get(url);

//   let nextPageToken = data.nextPageToken;

//   let videos = data.items
//     .map((item) => {
//       item.id = item.id.videoId;
//       return item;
//     })
//     .filter((item) => item.id !== undefined); // id 가 undefined인 것들로 인해 key props 에러가 발생합니다. 이 동영상들은 제외 합니다.

//   return { videos, nextPageToken };
// };

export const getRelatedVideos = async ({ queryKey }: any) => {
  const title = queryKey[2];
  // 지금은 사라진 연관동영상리스트 url (혹시 몰라서 남겨둡니다.)
  // const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${queryKey[1]}&type=video&maxResults=10&key=${key}`;
  const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${RELATED_VIDEO_COUNT}&q=${title}&key=${key}`;
  const { data } = await axios.get<YoutubeData>(url);
  console.log("data 원본 : ", data);

  // id : {kind, videoId} 이렇게 있어서 id : videoId 이렇게 되게끔 수정한 코드
  // const relatedVideos = data.items.map((item: YoutubeVideo) => ({
  //   ...item,
  //   id: item.id.videoId,
  // })).filter((item: YoutubeVideo, i: number) => i !== 0);

  // id를 수정하지 않은 코드
  // 첫번째 연관 비디오 === 현재 비디오 따라서 제거합니다.
  const relatedVideos = data.items.filter(
    (item: YoutubeVideo, i: number) => i !== 0
  );

  return relatedVideos;
};

// export const getChannel = async ({ queryKey }) => {
//   const url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${queryKey[1]}&key=${key}`;
//   const { data } = await axios.get(url);

//   return data.items[0];
// };
