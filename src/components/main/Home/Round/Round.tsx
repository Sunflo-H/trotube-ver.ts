import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useNavigate } from "react-router-dom";
// import RoundVideos_sample from "./RoundVideos_sample";
// import { fetchRoundVideos } from "../../../../queryFn/trotQueries";

type Props = {
  round: string;
};

const Round: React.FC<Props> = ({ round }) => {
  const navigate = useNavigate();
  const roundStr_noSpace = round.replace(" ", "");
  // const { data: videos } = useQuery({
  //   queryKey: ["roundVideos", roundStr_noSpace],
  //   queryFn: fetchRoundVideos,
  // });
  const handleClick: React.MouseEventHandler<HTMLDivElement> = () => {
    // navigate(`/videos/round/${round}`, { state: videos });
    window.scrollTo(0, 0);
  };
  return (
    <div className="my-10 ">
      <div className="flex items-end px-4 cursor-pointer" onClick={handleClick}>
        <div className="text-2xl font-semibold">{round}</div>
        <div className="hidden lg:block opacity-90 ml-auto">더보기</div>
      </div>
      {/* <RoundVideos_sample videos={videos} /> */}
    </div>
  );
};

export default Round;
