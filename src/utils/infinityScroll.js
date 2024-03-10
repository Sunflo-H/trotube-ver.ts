import axios from "axios";
import { useState } from "react";

// export const handleInfinityScroll = () => {
//   const [isScrolling, setIsScrolling] = useState(false);
//   if (isScrolling) return;
//   const clientHeight = document.documentElement.clientHeight;
//   const scrollHeight = document.documentElement.scrollHeight;
//   const scrollTop = document.documentElement.scrollTop;

//   if ((scrollTop + clientHeight) / scrollHeight >= 0.8) {
//     setIsScrolling(true); // 스크롤 중 상태로 설정

//     setRoundList((prevRoundList) => [...prevRoundList, "결승전"]);

//     setIsScrolling(false); // 스크롤 완료 후 상태 변경
//   }
// };

/**
 * * 무한 스크롤과 그에 따른 검색 기능
 *
 * 필요한 변수
 * 검색 키워드, nextPageToken
 *
 * (keyword, null) fetch -> data 를 배열에 저장후 배열을 렌더링
 * -> 새 token 저장
 * (keyword, nextPageToken) fetch -> data 를 배열에 추가 후 배열을 렌더링
 * -> 새 token 저장
 */
