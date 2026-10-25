{/*Inicia la app*/}
import { StatusBar } from 'expo-status-bar';
import HomeScreen from './src/screens/homeScreen';

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <HomeScreen />
    </>
  );
}
