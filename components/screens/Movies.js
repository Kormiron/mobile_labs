import React from "react";
import { SafeAreaView, ScrollView, View, TouchableOpacity } from "react-native";
import { MoviesList } from "../data/MoviesList";

import { Container, Header, List, Text, Item, Input, Icon } from "native-base";

const Movies = () => {
  const moviesList = MoviesList.Search.map((data) => (
    <View key={data.imdbID}>
      <TouchableOpacity style={{ backgroundColor: "#fff" }}>
        <Listdata thumbnail>
          <Left>
            <Thumbnail square source={data.Poster} style={{ height: 80 }} />
          </Left>
          <Body>
            <Text>{data.Title}</Text>
            <Text>{data.Year}</Text>
            <Text>{data.Type}</Text>
          </Body>
        </Listdata>
      </TouchableOpacity>
    </View>
  ));

  return (
    <SafeAreaView>
      <ScrollView>
        <Container style={{ height: "100%" }}>
          <Header searchBar rounded>
            <Item>
              <Icon name="ios-search" />
              <Input
                placeholder="Search"
                onChangeText={(text) => handleSearch(text)}
              />
            </Item>
          </Header>
          <List>{moviesList}</List>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Movies;
