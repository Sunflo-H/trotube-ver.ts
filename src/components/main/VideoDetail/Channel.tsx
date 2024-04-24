import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getChannel } from "../../../queryFn/youtubeQueries";
import { ChannelInfo } from "../../../userTypes/youtubeQueriesType";

type Props = {
  channelId: string;
};

const Channel: React.FC<Props> = ({ channelId }) => {
  const { data: channel } = useQuery<ChannelInfo>({
    queryKey: ["channel", channelId],
    queryFn: getChannel,
  });

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
          </div>
        </>
      )}
    </div>
  );
};

export default Channel;
