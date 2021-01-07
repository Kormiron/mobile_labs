import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Movies from "../Screens/Movies";
import AddFilm from "../screens/AddFilm";
import MovieDescription from "../screens/MovieDescription";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Movies"
        component={Movies}
        options={{
          headerTitle: "Movie list",
          headerRight: () => (
            <TouchableOpacity
              style={{ marginRight: 15 }}
              onPress={() => navigation.navigate("Add Film")}
            >
              <MaterialCommunityIcons name="plus" size={35} />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen name="MovieDescription" component={MovieDescription} />
      <Stack.Screen name="Add Film" component={AddFilm} />
    </Stack.Navigator>
  );
};

export { MainStackNavigator };
