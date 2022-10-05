import { Image, Td, Text, Tr } from "@chakra-ui/react";

const CoinRow = ({ coin }) => {
  return (
    <Tr>
      <Td>
        <Image boxSize="32px" src={coin.image} alt={coin.id} />{" "}
        <Text color="black">{coin.name} </Text>
        <Text color="lightgrey" as="kbd">
          {coin.symbol}
        </Text>{" "}
      </Td>
      <Td isNumeric>${coin.current_price}</Td>
      <Td
        isNumeric
        color={coin.price_change_percentage_24h < 0 ? "red" : "green"}
      >
        ${coin.price_change_percentage_24h}%
      </Td>
      <Td isNumeric>${coin.price_change_24h}</Td>
    </Tr>
  );
};

export default CoinRow;
