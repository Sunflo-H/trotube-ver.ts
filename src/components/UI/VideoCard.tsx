import React from "react";
import { useNavigate } from "react-router-dom";
import { format, render, cancel, register } from "timeago.js";
import { Video } from "../../userTypes/trotQueriesType";
import { YoutubeVideo } from "../../userTypes/youtubeQueriesType";

type Props = {
  youtubeVideo: YoutubeVideo;
  top7Videos: Video;
};

const VideoCard: React.FC<Props> = ({ youtubeVideo, top7Videos }) => {
  const { channelTitle, publishedAt, title, thumbnails } =
    youtubeVideo.snippet && top7Videos.snippet;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/videos/watch/${youtubeVideo.id && top7Videos.id}`, {
      state: { youtubeVideo, top7Videos },
    });
    window.scrollTo(0, 0);
  };

  return (
    <li
      className="cursor-pointer bg-white rounded-2xl px-2 mb-4 md:p-0 md:m-0  "
      onClick={handleClick}
    >
      <img
        className="rounded-xl w-full md:max-h-40"
        src={thumbnails.medium.url}
        alt={title}
      />

      <div className="px-px">
        <div className="mt-3 font-semibold line-clamp-2">{title}</div>
        <div className="mt-2 opacity-80 text-sm">{channelTitle}</div>
        <div className="opacity-80 text-sm">{format(publishedAt)}</div>
      </div>
    </li>
  );
};

export default VideoCard;
