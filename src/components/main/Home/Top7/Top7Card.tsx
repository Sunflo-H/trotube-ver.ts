import { Navigate, useNavigate } from "react-router-dom";
import { Member } from "../../../../userTypes/trotQueriesType";

type Props = {
  member: Member;
};

const Top7Card: React.FC<Props> = ({ member }) => {
  const { name, rank } = member;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/videos/top7/${name}`, {
      state: { member },
    });
  };

  return (
    <li
      className={`${rank}  sm:w-full sm:h-full rounded-2xl lg:rounded-none top7 cursor-pointer`}
      onClick={handleClick}
    >
      <img
        className="h-full m-auto duration-300 "
        src={`/img/${name}.png`}
        alt={name}
      />
    </li>
  );
};

export default Top7Card;
