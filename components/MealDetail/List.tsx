import { StyleSheet, Text, View } from 'react-native';

export default function List({ data }: any) {
    return data.map((dataPoint: any) => (
        <View key={dataPoint} style={styles.container}>
            <Text style={styles.item}>{dataPoint}</Text>
        </View>
    ));
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ecc5a5c7',
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 4,
        marginHorizontal: 12,
    },
    item: {
        color: '#4d2d13c7',
        textAlign: 'center',
    },
});
