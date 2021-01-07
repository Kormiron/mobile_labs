import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { MainStackNavigator } from "./StackNavigation";

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Movies"
        component={MainStackNavigator}
        options={{
          tabBarLabel: "Movies",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="movie-roll"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
