import List from '@/components/MealDetail/List';
import Subtitle from '@/components/MealDetail/Substitle';
import MealDetails from '@/components/MealDetails';
import { MEALS } from '@/data/dummy-data';
import { useLayoutEffect } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function MealDetailScreen({ route, navigation }: any) {
    const mealId = route.params.mealId;

    useLayoutEffect(() => {
        const mealTitle = MEALS.find((meal: any) => meal.id === mealId)?.title;
        navigation.setOptions({ title: mealTitle });
    }, [mealId, navigation]);

    const selectedMeal = MEALS.filter((meal) => {
        return meal.id === mealId;
    })[0];

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
