import { Navigate, useNavigate } from "react-router-dom";

type props = {
  member: any;
};

// export default function Top7Card({ member }) {
//   const { name, rank } = member;
//   const navigate = useNavigate();
//   const handleClick = () => {
//     navigate(`/videos/top7/${name}`, {
//       state: { member },
//     });
//   };

//   return (
//     <li
//       className={`${rank}  sm:w-full sm:h-full rounded-2xl lg:rounded-none top7 cursor-pointer`}
//       onClick={handleClick}
//     >
//       <img
//         className="h-full m-auto duration-300 "
//         src={`/img/${name}.png`}
//         alt={name}
//       />
//     </li>
//   );
// }
