import axios from "axios";
import { Members, RoundData, Video } from "../userTypes/trotQueriesType";

/**
 * Top 7 멤버 객체 데이터 요청,
 * name:string,
 * songs:any[], rank}
 * @returns data
 */
const fetchMembers = async () => {
  const { data: Members } = await axios.get("/data/mrtrot1/member.json");
  console.log(Members);
  return Members;
};

/**
 * Round 데이터 요청
 * @returns
 */
// export const getRound = async ({ queryKey }) => {
// export const getRound = async () => {
// const round = queryKey[1];
// const url = `/data/mrtrot1/${round}.json`;
// const { data } = await axios.get(url);
// const result = data.map((data) => data.items[0]);
// return result;
// };

const fetchVideosByRound = async ({ queryKey }: any) => {
  const round = queryKey[1];
  const url = `/data/mrtrot1/${round}.json`;
  const { data } = await axios.get(url);
  const videos = data.map((data: RoundData) => data.items[0]);
  return videos;
};

export { fetchMembers, fetchVideosByRound };
