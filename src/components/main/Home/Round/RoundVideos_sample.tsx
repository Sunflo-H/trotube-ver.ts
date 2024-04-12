import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { Video } from "../../../../userTypes/trotQueriesType";
import VideoCard from "../../../UI/VideoCard";

type Props = {
  videos: Video[] | undefined;
};

const MAX_SAMPLE_COUNT = 5;
const RoundVideos_sample: React.FC<Props> = ({ videos }) => {
  return (
    <div>
      <div className="">
        {videos && (
          <ul className="grid gap-4 max-w-screen-2xl grid-cols-1 m-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 ">
            {videos.slice(0, MAX_SAMPLE_COUNT).map((video) => {
              return (
                <VideoCard trotVideo={video} key={video.id} video={video} />
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default RoundVideos_sample;
