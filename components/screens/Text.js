import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Text = ({ outerText, innerText }) => {
  return (
    <Text style={styles.outerText}>
      <Text style={styles.innerText}>{innerText}</Text>
      {outerText}
    </Text>
  );
};

export default Text;

const styles = StyleSheet.create({
  img: {
    width: 200,
    height: 350,
    alignContent: "center",
    paddingLeft: 10,
    backgroundColor: "lightgrey",
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
