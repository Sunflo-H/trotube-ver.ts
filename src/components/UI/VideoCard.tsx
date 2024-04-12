import React from "react";
import { useNavigate } from "react-router-dom";
import { format, render, cancel, register } from "timeago.js";
import { Video } from "../../userTypes/trotQueriesType";
import { YoutubeVideo } from "../../userTypes/youtubeQueriesType";

type Props = {
  // 물음표를 해줘야 props로 전달을 안해줘도 되는구나
  // 물음표를 해주면 이게 undefined 일수 있다는 에러가 발생하네
  // trotVideo?: Video;
  // youtubeVideo?: YoutubeVideo;
  video: Video | YoutubeVideo;
};

const VideoCard: React.FC<Props> = ({ video }) => {
  const { channelTitle, publishedAt, title, thumbnails } = video.snippet;
  function isYoutubeVideo(video: Video | YoutubeVideo): video is YoutubeVideo {
    return (
      (video as YoutubeVideo).id !== undefined &&
      (video as YoutubeVideo).id.videoId !== undefined
    );
  }

  const navigate = useNavigate();

  const handleClick = () => {
    if (isYoutubeVideo(video)) {
      navigate(`/videos/watch/${video.id.videoId}`, {
        state: { video },
      });
    } else {
      navigate(`/videos/watch/${video.id}`, {
        state: { video },
      });
    }
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
