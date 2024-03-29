import React, { useState } from "react";
import "./App.css";
import Store from "./Store";
import { Address, Restaurant } from "./model/restaurant";

// 객체 data의 타입이 정의되어야 사용가능 // string? no! number? no! 커스텀타입? yes!
let data: Restaurant = {
  name: "황식당",
  category: "korean",
  address: {
    city: "seoul",
    detail: "somewhere",
    zipCode: 123123,
  },
  menu: [
    { name: "ham pizza", price: 18000, category: "pizza" },
    { name: "cheese pizza", price: 15000, category: "pizza" },
  ],
};
enum country {
  Korea, // 0
  USA, // 1
  Japan, // 2
  China, // 3
}

let 홍길동: number = country.Korea; // 0
let 공자: number = country.China; // 3

let BTS: string = country[0]; // Korea
let Michael: string = country[1]; // USA
console.log(Michael);

const App: React.FC = () => {
  // <> 제네릭 : useState만든 개발자가 다른 사람들이 이걸 어떤 타입으로 쓸지 모른다. 그래서 제네릭을 사용해서 "여러분들이 사용할 떄 타입을 입력하세요" 라는 방식으로 만들었다.
  const [restaurant, setRestaurant] = useState<Restaurant>(data);
  const changeAddress = (address: Address) => {
    setRestaurant({ ...restaurant, address: address });
  };
  return <Store info={restaurant} changeAddress={changeAddress} />;
};

export default App;
