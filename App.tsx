import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { Navigation } from './src/infrastructure/Navigation';

import 'react-native-gesture-handler';

export default function App() {
  return (
    <Navigation />
  );
}
