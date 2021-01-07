import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Movies from "../Screens/Movies";
import Description from "../screens/MovieDescription";
import AddFilm from "../screens/AddFilm";
import Pictures from "../screens/Pictures";
import AddPic from "../screens/AddPic";
import Drawing from "../screens/Drawing";

const Stack = createStackNavigator();

const MainStackNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Movies List"
        component={Movies}
        options={{
          headerTitle: "Movie list",
          headerRight: () => (
            <TouchableOpacity
              style={{ marginRight: 15 }}
              onPress={() => navigation.navigate("Add Movie")}
            >
              <MaterialCommunityIcons name="plus" size={35} />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen name="Description" component={Description} />
      <Stack.Screen name="Add Movie" component={AddFilm} />
    </Stack.Navigator>
  );
};

const ImageStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Images"
        component={Pictures}
        options={{
          headerTitle: "Image layout",
        }}
      />
      <Stack.Screen
        name="ImageBrowser"
        component={AddPic}
        options={{ title: "Selected 0 files" }}
      />
    </Stack.Navigator>
  );
};

const DrawingStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Drawing"
        component={Drawing}
        options={{
          headerTitle: "Drawing",
        }}
      />
    </Stack.Navigator>
  );
};

export { MainStackNavigator, ImageStackNavigator, DrawingStackNavigator };
