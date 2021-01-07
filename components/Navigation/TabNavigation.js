import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { MainStackNavigator, ImageStackNavigator } from "./StackNavigation";

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Movies List"
        component={MainStackNavigator}
        options={{
          tabBarLabel: "Movies List",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="movie-roll"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Images"
        component={ImageStackNavigator}
        options={{
          tabBarLabel: "Image list",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="image" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
