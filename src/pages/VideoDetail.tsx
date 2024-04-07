import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getRelatedVideos } from "../queryFn/youtubeQueries";
import RelatedVideoCard from "../components/main/VideoDetail/RelatedVideoCard";
import Channel from "../components/main/VideoDetail/Channel";
import { Video } from "../userTypes/trotQueriesType";
// import Channel from "../components/main/VideoDetailPage/Channel";
// import Description from "../components/main/VideoDetailPage/Description";
// import RelatedVideoCard from "../components/main/VideoDetailPage/RelatedVideoCard";

const VideoDetail: React.FC = () => {
  const [show, setShow] = useState(false);
  const { state } = useLocation();
  let video: Video = state.video;
  const { channelId, description, title } = video.snippet;

  const { data: relatedVideos } = useQuery({
    queryKey: ["relatedVideos", video.id, title],
    queryFn: getRelatedVideos,
  });

  // 새 비디오디테일 페이지로 이동했을때 show state를 초기화한다.
  useEffect(() => {
    setShow(false);
  }, [video]);

  return (
    <div className="flex justify-center">
      <div className="flex flex-col lg:flex-row max-w-screen-2xl ">
        <section className="basis-9/12 sm:px-2">
          <iframe
            className="hidden sm:block"
            id="player"
            // type="text/html"
            width="100%"
            height="640"
            src={`https://www.youtube.com/embed/${video.id}`}
            frameBorder="0"
            title={title}
            allow="fullscreen"
          ></iframe>
          <iframe
            className=" sm:hidden px-2"
            id="player"
            // type="text/html"
            width="100%"
            height="300px"
            src={`https://www.youtube.com/embed/${video.id}`}
            frameBorder="0"
            title={title}
            allow="fullscreen"
          ></iframe>
          <div className="w-full">
            <div className="px-2 text-xl font-semibold my-4">{title}</div>
            <Channel channelId={channelId} />

            {/* {description && (
              <Description
                description={description}
                show={show}
                setShow={setShow}
              />
            )} */}
          </div>
        </section>
        <section className="basis-3/12 px-2">
          {relatedVideos && (
            <ul>
              {relatedVideos.map((relatedVideo) => (
                <RelatedVideoCard
                  video={relatedVideo}
                  key={relatedVideo.id.videoId}
                />
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
};

export default VideoDetail;
