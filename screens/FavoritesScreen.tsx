import MealsList from '@/components/MealsList/MealsList';
import { MEALS } from '@/data/dummy-data';
import { useFavorites } from '@/store/context/favorites-context';
import { StyleSheet, Text, View } from 'react-native';

export default function FavoritesScreen() {
    const favoritesContext = useFavorites();
    const favoriteMeals = MEALS.filter((meal) => favoritesContext.ids.includes(meal.id));

    if (favoriteMeals.length === 0) {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>You have no favorite meals yet.</Text>
            </View>
        );
    }
    return <MealsList items={favoriteMeals} />;
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
        color: 'white',
    },
});
