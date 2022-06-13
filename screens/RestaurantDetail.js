import { View, Text } from "react-native";
import React, { useState } from "react";
import About from "../components/restaurantDetail/About";
import { Divider } from "react-native-elements";
import MenuItem from "../components/restaurantDetail/MenuItem";
import ViewCart from "../components/restaurantDetail/ViewCart";

export default function RestaurantDetail({ route, navigation }) {
  return (
    <View style={{ backgroundColor: "black", flex: 1 }}>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItem restaurantName={route.params.name} />
      <ViewCart navigation={navigation} restaurantName={route.params.name} />
    </View>
  );
}
