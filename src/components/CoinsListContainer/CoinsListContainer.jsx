import { Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import CoinsList from "../CoinsList/CoinsList";

const CoinsListContainer = () => {
  const [coins, setCoins] = useState();

  useEffect(() => {
    const opt = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "e513babe27msh18f7b403af5fae6p18b829jsn9597464ddbf1",
        "X-RapidAPI-Host": "coingecko.p.rapidapi.com",
      },
    };
    fetch(
      "https://coingecko.p.rapidapi.com/coins/markets?vs_currency=usd&page=1&per_page=100&order=market_cap_desc",
      opt
    )
      .then((res) => res.json())
      .then((data) => setCoins(data))
      .catch((error) => console.warn(error));
  }, []);

  while (!coins)
    return (
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    );

  return coins && <CoinsList coins={coins} />;
};

export default CoinsListContainer;
