import { View, Text, SafeAreaView, Button } from "react-native";
import React, { useState, useEffect } from "react";
import HeaderTabs from "../components/home/HeaderTabs";
import SearchBar from "../components/home/SearchBar";
import Categories from "../components/home/Categories";
import { ScrollView } from "react-native";
import RestaurantItem, {
  localRestaurants,
} from "../components/home/RestaurantItem";
import BottomTabs from "../components/home/BottomTabs";

const YELP_API_KEY =
  "fyVnsz-ocgPRgX80-3a8tqniE8i7KXE3-Osoz8j_TNPYQG5Ic0qDku56NrfdzjHjr6IR8_lUsTIs2URhZL9UMaIwh0r3EA45JSrEDzBWRXNZPtDk8f2uILDWpN2gYnYx";

export default function Home({ navigation }) {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [city, setCity] = useState("San Francisco");
  const [activeTab, setActiveTab] = useState("Delivery");

  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };
    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        setRestaurantData(
          json.businesses.filter((business) =>
            business.transactions.includes(activeTab.toLowerCase())
          )
        )
      );
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city, activeTab]);

  return (
    <SafeAreaView style={{ backgroundColor: "#000000", flex: 1 }}>
      <View style={{ backgroundColor: "black", padding: 10 }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar cityHandler={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItem
          onTouch={() => navigation.navigate("RestaurantDetail")}
          restaurantData={restaurantData}
          navigation={navigation}
        />
      </ScrollView>

      {/* <Divider width={1.8} style={{ marginVertical: 20 }} /> */}
      <BottomTabs />
    </SafeAreaView>
  );
}
