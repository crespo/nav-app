import MealsList from '@/components/MealsList/MealsList';
import { MEALS } from '@/data/dummy-data';
import { useFavorites } from '@/store/context/favorites-context';

export default function FavoritesScreen() {
    const favoritesContext = useFavorites();
    const favoriteMeals = MEALS.filter((meal) => favoritesContext.ids.includes(meal.id));
    return <MealsList items={favoriteMeals} />;
}
