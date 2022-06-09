import { View, Text, Image } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";

const foods = [
  {
    title: "lasania",
    description: "with butter and I dont know what to write anymore",
    price: "$99.00",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.onzm5vFa_arxo0G-GEc8aQHaEL%26pid%3DApi&f=1",
  },
  {
    title: "lasania",
    description: "with butter and I dont know what to write anymore",
    price: "$99.00",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.onzm5vFa_arxo0G-GEc8aQHaEL%26pid%3DApi&f=1",
  },
  {
    title: "lasania",
    description: "with butter and I dont know what to write anymore",
    price: "$99.00",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.onzm5vFa_arxo0G-GEc8aQHaEL%26pid%3DApi&f=1",
  },
];

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },

  titleStyle: {
    fontSize: 19,
    fontWeight: "600",
  },
});
export default function MenuItem() {
  return (
    <>
      {foods.map((food, index) => (
        <View>
          <View style={styles.menuItemStyle}>
            <FoodInfo food={foods[0]} />
            <FoodImage food={foods[0]} />
          </View>
        </View>
      ))}
    </>
  );
}

const FoodInfo = (props) => (
  <View style={{ width: 240, justifyContent: "space-evenly" }}>
    <Text style={styles.titleStyle}>{props.food.title}</Text>
    <Text>{props.food.description}</Text>
    <Text>{props.food.price}</Text>
  </View>
);

const FoodImage = (props) => (
  <View>
    <Image
      source={{ uri: props.food.image }}
      style={{ width: 100, height: 100, borderRadius: 8 }}
    />
  </View>
);
