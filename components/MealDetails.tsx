import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
export default function MealDetails({
    affordability,
    complexity,
    duration,
    style,
    textStyle,
}: any) {
    return (
        <View style={[styles.details, style]}>
            <View style={styles.detailContainer}>
                <Ionicons name="time-outline" color={'#aaa'} />
                <Text style={[styles.detailItem, textStyle]}>{duration}m</Text>
            </View>
            <View style={styles.detailContainer}>
                <Ionicons name="analytics" color={'#aaa'} />
                <Text style={[styles.detailItem, textStyle]}>{complexity.toUpperCase()}</Text>
            </View>
            <View style={styles.detailContainer}>
                <Ionicons name="pricetag-outline" color={'#aaa'} />
                <Text style={[styles.detailItem, textStyle]}>{affordability.toUpperCase()}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    },
    detailContainer: {
        flexDirection: 'row',
        marginHorizontal: 6,
        gap: 2,
        alignItems: 'center',
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12,
    },
});
