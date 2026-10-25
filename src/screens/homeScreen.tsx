{/*Este archivo tendrá el encabezado, la bienvenida, la lista horizontal de cafés y la navegación inferior*/}

import { ScrollView, StyleSheet,Text,View,} from 'react-native';

import { productos } from '../data/mockData';
import ItemCard from '../components/itemCard';

export default function HomeScreen() {
    return (
        <View style={styles.screen}>
        <ScrollView
            style={styles.container}
            showsVerticalScrollIndicator={false}
        >
            {/* Encabezado */}
            <View style={styles.header}>
            <Text style={styles.brand}>BRUMA CAFÉ</Text>
            <Text style={styles.subtitle}>Un momento para ti.</Text>
            </View>

            {/* Bienvenida */}
            <View style={styles.welcomeCard}>
            <Text style={styles.cardLabel}>
                DESCUBRE TU PRÓXIMO FAVORITO
            </Text>

            <Text style={styles.cardTitle}>
                Tu café, tu momento.
            </Text>

            <Text style={styles.cardDescription}>
                Sabores para disfrutar sin afán.
            </Text>
            </View>

            {/* Productos */}
            <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>
                Nuestros favoritos
            </Text>

            <Text style={styles.seeAll}>Ver todos</Text>
            </View>

            <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.productsList}
            >
            {productos.map((producto) => (
                <ItemCard
                key={producto.id}
                producto={producto}
                />
            ))}
            </ScrollView>

            <View style={styles.bottomSpace} />
        </ScrollView>

        {/* Navegación inferior */}
        <View style={styles.bottomNav}>
            <View style={styles.navItem}>
            <Text style={styles.navIcon}>⌂</Text>
            <Text style={styles.navLabel}>Inicio</Text>
            </View>

            <View style={styles.navItem}>
            <Text style={styles.navIcon}>☕</Text>
            <Text style={styles.navLabel}>Menú</Text>
            </View>

            <View style={styles.navItem}>
            <Text style={styles.navIcon}>♡</Text>
            <Text style={styles.navLabel}>Favoritos</Text>
            </View>

            <View style={styles.navItem}>
            <Text style={styles.navIcon}>♙</Text>
            <Text style={styles.navLabel}>Perfil</Text>
            </View>
        </View>
        </View>
    );
    }

    const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#201713',
    },
    container: {
        flex: 1,
        backgroundColor: '#201713',
        paddingHorizontal: 24,
        paddingTop: 80,
    },
    header: {
        marginBottom: 32,
    },
    brand: {
        color: '#F2E4D0',
        fontSize: 30,
        fontWeight: 'bold',
        letterSpacing: 3,
    },
    subtitle: {
        color: '#C58B59',
        fontSize: 16,
        marginTop: 8,
    },
    welcomeCard: {
        backgroundColor: '#634638',
        padding: 24,
        borderRadius: 24,
        marginTop: 12,
    },
    cardLabel: {
        color: '#E4C9A8',
        fontSize: 10,
        fontWeight: 'bold',
        letterSpacing: 1.5,
        marginBottom: 14,
    },
    cardTitle: {
        color: '#FFFFFF',
        fontSize: 27,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    cardDescription: {
        color: '#F2E4D0',
        fontSize: 14,
        lineHeight: 21,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 32,
        marginBottom: 16,
    },
    sectionTitle: {
        color: '#F2E4D0',
        fontSize: 20,
        fontWeight: 'bold',
    },
    seeAll: {
        color: '#C58B59',
        fontSize: 13,
        fontWeight: '600',
    },
    productsList: {
        gap: 16,
        paddingRight: 24,
    },
    bottomNav: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#30221C',
        paddingVertical: 14,
        paddingBottom: 24,
        borderTopWidth: 1,
        borderTopColor: '#634638',
    },
    navItem: {
        alignItems: 'center',
        gap: 5,
    },
    navIcon: {
        color: '#C58B59',
        fontSize: 23,
    },
    navLabel: {
        color: '#F2E4D0',
        fontSize: 11,
    },
    bottomSpace: {
        height: 24,
    },
    });
