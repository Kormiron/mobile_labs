import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  Image,
  ScrollView,
  StyleSheet,
} from "react-native";

import { apiKeyImg } from "./keys";

const request = "hot+summer";
const count = "24";

const api = `https://pixabay.com/api/?key=${apiKeyImg}&q=${request}&image_type=photo&per_page=${count}`;

export default class Pictures extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
    };
  }

  componentDidUpdate() {
    fetch(api)
      .then((res) => res.json)
      .then((resJSON) => {
        this.setState({
          photos: resJSON,
        });
      });
  }

  renderImage(item, i) {
    return (
      <View key={i}>
        <Image
          style={{ height: 100, width: 100, flex: 1, flexDirection: "row" }}
          source={{ uri: item.uri }}
        />
      </View>
    );
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={{ flex: 1 }}>
        <Button
          title="Open image browser"
          onPress={() => {
            navigate("ImageBrowser");
          }}
        />
        <ScrollView style={styles.imageLayout}>
          {this.state.photos.map((item, i) => this.renderImage(item, i))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageLayout: {},
});
