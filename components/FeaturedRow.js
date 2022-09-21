import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({ title, description, id }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>

        <ArrowRightIcon color="#00CCBB" />
      </View>

      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* Restaurants .. */}
        <RestaurantCard
          id={112}
          imgUrl="https://links.papareact.com/gn7"
          title="Yo Sushi"
          rating={4.5}
          genre="Japanese"
          address="123 main st"
          short_description=" this is test description"
          dishes={[]}
          long={20}
          lat={30}
        />
        <RestaurantCard
          id={112}
          imgUrl="https://links.papareact.com/gn7"
          title="Yo Sushi"
          rating={4.5}
          genre="Japanese"
          address="123 main st"
          short_description=" this is test description"
          dishes={[]}
          long={20}
          lat={30}
        />
        <RestaurantCard
          id={112}
          imgUrl="https://links.papareact.com/gn7"
          title="Yo Sushi"
          rating={4.5}
          genre="Japanese"
          address="123 main st"
          short_description=" this is test description"
          dishes={[]}
          long={20}
          lat={30}
        />
        <RestaurantCard
          id={112}
          imgUrl="https://links.papareact.com/gn7"
          title="Yo Sushi"
          rating={4.5}
          genre="Japanese"
          address="123 main st"
          short_description=" this is test description"
          dishes={[]}
          long={20}
          lat={30}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
