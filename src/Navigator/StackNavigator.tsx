import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Screen1 } from '../Screen/Screen1';
import { Screen2 } from '../Screen/Screen2';
import { Screen3 } from '../Screen/Screen3';

// Define los tipos para RootStackParams
type RootStackParams = {
  Pantalla1: undefined;
  Pantalla2: undefined;
  Pantalla3: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Pantalla1" component={Screen1} />
      <Stack.Screen name="Pantalla2" component={Screen2} />
      <Stack.Screen name="Pantalla3" component={Screen3} />
    </Stack.Navigator>
  );
};