import React from "react";
import { useLocation } from "react-router-dom";
import VideoCard from "../components/common/videos/VideoCard";

export default function Top7Videos() {
  const {
    state: { member },
  } = useLocation();

  return (
    <div>
      {member && (
        <ul className="grid gap-4 max-w-screen-2xl grid-cols-1 m-4 md:grid-cols-2  lg:grid-cols-3  xl:grid-cols-4 2xl:grid-cols-5 ">
          {member.songs.map((song, index) => (
            <VideoCard video={song.items[0]} key={song.items[0].id} />
          ))}
        </ul>
      )}
    </div>
  );
}
