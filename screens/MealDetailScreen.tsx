import IconButton from '@/components/IconButton';
import List from '@/components/MealDetail/List';
import Subtitle from '@/components/MealDetail/Substitle';
import MealDetails from '@/components/MealDetails';
import { MEALS } from '@/data/dummy-data';
import { useFavorites } from '@/store/context/favorites-context';
import { useLayoutEffect } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function MealDetailScreen({ route, navigation }: any) {
    const favoritesContext = useFavorites();

    const mealId: string = route.params.mealId;

    const selectedMeal = MEALS.filter((meal) => {
        return meal.id === mealId;
    })[0];

    const mealIsFavorite = favoritesContext.ids.includes(mealId);

    
    useLayoutEffect(() => {
        const mealTitle = MEALS.find((meal: any) => meal.id === mealId)?.title;
        
        function changeFavoriteStatusHandler() {
            if (mealIsFavorite) {
                favoritesContext.removeFavorite(mealId);
            } else {
                favoritesContext.addFavorite(mealId);
            }
        }

        navigation.setOptions({
            title: mealTitle,
            headerRight: () => {
                return (
                    <IconButton
                        icon={mealIsFavorite ? 'star' : 'star-outline'}
                        color="white"
                        onPress={changeFavoriteStatusHandler}
                    />
                );
            },
        });
    }, [mealId, navigation, mealIsFavorite, favoritesContext]);

    return (
        <ScrollView style={styles.rootContainer}>
            <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails
                duration={selectedMeal.duration}
                affordability={selectedMeal.affordability}
                complexity={selectedMeal.complexity}
                textStyle={styles.detailText}
            />
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                    <List data={selectedMeal.ingredients} />

                    <Subtitle>Steps</Subtitle>
                    <List data={selectedMeal.steps} />
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32,
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white',
    },
    detailText: {
        color: 'white',
    },
    listOuterContainer: {
        alignItems: 'center',
    },
    listContainer: {
        width: '80%',
    },
});
