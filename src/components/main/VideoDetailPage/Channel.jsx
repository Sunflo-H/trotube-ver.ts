import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import Converter from "../../../utils/converter";
import { getChannel } from "../../../queryFn/youtubeQueries";

export default function Channel({ channelId }) {
  const { data: channel } = useQuery({
    queryKey: ["channel", channelId],
    queryFn: getChannel,
  });

  const converter = new Converter();

  channel && converter.numberConverter(channel.statistics.subscriberCount);

  return (
    <div className="flex items-center my-4 px-2">
      {channel && (
        <>
          <img
            className="w-10 h-10 rounded-full mr-2"
            src={channel.snippet.thumbnails.medium.url}
            alt={channel.snippet.title}
          />
          <div>
            <div className="font-semibold">{channel.snippet.title}</div>
            {/* <div>{channel.statistics.subscriberCount}</div> */}
          </div>
        </>
      )}
    </div>
  );
}
