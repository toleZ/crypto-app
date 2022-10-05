import { createContext, useState } from "react";

export const CoinsContext = createContext()

const CoinsProvider = ({children}) => {
  const [filterCoins, setFilterCoins] = useState('')

  const addFilterCoins = (filter) => {
    setFilterCoins(filter)
  }

  return (
    <CoinsContext.Provider value={{addFilterCoins, filterCoins}}>
      {children}
    </CoinsContext.Provider>
  )
}

export default CoinsProvider