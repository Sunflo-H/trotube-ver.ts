/**
 * 커스텀 타입을 만드는 방법
 * 1. interface
 * 2. type
 */

// let data = {
//     name: "식당",
//     category: "korean",
//     address: {
//       city: "seoul",
//       detail: "somewhere",
//       zipCode: 123123,
//     },
//     menu: [
//       { name: "ham pizza", price: 18000, category: "pizza" },
//       { name: "cheese pizza", price: 15000, category: "pizza" },
//     ],
//   };

export type Restaurant = {
  name: string;
  category: string;
  address: Address;
  menu: Menu;
};

type Address = {
  city: string;
  detail: string;
  zipCode: number;
};

type Menu = {
  name: string;
  price: number;
  category: string;
}[];
