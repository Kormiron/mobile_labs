import React from "react";
import { SafeAreaView, View, StyleSheet, ScrollView } from "react-native";

import { useRoute } from "@react-navigation/native";

import TextDesc from "./Text";
import { Thumbnail } from "native-base";

const Description = () => {
  const route = useRoute();

  return (
    <SafeAreaView>
      <ScrollView>
        <Thumbnail square source={route.params.poster} style={styles.img} />
        <View style={styles.textWrap}>
          <TextDesc outerText={route.params.title} innerText="Title: " />
          <TextDesc outerText={route.params.year} innerText="Year: " />
          <TextDesc outerText={route.params.genre} innerText="Genre: " />
        </View>
        <View style={styles.textWrap}>
          <TextDesc outerText={route.params.director} innerText="Director: " />
          <TextDesc outerText={route.params.actors} innerText="Actors: " />
        </View>
        <View style={styles.textWrap}>
          <TextDesc outerText={route.params.country} innerText="Country: " />
          <TextDesc outerText={route.params.lang} innerText="Language: " />
          <TextDesc outerText={route.params.prod} innerText="Production: " />
          <TextDesc outerText={route.params.released} innerText="Released: " />
          <TextDesc outerText={route.params.runtime} innerText="Runtime: " />
        </View>
        <View style={styles.textWrap}>
          <TextDesc outerText={route.params.awards} innerText="Awards: " />
          <TextDesc outerText={route.params.rating} innerText="Rating: " />
        </View>
        <View style={styles.textWrap}>
          <TextDesc outerText={route.params.plot} innerText="Plot: " />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Description;

const styles = StyleSheet.create({
  img: {
    width: 200,
    height: 350,
    alignContent: "center",
    paddingLeft: 10,
    marginTop: 10,
    backgroundColor: "lightgrey",
    alignSelf: "center",
  },
  textWrap: {
    width: "95%",
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  outerText: {
    fontSize: 15,
  },
  innerText: {
    color: "grey",
  },
});
