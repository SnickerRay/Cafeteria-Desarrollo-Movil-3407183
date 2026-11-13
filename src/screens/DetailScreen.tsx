
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { useRoute } from '@react-navigation/native';
import type { RouteProp } from '@react-navigation/native';

import { productos } from '../data/mockData';
import { COLORS, SPACING, TYPOGRAPHY } from '../theme';
import type { HomeStackParamList } from '../navigation/types';
import { useSavedStore } from '../Store/savedStore';

type DetailRouteProp = RouteProp<HomeStackParamList, 'HomeDetail'>;

export default function DetailScreen() {
  const route = useRoute<DetailRouteProp>();
  const { id, name } = route.params;

  const producto = productos.find(
    (item) => item.id.toString() === id,
  );

  const addItem = useSavedStore((state) => state.addItem);
  const removeItem = useSavedStore((state) => state.removeItem);

  const isSaved = useSavedStore((state) =>
    state.savedIds.includes(Number(id)),
  );

  if (!producto) {
    return (
      <View style={styles.center}>
        <Text style={styles.title}>Producto no encontrado</Text>
      </View>
    );
  }

  const handleSave = () => {
    if (isSaved) {
      removeItem(producto.id);
    } else {
      addItem(producto.id);
    }
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <Image
        source={producto.imagen}
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.info}>
        <Text style={styles.category}>{producto.categoria}</Text>
        <Text style={styles.title}>{name}</Text>

        <Text style={styles.description}>
          {producto.descripcion}
        </Text>

        <Text style={styles.price}>{producto.precio}</Text>

        <Pressable
          style={({ pressed }) => [
            styles.button,
            isSaved && styles.buttonSaved,
            pressed && styles.buttonPressed,
          ]}
          onPress={handleSave}
        >
          <Text style={styles.buttonText}>
            {isSaved ? 'Quitar de guardados' : 'Guardar'}
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    paddingBottom: SPACING.xl,
  },
  image: {
    width: '100%',
    height: 260,
  },
  info: {
    padding: SPACING.lg,
    gap: SPACING.md,
  },
  category: {
    color: COLORS.primary,
    fontSize: TYPOGRAPHY.fontSizeMD,
    fontWeight: '600',
  },
  title: {
    color: COLORS.textOnDark,
    fontSize: TYPOGRAPHY.fontSizeXXL,
    fontWeight: 'bold',
  },
  description: {
    color: COLORS.textOnDark,
    fontSize: TYPOGRAPHY.fontSizeMD,
    lineHeight: 24,
  },
  price: {
    color: COLORS.primary,
    fontSize: TYPOGRAPHY.fontSizeXL,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: COLORS.primary,
    padding: SPACING.md,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: SPACING.sm,
  },
  buttonSaved: {
    backgroundColor: COLORS.surfaceAlt,
  },
  buttonPressed: {
    opacity: 0.75,
  },
  buttonText: {
    color: COLORS.textOnDark,
    fontSize: TYPOGRAPHY.fontSizeMD,
    fontWeight: 'bold',
  },
  center: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    alignItems: 'center',
    padding: SPACING.lg,
  },
});
