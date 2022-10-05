import { useContext } from "react";
import { CoinsContext } from "../../context/CoinsContext";
import CoinRow from "../CoinRow/CoinRow";

const CoinsList = ({ coins }) => {
  const { filterCoins } = useContext(CoinsContext);

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(filterCoins.toLowerCase())
  );

  return filterCoins
    ? filteredCoins.map((coin) => <CoinRow coin={coin} key={coin.id} />)
    : coins.map((coin) => <CoinRow coin={coin} key={coin.id} />);
};

export default CoinsList;
