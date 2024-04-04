import React from "react";
import { useNavigate } from "react-router-dom";
import { Video } from "../../../userTypes/trotQueriesType";
import { YoutubeVideo } from "../../../userTypes/youtubeQueriesType";

type Props = {
  video: YoutubeVideo;
};

const RelatedVideoCard: React.FC<Props> = ({ video }) => {
  const { channelTitle, publishedAt, title, thumbnails } = video.snippet;

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/videos/watch/${video.id}`, { state: { video } });
    window.scrollTo(0, 0);
  };

  return (
    <li className="cursor-pointer flex mb-2 " onClick={handleClick}>
      <img
        src={thumbnails.medium.url}
        alt={title}
        className="rounded-xl w-48 mr-2 "
      />

      <div className="px-px">
        <div className="text-sm line-clamp-2">{title}</div>
        <div className="opacity-80 text-xs my-px">{channelTitle}</div>
        <div className="opacity-80 text-xs">{publishedAt}</div>
      </div>
    </li>
  );
};

export default RelatedVideoCard;
