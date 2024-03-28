import axios from "axios";
import { Members } from "../userTypes/trotQueriesType";

/**
 * Top 7 멤버 데이터 요청
 * @returns
 */
// export async function getMember: Members () {
//   const { data } = await axios.get("/data/mrtrot1/member.json");
//   console.log(data);

//   return data;
// }

const getMembers = async () => {
  const { data } = await axios.get("/data/mrtrot1/member.json");
  console.log(data);

  return data;
};

/**
 * Round 데이터 요청
 * @returns
 */
// export const getRound = async ({ queryKey }) => {
export const getRound = async () => {
  // const round = queryKey[1];
  // const url = `/data/mrtrot1/${round}.json`;
  // const { data } = await axios.get(url);
  // const result = data.map((data) => data.items[0]);
  // return result;
};

export { getMembers };
