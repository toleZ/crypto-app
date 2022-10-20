import {
  Link,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import CoinsListContainer from "../CoinsListContainer/CoinsListContainer";

const TableCoins = () => {
  return (
    <TableContainer pt={10}>
      <Table variant="simple">
        <TableCaption>
          Crypto List by '
          <Link href="https://github.com/tolez" isExternal color="orange.500">
            tolez
          </Link>
          '
        </TableCaption>
        <Thead>
          <Tr>
            <Th>Coin</Th>
            <Th isNumeric>Price</Th>
            <Th isNumeric>Price Change</Th>
            <Th isNumeric>24hs Volume</Th>
          </Tr>
        </Thead>

        <Tbody>
          <CoinsListContainer />
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TableCoins;
