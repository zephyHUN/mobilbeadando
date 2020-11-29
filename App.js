import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/HomeScreen";
import DieRollScreen from "./src/DieRollScreen";
import PathfinderScreen from "./src/PathfinderScreen";
import HelpScreen from "./src/HelpScreen";
import { StyleSheet } from 'react-native';

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
      <Stack.Navigator>
        <>
          <Stack.Screen name="Menu" component={HomeScreen}/>
          <Stack.Screen name="Die Roll" component={DieRollScreen} />
          <Stack.Screen name="Pathfinder" component={PathfinderScreen} />
          <Stack.Screen name="Help" component={HelpScreen} />
        </>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

