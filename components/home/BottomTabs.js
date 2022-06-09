import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function BottomTabs() {
  return (
    <View
      style={{
        flexDirection: "row",
        marginHorizontal: 30,
        margin: 10,
        justifyContent: "space-between",
        // backgroundColor: "white",
      }}
    >
      <Icon color="white" icon="home" text="Home" />
      <Icon icon="search" text="Browse" />
      <Icon icon="shopping-bag" text="Grocery" />
      <Icon icon="receipt" text="Orders" />
      <Icon icon="user" text="Account" />
    </View>
  );
}

const Icon = (props) => (
  <TouchableOpacity>
    <View>
      <FontAwesome5
        name={props.icon}
        size={25}
        style={{ marginBottom: 3, alignSelf: "center", color: "white" }}
      />
      <Text style={{ color: "white" }}>{props.text}</Text>
    </View>
  </TouchableOpacity>
);
