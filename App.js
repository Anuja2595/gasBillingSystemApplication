import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomTabNavigator from './appLayout/Navigation/BottomTabNavigator';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomTabNavigator />
    </GestureHandlerRootView>
  );
}
