import { StyleSheet, Text, View } from 'react-native';

export default function Subtitle({ children }: any) {
    return (
        <View style={styles.container}>
            <Text style={styles.subtitle}>{children}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 12,
        marginVertical: 4,
        padding: 6,
        borderBottomColor: '#ecc5a5c7',
        borderBottomWidth: 1,
    },
    subtitle: {
        color: '#ecc5a5c7',
        fontSize: 18,
        fontWeight: 'bold',
        margin: 4,
        textAlign: 'center',
    },
});
