import React from "react";
import { useLocation } from "react-router-dom";
import VideoCard from "../components/UI/VideoCard";
import { Song } from "../userTypes/trotQueriesType";

const Top7Videos = () => {
  const {
    state: { member },
  } = useLocation();
  console.log(member);
  return (
    <div>
      {member && (
        <ul className="grid gap-4 max-w-screen-2xl grid-cols-1 m-4 md:grid-cols-2  lg:grid-cols-3  xl:grid-cols-4 2xl:grid-cols-5 ">
          {member.songs.map((song: Song) => (
            <VideoCard
              trotVideo={song.items[0]}
              key={song.items[0].id}
              video={song.items[0]}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Top7Videos;
