{/*Este componente será responsable de mostrar una sola tarjeta de producto*/}

import {Image,Pressable, StyleSheet,Text,View,} from 'react-native';
import { Producto } from '../types';

interface ItemCardProps {
    producto: Producto;
    }

    export default function ItemCard({ producto }: ItemCardProps) {
    return (
        <View style={styles.productCard}>
        <Image
            source={producto.imagen}
            style={styles.productImage}
            resizeMode="cover"
        />

        <Text style={styles.productName}>
            {producto.nombre}
        </Text>

        <Text style={styles.productDescription}>
            {producto.descripcion}
        </Text>

        <Text style={styles.productPrice}>
            {producto.precio}
        </Text>

        <Pressable
            style={({ pressed }) => [
            styles.productButton,
            pressed && styles.productButtonPressed,
            ]}
            onPress={() =>
            console.log(`${producto.nombre} seleccionado`)
            }
        >
            <Text style={styles.productButtonText}>
            Ver producto
            </Text>
        </Pressable>
        </View>
    );
    }

    const styles = StyleSheet.create({
    productCard: {
        backgroundColor: '#F2E4D0',
        borderRadius: 20,
        padding: 14,
        width: 220,
        flexDirection: 'column',
    },
    productImage: {
        width: '100%',
        height: 130,
        borderRadius: 14,
        marginBottom: 14,
    },
    productName: {
        color: '#201713',
        fontSize: 17,
        fontWeight: 'bold',
    },
    productDescription: {
        color: '#634638',
        fontSize: 12,
        lineHeight: 18,
        marginTop: 6,
    },
    productPrice: {
        color: '#634638',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 12,
    },
    productButton: {
        width: '100%',
        backgroundColor: '#634638',
        paddingVertical: 12,
        borderRadius: 12,
        alignItems: 'center',
        marginTop: 14,
    },
    productButtonPressed: {
        opacity: 0.6,
    },
    productButtonText: {
        color: '#F2E4D0',
        fontSize: 13,
        fontWeight: 'bold',
    },
    });
