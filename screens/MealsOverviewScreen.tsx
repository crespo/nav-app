import MealsList from '@/components/MealsList/MealsList';
import { CATEGORIES, MEALS } from '@/data/dummy-data';
import { useLayoutEffect } from 'react';

export default function MealsOverviewScreen({ route, navigation }: any) {
    const catId = route.params.categoryId;

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    });

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category: any) => category.id === catId)?.title;
        navigation.setOptions({ title: categoryTitle });
    }, [catId, navigation]);

    return <MealsList items={displayedMeals} />;
}
