import CategoryGridTile from '@/components/CategoryGridTile';
import { CATEGORIES } from '@/data/dummy-data';
import { FlatList, StyleSheet } from 'react-native';

function renderCategoryItem(itemData: any) {
    return <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />;
}

export default function CategoriesScreen() {
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
