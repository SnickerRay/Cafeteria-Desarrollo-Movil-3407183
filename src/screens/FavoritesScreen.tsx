
import { FlatList, StyleSheet, Text, View } from 'react-native';
import ItemCard from '../components/itemCard';
import { productos } from '../data/mockData';
import { COLORS, SPACING, TYPOGRAPHY } from '../theme';

const favoritos = productos.filter((producto) =>
    [1, 2, 3].includes(producto.id),
);

export default function FavoritesScreen() {
    return (
        <View style={styles.container}>
        <View style={styles.heading}>
            <Text style={styles.title}>Tus favoritos</Text>
            <Text style={styles.subtitle}>
            Una selección especial de Bruma Café.
            </Text>
        </View>

        <FlatList
            data={favoritos}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            columnWrapperStyle={styles.row}
            contentContainerStyle={styles.list}
            renderItem={({ item }) => (
            <View style={styles.card}>
                <ItemCard producto={item} />
            </View>
            )}
        />
        </View>
    );
    }

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    heading: {
        paddingHorizontal: SPACING.lg,
        paddingTop: SPACING.lg,
        paddingBottom: SPACING.md,
        gap: SPACING.sm,
    },
    title: {
        color: COLORS.textOnDark,
        fontSize: TYPOGRAPHY.fontSizeXL,
        fontWeight: TYPOGRAPHY.fontWeightBold,
    },
    subtitle: {
        color: COLORS.placeholder,
        fontSize: TYPOGRAPHY.fontSizeSM,
    },
    list: {
        paddingHorizontal: SPACING.md,
        paddingBottom: SPACING.xl,
    },
    row: {
        gap: SPACING.md,
    },
    card: {
        flex: 1,
        marginBottom: SPACING.md,
    },
    });
