import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';

export default function CategoryGridTile({ title, color, onPress }: any) {
    return (
        <View style={styles.gridItem}>
            <Pressable
                android_ripple={{ color: '#b4dd1e' }}
                style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null]}
                onPress={onPress}
            >
                <View style={[styles.gridInnerContainer, { backgroundColor: color }]}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },
    button: {
        flex: 1,
    },
    buttonPressed: {
        opacity: 0.5,
    },
    gridInnerContainer: {
        flex: 1,
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    },
});
