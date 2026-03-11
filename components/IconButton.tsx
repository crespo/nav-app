import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, View } from 'react-native';

export default function IconButton({ icon, color, onPress }: any) {
    return (
        <Pressable onPress={onPress} style={({ pressed }) => pressed && styles.pressed}>
            <View style={styles.container}>
                <Ionicons name={icon} size={24} color={color} />
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 4,
        margin: 2,
    },
    pressed: {
        opacity: 0.5,
    },
});
