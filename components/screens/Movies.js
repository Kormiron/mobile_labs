import React from "react";
import { SafeAreaView, ScrollView, View, TouchableOpacity } from "react-native";
import { MoviesList } from "../data/MoviesList";

import { Container, Header, List, Text, Item, Input, Icon } from "native-base";

import { apiKeyMovie } from "./keys";

const nav = ({ navigation }) =>
  navigation.navigate("Description", {
    id: item.imdbID,
    poster: item.Poster,
    title: item.Title,
    year: item.Year,
    genre: item.Genre,
    director: item.Director,
    actors: item.Actors,
    country: item.Country,
    lang: item.Language,
    prod: item.Production,
    released: item.Released,
    runtime: item.Runtime,
    awards: item.Awards,
    rating: item.imdbRating,
    plot: item.Plot,
  });

const Movies = () => {
  const [search, setSearch] = useState({
    AllMovies: MoviesList,
    TitleSearch: MoviesList.Search,
    AddedMovies: route.params,
    MovieList: {},
  });

  const handleSearch = (text) => {
    setSearch({
      TitleSearch: search.MovieList.Search.filter((i) =>
        i.Title.toLowerCase().includes(text.toLowerCase())
      ),
    });
  };

  useEffect(async () => {
    const api = `http://www.omdbapi.com/?apikey=${apiKeyMovie}&s=${search.MovieList.Search}&page=1`;
    const res = await fetch(api);

    setSearch({
      MovieList: res,
    });
  });

  const moviesList = search.TitleSearch.map((data) => (
    <View key={data.imdbID}>
      <TouchableOpacity
        onPress={nav(navigation)}
        style={{ backgroundColor: "#fff" }}
      >
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
