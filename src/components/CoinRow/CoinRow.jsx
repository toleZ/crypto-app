import { HStack, Image, Td, Text, Tr, VStack } from "@chakra-ui/react";

const CoinRow = ({ coin }) => {
  return (
    <Tr>
      <Td>
        <HStack>
          <Image boxSize="32px" src={coin.image} alt={coin.id} />
          <VStack align={"flex-start"} spacing={0.5}>
            <Text color="whiteAlpha.800">{coin.name} </Text>
            <Text color="whiteAlpha.500">{coin.symbol}</Text>
          </VStack>
        </HStack>
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
