import React from "react";
import { useNavigate } from "react-router-dom";
import { format, render, cancel, register } from "timeago.js";
import { Video } from "../../userTypes/trotQueriesType";
import { YoutubeVideo } from "../../userTypes/youtubeQueriesType";

type Props = {
  // 물음표를 해줘야 props로 전달을 안해줘도 되는구나
  trotVideo?: Video;
  youtubeVideo?: YoutubeVideo;
  video?: Video | YoutubeVideo;
};

const VideoCard: React.FC<Props> = ({ youtubeVideo, trotVideo, video }) => {
  // const { snippet } = trotVideo ||
  //   youtubeVideo || {
  //     snippet: {
  //       channelTitle: "",
  //       publishedAt: "",
  //       title: "",
  //       thumbnails: { default: { url: "" }, medium: { url: "" } },
  //     },
  //   };
  // const { channelTitle, publishedAt, title, thumbnails } = snippet;
  const navigate = useNavigate();

  const handleClick = () => {
    if (youtubeVideo) {
      navigate(`/videos/watch/${youtubeVideo.id}`, {
        state: { youtubeVideo, trotVideo },
      });
    } else if (trotVideo) {
      navigate(`/videos/watch/${trotVideo.id}`, {
        state: { youtubeVideo, trotVideo },
      });
    }

    window.scrollTo(0, 0);
  };

  return (
    <></>
    // <li
    //   className="cursor-pointer bg-white rounded-2xl px-2 mb-4 md:p-0 md:m-0  "
    //   onClick={handleClick}
    // >
    //   <img
    //     className="rounded-xl w-full md:max-h-40"
    //     src={thumbnails.medium.url}
    //     alt={title}
    //   />

    //   <div className="px-px">
    //     <div className="mt-3 font-semibold line-clamp-2">{title}</div>
    //     <div className="mt-2 opacity-80 text-sm">{channelTitle}</div>
    //     <div className="opacity-80 text-sm">{format(publishedAt)}</div>
    //   </div>
    // </li>
  );
};

export default VideoCard;
