import axios from "axios";

/**
 * Top 7 멤버 데이터 요청
 * @returns
 */
export async function getMember() {
  const { data } = await axios.get("/data/mrtrot1/member.json");

  return data;
}

/**
 * Round 데이터 요청
 * @returns
 */
export const getRound = async ({ queryKey }) => {
  const round = queryKey[1];
  const url = `/data/mrtrot1/${round}.json`;
  const { data } = await axios.get(url);
  const result = data.map((data) => data.items[0]);

  return result;
};
