import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import VideoCard from "../components/UI/VideoCard";
import { Video } from "../userTypes/trotQueriesType";
import { YoutubeData, YoutubeVideo } from "../userTypes/youtubeQueriesType";
// import VideoCard from "../components/common/videos/VideoCard";
// import { useSelector } from "react-redux";
// import Loading from "../UI/Loading";

const SearchVideos: React.FC = () => {
  const [videoList, setVideoList] = useState<YoutubeVideo[]>([]);
  const [nextPageToken, setNextPageToken] = useState<string>("");
  const [requireFetch, setRequireFetch] = useState<boolean>(false);
  const { keyword } = useParams<string>();

  useEffect(() => {
    getVideos();
  }, [keyword]);

  // useEffect(() => {
  //   if (requireFetch) {
  //     getMoreVideos();
  //     setRequireFetch(false);
  //   }
  // }, [requireFetch]);

  function handleInfinityScroll() {
    const clientHeight = document.documentElement.clientHeight;
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;

    if ((scrollTop + clientHeight) / scrollHeight >= 0.98) {
      setRequireFetch(true);
    }
  }

  // async function getMoreVideos() {
  //   const data = await fetchYoutubeData(keyword, nextPageToken);

  //   setVideoList((prevVideoList) => {
  //     // 영상이 중복되는 경우가 있습니다.
  //     // 중복되는 영상을 제거하는 코드입니다.
  //     let jsonVideoList = prevVideoList.concat(data.videos).map(JSON.stringify);
  //     let uniqueVideoList = new Set(jsonVideoList);
  //     return [...uniqueVideoList].map(JSON.parse);
  //   });

  //   setNextPageToken(data.nextPageToken);
  // }

  async function getVideos(): Promise<void> {
    const data = await fetchYoutubeData(keyword, nextPageToken);

    setVideoList(data.videos);
    setNextPageToken(data.nextPageToken);
  }

  // const debounceScroll = debounce(handleInfinityScroll, 300);
  // useEffect(() => {
  //   window.addEventListener("scroll", debounceScroll);
  //   return () => {
  //     window.removeEventListener("scroll", debounceScroll);
  //   };
  // }, []);

  return (
    <div>
      {videoList && (
        <ul className="grid gap-4 max-w-screen-2xl grid-cols-1 m-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 ">
          {videoList.map((video) => (
            <VideoCard
              youtubeVideo={video}
              key={video.id.videoId}
              video={video}
            />
          ))}
        </ul>
      )}
      {/* {requireFetch || <Loading />} */}
    </div>
  );
};

export default SearchVideos;

/**
 * 스크롤 이벤트가 너무 많이 실행되는 것을 막아주는 함수
 * @param {*} func
 * @param {*} delay
 * @returns
 */
// function debounce(func, delay) {
//   let timerId;

//   return function (...args) {
//     clearTimeout(timerId);

//     timerId = setTimeout(() => {
//       func.apply(this, args);
//     }, delay);
//   };
// }

const fetchYoutubeData = async (
  keyword: string | undefined,
  nextPageToken: string
) => {
  const key = process.env.REACT_APP_YOUTUBE_API_KEY;
  const SEARCH_RESULT_COUNT = 20;
  const url = nextPageToken
    ? `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${SEARCH_RESULT_COUNT}&q=${keyword}&pageToken=${nextPageToken}&key=${key}`
    : `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${SEARCH_RESULT_COUNT}&q=${keyword}&key=${key}`;
  const { data } = await axios.get<YoutubeData>(url);

  let videos_id_notUndefined = data.items.filter(
    (item) => item.id !== undefined
  ); // id 가 undefined인 것들로 인해 key props 에러가 발생합니다. 이 동영상들은 제외 합니다.

  let youtubeData = {
    videos: videos_id_notUndefined,
    nextPageToken: data.nextPageToken,
  };
  return youtubeData;
};

//! 목데이터
// const fetchMocData = async (keyword, nextPageToken) => {
//   console.log(`fetchMocData 에서 사용된 token : ${nextPageToken}`);
//   let url;
//   switch (nextPageToken) {
//     case "CBQQAA":
//       url = `/data/moc2.json`;
//       break;
//     case "CCgQAA":
//       url = `/data/moc3.json`;
//       break;
//     case "CDwQAA":
//       url = `/data/moc4.json`;
//       break;
//     default:
//       url = `/data/moc1.json`;
//       break;
//   }

//   const { data } = await axios.get(url);
//   let videos = data.items
//     .map((item) => {
//       item.id = item.id.videoId;
//       return item;
//     })
//     .filter((item) => item.id !== undefined); // id 가 undefined인 것들로 인해 key props 에러가 발생합니다. 이 동영상들은 제외 합니다.

//   let result = { videos, nextPageToken: data.nextPageToken };

//   return result;
// };
