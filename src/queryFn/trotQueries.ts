import axios from "axios";
import { Top7Singer, RoundData, Video } from "../userTypes/trotQueriesType";

/**
 * Top 7 멤버 객체 데이터 요청,
 */
const fetchMembers = async (): Promise<Top7Singer[]> => {
  const { data: members } = await axios.get<Top7Singer[]>(
    "/data/mrtrot1/member.json"
  );
  return members;
};

/**
 * Round 데이터 요청
 */
let fetchVideosByRound = async ({ queryKey }: any): Promise<Video[]> => {
  const round = queryKey[1];
  const url = `/data/mrtrot1/${round}.json`;
  const { data } = await axios.get(url);
  const videos = data.map((data: RoundData) => data.items[0]);
  return videos;
};

export { fetchMembers, fetchVideosByRound };
