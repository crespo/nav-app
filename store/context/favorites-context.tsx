import { createContext, useContext, useState } from 'react';

export const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id: any) => {},
    removeFavorite: (id: any) => {},
});

export default function FavoritesContextProvider({ children }: any) {
    const [favoriteMealIds, setFavoriteMealIds] = useState<any>([]);

    function addFavorite(id: any) {
        setFavoriteMealIds((prev: any) => [...prev, id]);
    }

    function removeFavorite(id: any) {
        setFavoriteMealIds((prev: any) => prev.filter((mealId: any) => mealId !== id));
    }

    const value = {
        ids: favoriteMealIds,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite,
    };

    return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
}

export function useFavorites() {
    return useContext(FavoritesContext);
}
