import CategoriesScreen from '@/screens/CategoriesScreen';
import MealDetailScreen from '@/screens/MealDetailScreen';
import MealsOverviewScreen from '@/screens/MealsOverviewScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

const Stack = createNativeStackNavigator();

export default function Index() {
    return (
        <>
            <StatusBar style="light" />
            <Stack.Navigator
                screenOptions={{
                    animation: 'fade',
                    headerStyle: { backgroundColor: '#80410fc7' },
                    headerTintColor: 'white',
                    contentStyle: { backgroundColor: '#4d2d13c7' },
                }}
            >
                <Stack.Screen
                    name="MealsCategories"
                    component={CategoriesScreen}
                    options={{
                        title: 'All Categories',
                    }}
                />
                <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
                <Stack.Screen name="MealDetail" component={MealDetailScreen} />
            </Stack.Navigator>
        </>
    );
}
