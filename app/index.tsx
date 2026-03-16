import CategoriesScreen from '@/screens/CategoriesScreen';
import FavoritesScreen from '@/screens/FavoritesScreen';
import MealDetailScreen from '@/screens/MealDetailScreen';
import MealsOverviewScreen from '@/screens/MealsOverviewScreen';
// import FavoritesContextProvider from '@/store/context/favorites-context';
import { store } from '@/store/redux/store';
import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: '#80410f' },
                headerTintColor: 'white',
                sceneStyle: { backgroundColor: '#4d2d13' },

                drawerContentStyle: { backgroundColor: '#4d2d13' },
                drawerContentContainerStyle: { backgroundColor: '#36200e' },

                drawerItemStyle: { borderRadius: 16 },
                drawerActiveTintColor: 'white',
                drawerActiveBackgroundColor: '#684c36',
                drawerInactiveTintColor: '#ccc',
            }}
        >
            <Drawer.Screen
                name="Categories"
                component={CategoriesScreen}
                options={{
                    title: 'All Categories',
                    drawerIcon: ({ color, size }: any) => (
                        <Ionicons name="list-outline" color={color} size={size} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Favorites"
                component={FavoritesScreen}
                options={{
                    title: 'My favorites',
                    drawerIcon: ({ color, size }: any) => (
                        <Ionicons name="star" color={color} size={size} />
                    ),
                }}
            />
        </Drawer.Navigator>
    );
}

export default function Index() {
    return (
        <>
            {/* <FavoritesContextProvider> */}
            <Provider store={store}>
                <Stack.Navigator
                    screenOptions={{
                        headerStyle: { backgroundColor: '#80410f' },
                        headerTintColor: 'white',
                        contentStyle: { backgroundColor: '#4d2d13' },
                    }}
                >
                    <Stack.Screen
                        name="MealsCategories"
                        component={DrawerNavigator}
                        options={{
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
                    <Stack.Screen name="MealDetail" component={MealDetailScreen} />
                </Stack.Navigator>
            </Provider>
            {/* </FavoritesContextProvider> */}
        </>
    );
}
