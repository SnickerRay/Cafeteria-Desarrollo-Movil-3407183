
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import ItemCard from '../components/itemCard';
import { productos } from '../data/mockData';
import { COLORS, SPACING, TYPOGRAPHY } from '../theme';
import { useSavedStore } from '../Store/savedStore';

export default function FavoritesScreen() {
  const savedIds = useSavedStore((state) => state.savedIds);
  const removeItem = useSavedStore((state) => state.removeItem);

  const favoritos = productos.filter((producto) =>
    savedIds.includes(producto.id),
  );

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.title}>Tus cafés guardados</Text>

        <Text style={styles.subtitle}>
          Aquí encontrarás tus favoritos de Bruma Café.
        </Text>

        <Text style={styles.counter}>
          {favoritos.length} productos guardados
        </Text>
      </View>

      <FlatList
        data={favoritos}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.list}
        ListEmptyComponent={
          <View style={styles.empty}>
            <Text style={styles.emptyTitle}>
              Todavía no tienes cafés guardados.
            </Text>
            <Text style={styles.emptyText}>
              Explora nuestro menú y guarda los que más te gusten.
            </Text>
          </View>
        }
        renderItem={({ item }) => (
          <View style={styles.card}>
            <ItemCard producto={item} />

            <Pressable
              style={({ pressed }) => [
                styles.removeButton,
                pressed && styles.buttonPressed,
              ]}
              onPress={() => removeItem(item.id)}
            >
              <Text style={styles.removeText}>
                Quitar de guardados
              </Text>
            </Pressable>
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
  counter: {
    color: COLORS.primary,
    fontSize: TYPOGRAPHY.fontSizeMD,
    fontWeight: TYPOGRAPHY.fontWeightBold,
  },
  list: {
    paddingHorizontal: SPACING.md,
    paddingBottom: SPACING.xl,
    flexGrow: 1,
  },
  row: {
    gap: SPACING.md,
  },
  card: {
    flex: 1,
    marginBottom: SPACING.md,
  },
  removeButton: {
    backgroundColor: COLORS.surfaceAlt,
    padding: SPACING.sm,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: SPACING.sm,
  },
  removeText: {
    color: COLORS.textOnDark,
    fontSize: TYPOGRAPHY.fontSizeSM,
    fontWeight: TYPOGRAPHY.fontWeightMedium,
  },
  buttonPressed: {
    opacity: 0.7,
  },
  empty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: SPACING.xl,
    gap: SPACING.md,
  },
  emptyTitle: {
    color: COLORS.textOnDark,
    fontSize: TYPOGRAPHY.fontSizeLG,
    fontWeight: TYPOGRAPHY.fontWeightBold,
    textAlign: 'center',
  },
  emptyText: {
    color: COLORS.placeholder,
    fontSize: TYPOGRAPHY.fontSizeSM,
    textAlign: 'center',
  },
});
