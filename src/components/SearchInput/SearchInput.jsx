import { Input, InputGroup, InputLeftElement, Button } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useContext, useState } from "react";
import { CoinsContext } from "../../context/CoinsContext";

const SearchInput = () => {
  const {addFilterCoins} = useContext(CoinsContext)
  const [searchValue, setSearchValue] = useState('')

  const handleChange = (e) => {
    setSearchValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addFilterCoins(searchValue)
  }

  return (
    <InputGroup position='fixed' bgColor='white'>
      <InputLeftElement>
        <Button size='xs' onClick={handleSubmit}>
          <SearchIcon />
        </Button>
      </InputLeftElement>

      <Input variant='flushed' type="search" placeholder="Coin to search" onChange={handleChange} value={searchValue}/>
    </InputGroup>
  );
};

export default SearchInput;
