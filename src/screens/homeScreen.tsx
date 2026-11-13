
import { useCallback, useMemo, useState } from 'react';

import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import ItemCard from '../components/itemCard';
import { productos } from '../data/mockData';
import { COLORS, SPACING, TYPOGRAPHY } from '../theme';
import type { Producto } from '../types';

import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { HomeStackParamList } from '../navigation/types';

import { useSavedStore } from '../Store/savedStore';

export default function HomeScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParamList, 'HomeList'>>();

  const [busqueda, setBusqueda] = useState('');

  const savedIds = useSavedStore((state) => state.savedIds);
  const addItem = useSavedStore((state) => state.addItem);
  const removeItem = useSavedStore((state) => state.removeItem);

  const productosFiltrados = useMemo(() => {
    const termino = busqueda.trim().toLocaleLowerCase();

    if (!termino) {
      return productos;
    }

    return productos.filter((producto) => {
      return (
        producto.nombre.toLocaleLowerCase().includes(termino) ||
        producto.descripcion.toLocaleLowerCase().includes(termino) ||
        producto.categoria.toLocaleLowerCase().includes(termino)
      );
    });
  }, [busqueda]);

  const renderItem = useCallback(
    ({ item }: { item: Producto }) => {
      const isSaved = savedIds.includes(item.id);

      return (
        <View style={styles.productContainer}>
          <ItemCard
            producto={item}
            onPress={(producto) =>
              navigation.navigate('HomeDetail', {
                id: producto.id.toString(),
                name: producto.nombre,
              })
            }
          />

          <Pressable
            style={({ pressed }) => [
              styles.saveButton,
              isSaved && styles.savedButton,
              pressed && styles.buttonPressed,
            ]}
            onPress={() =>
              isSaved
                ? removeItem(item.id)
                : addItem(item.id)
            }
          >
            <Text style={styles.saveButtonText}>
              {isSaved ? 'Quitar de guardados' : 'Guardar'}
            </Text>
          </Pressable>
        </View>
      );
    },
    [navigation, savedIds, addItem, removeItem],
  );

  const renderEmpty = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyEmoji}>☕</Text>
      <Text style={styles.emptyTitle}>
        No encontramos esa bebida
      </Text>
      <Text style={styles.emptyText}>
        Prueba con otro nombre o categoría y descubre algo nuevo.
      </Text>
    </View>
  );

  return (
    <KeyboardAvoidingView
      style={styles.screen}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <FlatList
        data={productosFiltrados}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.brand}>BRUMA CAFÉ</Text>

            <Text style={styles.welcome}>
              Encuentra tu próximo café favorito.
            </Text>

            <Text style={styles.subtitle}>
              Una pausa, un aroma, un momento para ti.
            </Text>

            <Text style={styles.sectionTitle}>
              Nuestro menú
            </Text>

            <TextInput
              style={styles.searchInput}
              placeholder="Buscar por nombre o categoría..."
              placeholderTextColor={COLORS.placeholder}
              value={busqueda}
              onChangeText={setBusqueda}
              autoCapitalize="none"
              returnKeyType="search"
              accessibilityLabel="Buscar productos del menú"
            />

            <Text style={styles.resultCount}>
              {productosFiltrados.length === 1
                ? '1 bebida encontrada'
                : `${productosFiltrados.length} bebidas encontradas`}
            </Text>
          </View>
        }
        ListEmptyComponent={renderEmpty}
        contentContainerStyle={styles.listContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  listContent: {
    paddingHorizontal: SPACING.md,
    paddingTop: SPACING.xl,
    paddingBottom: SPACING.xxl,
    flexGrow: 1,
  },
  header: {
    marginBottom: SPACING.lg,
  },
  brand: {
    color: COLORS.primary,
    fontSize: TYPOGRAPHY.fontSizeSM,
    fontWeight: TYPOGRAPHY.fontWeightBold,
    letterSpacing: 3,
    marginBottom: SPACING.md,
  },
  welcome: {
    color: COLORS.textOnDark,
    fontSize: TYPOGRAPHY.fontSizeXXL,
    fontWeight: TYPOGRAPHY.fontWeightBold,
    marginBottom: SPACING.sm,
  },
  subtitle: {
    color: COLORS.border,
    fontSize: TYPOGRAPHY.fontSizeMD,
    lineHeight: 22,
    marginBottom: SPACING.xl,
  },
  sectionTitle: {
    color: COLORS.textOnDark,
    fontSize: TYPOGRAPHY.fontSizeXL,
    fontWeight: TYPOGRAPHY.fontWeightSemiBold,
    marginBottom: SPACING.md,
  },
  searchInput: {
    backgroundColor: COLORS.surface,
    color: COLORS.textPrimary,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 14,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.md,
    fontSize: TYPOGRAPHY.fontSizeMD,
  },
  resultCount: {
    color: COLORS.border,
    fontSize: TYPOGRAPHY.fontSizeSM,
    marginTop: SPACING.sm,
  },
  separator: {
    height: SPACING.md,
  },
  productContainer: {
    flex: 1,
  },
  saveButton: {
    backgroundColor: COLORS.primary,
    padding: SPACING.md,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: SPACING.sm,
  },
  savedButton: {
    backgroundColor: COLORS.surfaceAlt,
  },
  saveButtonText: {
    color: COLORS.textOnDark,
    fontSize: TYPOGRAPHY.fontSizeSM,
    fontWeight: TYPOGRAPHY.fontWeightBold,
  },
  buttonPressed: {
    opacity: 0.7,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.xxl,
  },
  emptyEmoji: {
    fontSize: 40,
    marginBottom: SPACING.md,
  },
  emptyTitle: {
    color: COLORS.textOnDark,
    fontSize: TYPOGRAPHY.fontSizeLG,
    fontWeight: TYPOGRAPHY.fontWeightBold,
    textAlign: 'center',
    marginBottom: SPACING.sm,
  },
  emptyText: {
    color: COLORS.border,
    fontSize: TYPOGRAPHY.fontSizeMD,
    textAlign: 'center',
    lineHeight: 22,
  },
});
