import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import VideoCard from "../../../common/videos/VideoCard";

const MAX_SAMPLE_COUNT = 5;

export default function RoundVideos_sample({ videos }) {
  return (
    <div>
      <div className="">
        {videos && (
          <ul className="grid gap-4 max-w-screen-2xl grid-cols-1 m-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 ">
            {videos.slice(0, MAX_SAMPLE_COUNT).map((video) => {
              return <VideoCard video={video} key={video.id} />;
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
