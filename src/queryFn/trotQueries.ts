import axios from "axios";
import { Member, RoundData, Video } from "../userTypes/trotQueriesType";

/**
 * Top 7 멤버 객체 데이터 요청,
 * @returns Members
 */
const fetchMembers = async (): Promise<Member[]> => {
  const { data: members } = await axios.get<Member[]>(
    "/data/mrtrot1/member.json"
  );
  console.log(members);
  return members;
};

/**
 * Round 데이터 요청
 * @returns
 */

let fetchVideosByRound = async ({ queryKey }: any): Promise<Video[]> => {
  const round = queryKey[1];
  const url = `/data/mrtrot1/${round}.json`;
  const { data } = await axios.get(url);
  const videos = data.map((data: RoundData) => data.items[0]);
  return videos;
};

export { fetchMembers, fetchVideosByRound };
