import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Container, Item, Input, Text, Form, Button } from "native-base";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const AddMovie = ({ navigation }) => {
  const [title, setTitle] = useState({
    title: "",
  });
  const [year, setYear] = useState({
    year: "",
  });
  const [type, setType] = useState({
    type: "",
  });

  return (
    <Container>
      <KeyboardAwareScrollView>
        <Form>
          <Item>
            <Input
              placeholderTextColor="lightgrey"
              placeholder="Title"
              style={styles.input}
              value={title.title}
              onChangeText={(text) => setTitle({ title: text })}
            />
          </Item>
          <Item>
            <Input
              keyboardType="numeric"
              placeholderTextColor="lightgrey"
              placeholder="Year"
              style={styles.input}
              value={year.year}
              onChangeText={(text) => setYear({ year: text })}
            />
          </Item>
          <Item>
            <Input
              placeholderTextColor="lightgrey"
              placeholder="Type"
              style={styles.input}
              value={type.type}
              onChangeText={(text) => setType({ type: text })}
            />
          </Item>
          <Button
            block
            info
            style={styles.button}
            onPress={() => {
              navigation.navigate("Movies");
            }}
          >
            <Text>Add</Text>
          </Button>
        </Form>
      </KeyboardAwareScrollView>
    </Container>
  );
};

export default AddMovie;

const styles = StyleSheet.create({
  input: {
    paddingTop: 10,
    width: "90%",
    alignSelf: "center",
    marginBottom: 10,
    height: 40,
    fontSize: 16,
  },
  button: {
    marginTop: 20,
    width: "90%",
    alignSelf: "center",
  },
});
