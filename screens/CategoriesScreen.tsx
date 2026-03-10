import CategoryGridTile from '@/components/CategoryGridTile';
import { CATEGORIES } from '@/data/dummy-data';
import { FlatList, StyleSheet } from 'react-native';

export default function CategoriesScreen({ navigation }: any) {
    function renderCategoryItem(itemData: any) {
        function pressHandler() {
            navigation.navigate('MealsOverview', {
                categoryId: itemData.item.id,
            });
        }

        return (
            <CategoryGridTile
                title={itemData.item.title}
                color={itemData.item.color}
                onPress={pressHandler}
            />
        );
    }

    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={renderCategoryItem}
            numColumns={2}
        />
    );
}

const styles = StyleSheet.create({});
