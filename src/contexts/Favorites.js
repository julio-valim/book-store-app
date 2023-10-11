import { createContext, useContext, useState } from "react";

export const FavoritesContext = createContext();
FavoritesContext.displayName = "FavoritesBooks"

export default function FavoritesProvider({ children }) {

  const [ favorite, setFavorite ] = useState([])

  return (
    <FavoritesContext.Provider
      value={{ favorite, setFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavoriteContext(){
  const { favorite, setFavorite } = useContext(FavoritesContext)

  function addFavorite(newFavorite){
    const repeatedFavorite = favorite.some(el=>el.id===newFavorite.id)

    let newFavoriteList = [...favorite]

    if(!repeatedFavorite){
      newFavoriteList.push(newFavorite)
      return setFavorite(newFavoriteList)
    }

    newFavoriteList = favorite.filter(el=>el.id!==newFavorite.id)
    return setFavorite(newFavoriteList)
  }
  return {
    favorite,
    addFavorite
  }
}