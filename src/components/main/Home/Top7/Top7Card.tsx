import { useNavigate } from "react-router-dom";
import { Top7Singer } from "../../../../userTypes/trotQueriesType";

type Props = {
  top7Singer: Top7Singer;
};

const Top7Card: React.FC<Props> = ({ top7Singer }) => {
  const { name, rank } = top7Singer;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/videos/top7/${name}`, {
      state: { top7Singer },
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
