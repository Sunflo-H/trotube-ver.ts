import axios, { AxiosResponse } from "axios";
import {
  Member,
  Members,
  RoundData,
  Video,
} from "../userTypes/trotQueriesType";

/**
 * Top 7 멤버 객체 데이터 요청,
 * name:string,
 * songs:any[], rank}
 * @returns data
 */
// 변수에 함수 매개변수, 리턴 타입에 대한 명시적 설정
let assignClass: (n: string) => void;

// 변수에 함수 값 할당
assignClass = function (name) {
  document.documentElement.classList.add(name);
};

const fetchMembers = async (): Promise<Member[]> => {
  const { data: Members } = await axios.get<Member[]>(
    "/data/mrtrot1/member.json"
  );
  return Members;
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
