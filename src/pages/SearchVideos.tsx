import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { YoutubeData, YoutubeVideo } from "../userTypes/youtubeQueriesType";
import Loading from "../components/UI/Loading";
import VideoCard from "../components/UI/VideoCard";

const SearchVideos: React.FC = () => {
  const [videoList, setVideoList] = useState<YoutubeVideo[]>([]);
  const [nextPageToken, setNextPageToken] = useState<string>("");
  const [requireFetch, setRequireFetch] = useState<boolean>(false);
  const { keyword } = useParams<string>();

  useEffect(() => {
    updateVideoListByKeyword(keyword);
  }, [keyword]);

  useEffect(() => {
    if (requireFetch) {
      updateVideoListAndNextPageToken(keyword);
    }
  }, [requireFetch]);

  useEffect(() => {
    setRequireFetch(false);
  }, [videoList]);

  function handleInfinityScroll(): void {
    const clientHeight = document.documentElement.clientHeight;
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;

    if ((scrollTop + clientHeight) / scrollHeight >= 0.9) {
      setRequireFetch(true);
      updateVideoListAndNextPageToken(keyword);
    }
  }

  /**
   *  fetchYoutubeData로 유튜브 데이터를 얻어, videoList, nextPageToken을 업데이트하는 함수
   */
  async function updateVideoListAndNextPageToken(
    keyword: string | undefined
  ): Promise<void> {
    const data = await fetchYoutubeData(keyword, nextPageToken);
    // console.log(data);
    setVideoList((prevVideoList) => {
      //객체의 json문자열화 -> set을 적용하기 위함
      let jsonVideoList = prevVideoList
        .concat(data.videos)
        .map((video) => JSON.stringify(video));
      let uniqueVideoList = new Set(jsonVideoList);

      let newVideoList: YoutubeVideo[] = [...uniqueVideoList].map((video) =>
        JSON.parse(video)
      );
      return newVideoList;
    });
    setNextPageToken(data.nextPageToken);
  }

  async function updateVideoListByKeyword(keyword: string | undefined) {
    const data = await fetchYoutubeData(keyword, nextPageToken);
    setVideoList(data.videos);
  }

  const debounceScroll = debounce(handleInfinityScroll, 300);

  useEffect(() => {
    window.addEventListener("scroll", debounceScroll);
    return () => {
      window.removeEventListener("scroll", debounceScroll);
    };
  }, []);

  return (
    <div>
      {videoList && (
        <ul className="grid gap-4 max-w-screen-2xl grid-cols-1 m-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 ">
          {videoList?.map((video) => (
            <VideoCard key={video.id.videoId} video={video} />
          ))}
        </ul>
      )}
      {requireFetch && <Loading />}
    </div>
  );
};

export default SearchVideos;

/**
 * 스크롤 이벤트가 너무 많이 실행되는 것을 막아주는 함수
 */
function debounce(func: () => void, delay: number) {
  let timerId: any;

  return function (this: any, ...args: []) {
    clearTimeout(timerId);

    timerId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

const fetchYoutubeData = async (
  keyword: string | undefined,
  nextPageToken: string
): Promise<{
  videos: YoutubeVideo[];
  nextPageToken: string;
}> => {
  const key = process.env.REACT_APP_YOUTUBE_API_KEY;
  const SEARCH_RESULT_COUNT = 20;
  const url = nextPageToken
    ? `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${SEARCH_RESULT_COUNT}&q=${keyword}&pageToken=${nextPageToken}&key=${key}`
    : `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${SEARCH_RESULT_COUNT}&q=${keyword}&key=${key}`;
  const { data } = await axios.get<YoutubeData>(url);

  // id 가 undefined인 것들로 인해 key props 에러가 발생합니다. 이 동영상들은 제외 합니다.
  let videos_id_notUndefined = data.items.filter(
    (item) => item.id !== undefined
  );

  let youtubeData = {
    videos: videos_id_notUndefined,
    nextPageToken: data.nextPageToken,
  };
  return youtubeData;
};
