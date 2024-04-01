import { useLocation } from "react-router-dom";
import VideoCard from "../components/UI/VideoCard";
import { Video } from "../userTypes/trotQueriesType";

const RoundVideos: React.FC = () => {
  const { state: videos } = useLocation();
  return (
    <div>
      {videos && (
        <ul className="grid gap-4 max-w-screen-2xl grid-cols-1 m-4 md:grid-cols-2  lg:grid-cols-3  xl:grid-cols-4 2xl:grid-cols-5 ">
          {videos.map((video: Video) => (
            <VideoCard video={video} key={video.id} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default RoundVideos;
