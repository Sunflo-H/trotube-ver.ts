import React from "react";
import Top7 from "../components/main/HomePage/Top7/Top7";
import Round from "../components/main/HomePage/Round/Round";
import Round_underMd from "../components/main/HomePage/Round/Round_underMd";
import { useEffect } from "react";
import { useState } from "react";

export default function Home() {
  const [isScrolling, setIsScrolling] = useState(false);
  const [roundList, setRoundList] = useState([
    `본선 1차전`,
    `본선 2차전`,
    `본선 3차전`,
    `준결승전`,
    `결승전`,
  ]);
  const handleInfinityScroll = () => {
    if (isScrolling) return;
    const clientHeight = document.documentElement.clientHeight;
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;

    if ((scrollTop + clientHeight) / scrollHeight >= 0.8) {
      setIsScrolling(true); // 스크롤 중 상태로 설정

      setRoundList((prevRoundList) => [...prevRoundList, "결승전"]);

      setIsScrolling(false); // 스크롤 완료 후 상태 변경
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleInfinityScroll);
    return () => {
      window.removeEventListener("scroll", handleInfinityScroll);
    };
  }, []);

  return (
    <div className=" relative w-full h-full px-4 ">
      <Top7 />

      {/* md 이상일 때 보여질 라운드별 영상 컨텐츠*/}
      <div className="hidden md:block">
        {roundList.map((round, index) => (
          <Round round={round} key={index} />
        ))}
      </div>

      {/* md 미만일 때 보여질 라운드별 영상 컨텐츠*/}
      <div className="md:hidden my-10">
        <p className="text-2xl font-bold">라운드별 모아보기</p>
        <ul className="flex flex-wrap  md:w-auto mt-4 gap-4 font-bold text-gray-900 justify-center ">
          {roundList.map((round, index) => (
            <Round_underMd round={round} key={index} />
          ))}
        </ul>
      </div>

      {/* 마진 병합 해제용 */}
      <div className="p-1"></div>
    </div>
  );
}
