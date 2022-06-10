import { View, Text } from "react-native";
import React from "react";
import About from "../components/restaurantDetail/About";
import { Divider } from "react-native-elements";
import MenuItem from "../components/restaurantDetail/MenuItem";

export default function RestaurantDetail({ route }) {
  return (
    <View style={{ backgroundColor: "black" }}>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItem />
    </View>
  );
}
