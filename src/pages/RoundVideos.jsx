import React from "react";
import { useLocation } from "react-router-dom";
import VideoCard from "../components/common/videos/VideoCard";

export default function RoundVideos() {
  const { state: videos } = useLocation();
  return (
    <div>
      {videos && (
        <ul className="grid gap-4 max-w-screen-2xl grid-cols-1 m-4 md:grid-cols-2  lg:grid-cols-3  xl:grid-cols-4 2xl:grid-cols-5 ">
          {videos.map((video) => (
            <VideoCard video={video} key={video.id} />
          ))}
        </ul>
      )}
    </div>
  );
}
