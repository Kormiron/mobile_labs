import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Movies from "../Screens/Movies";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Movies" component={Movies} />
    </Stack.Navigator>
  );
};

export { MainStackNavigator };
