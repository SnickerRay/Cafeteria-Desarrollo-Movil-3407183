
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/homeScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import DetailScreen from '../screens/DetailScreen';
import { COLORS } from '../theme';
import type {HomeStackParamList, RootTabParamList,} from './types';


const Tab = createBottomTabNavigator<RootTabParamList>();
const Stack = createNativeStackNavigator<HomeStackParamList>();

    function HomeStackNavigator() {
    return (
        <Stack.Navigator
        screenOptions={{
            headerStyle: {
            backgroundColor: COLORS.background,
            },
            headerTintColor: COLORS.textOnDark,
            headerTitleStyle: {
            fontWeight: 'bold',
            },
            contentStyle: {
            backgroundColor: COLORS.background,
            },
        }}
        >
        <Stack.Screen
            name="HomeList"
            component={HomeScreen}
            options={{ title: 'Bruma Café' }}
        />

        <Stack.Screen
            name="HomeDetail"
            component={DetailScreen}
            options={({ route }) => ({
            title: route.params.name,
            })}
        />
        </Stack.Navigator>
    );
    }

    export default function RootNavigator() {
    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
            headerShown: false,
            tabBarStyle: {
            backgroundColor: COLORS.background,
            borderTopColor: COLORS.surfaceAlt,
            },
            tabBarActiveTintColor: '#61DAFB',
            tabBarInactiveTintColor: COLORS.placeholder,
            tabBarLabelStyle: {
            fontWeight: '600',
            },
            tabBarIcon: ({ color, size, focused }) => {
            const iconName: keyof typeof Ionicons.glyphMap =
                route.name === 'Home'
                ? focused
                    ? 'cafe'
                    : 'cafe-outline'
                : focused
                    ? 'heart'
                    : 'heart-outline';

            return (
                <Ionicons
                name={iconName}
                size={size}
                color={color}
                />
            );
            },
        })}
        >
        <Tab.Screen
            name="Home"
            component={HomeStackNavigator}
            options={{ title: 'Inicio' }}
        />

        <Tab.Screen
            name="Favorites"
            component={FavoritesScreen}
            options={{ title: 'Favoritos' }}
        />
        </Tab.Navigator>
    );
}

