import {Image,Pressable,StyleSheet,Text,View,} from 'react-native';

import { Producto } from '../types';
import { COLORS, SPACING, TYPOGRAPHY } from '../theme';

    interface ItemCardProps {
    producto: Producto;
    onPress?: (producto: Producto) => void;
    }

    export default function ItemCard({
    producto,
    onPress,
    }: ItemCardProps) {
    return (
        <Pressable
        onPress={() => onPress?.(producto)}
        style={({ pressed }) => [
            styles.card,
            pressed && styles.cardPressed,
        ]}
        >
        <Image
            source={producto.imagen}
            style={styles.image}
            resizeMode="cover"
        />

        <View style={styles.content}>
            <View style={styles.badge}>
            <Text style={styles.badgeText}>
                {producto.categoria}
            </Text>
            </View>

            <Text style={styles.name}>{producto.nombre}</Text>

            <Text style={styles.description}>
            {producto.descripcion}
            </Text>

            <Text style={styles.price}>{producto.precio}</Text>
        </View>
        </Pressable>
    );
    }

    const styles = StyleSheet.create({
    card: {
        backgroundColor: COLORS.surface,
        borderRadius: 18,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: COLORS.border,
    },
    cardPressed: {
        opacity: 0.8,
        transform: [{ scale: 0.98 }],
    },
    image: {
        width: '100%',
        height: 155,
    },
    content: {
        padding: SPACING.md,
        gap: SPACING.sm,
    },
    badge: {
        alignSelf: 'flex-start',
        backgroundColor: COLORS.surfaceAlt,
        paddingHorizontal: SPACING.sm,
        paddingVertical: SPACING.xs,
        borderRadius: 20,
    },
    badgeText: {
        color: COLORS.textOnDark,
        fontSize: TYPOGRAPHY.fontSizeXS,
        fontWeight: TYPOGRAPHY.fontWeightMedium,
    },
    name: {
        color: COLORS.textPrimary,
        fontSize: TYPOGRAPHY.fontSizeLG,
        fontWeight: TYPOGRAPHY.fontWeightBold,
    },
    description: {
        color: COLORS.textSecondary,
        fontSize: TYPOGRAPHY.fontSizeSM,
        lineHeight: 19,
    },
    price: {
        color: COLORS.primaryDark,
        fontSize: TYPOGRAPHY.fontSizeLG,
        fontWeight: TYPOGRAPHY.fontWeightBold,
    },
    });
