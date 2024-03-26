import { Address, Restaurant } from "./model/restaurant";

// props도 타입이 필요하다.
interface OwnProps {
  info: Restaurant;
  changeAddress(address: Address): void;
}

const Store: React.FC<OwnProps> = ({ info }) => {
  return <div>{info.name}</div>;
};

export default Store;
