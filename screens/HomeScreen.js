import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import {
  ChevronDownIcon,
  UserIcon,
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5">
      <View className="text-red-500">
        <View className="flex-row pb-3 items-center mx-4 space-x-2 ">
          <Image
            source={{
              uri: "https://avatars.githubusercontent.com/u/926932?v=4",
            }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />

          <View className="flex-1">
            <Text className="font-bold text-gray-400 text-xs">
              Deliver Now!
            </Text>
            <Text className="font-bold text-xl">
              Current Location
              <ChevronDownIcon size={20} color="#00CCBB" />
            </Text>
          </View>

          <UserIcon size={35} color="#00CCBB" />
        </View>

        <View className="flex-row items-center space-x-2 pb-2 mx-4 ">
          <View className="flex-row flex-1 font-bold bg-gray-200 p-3">
            <MagnifyingGlassIcon size={20} color="gray" />
            <TextInput
              placeholder="Restaurants and cuisines"
              keyboardType="default"
            />
          </View>
          <AdjustmentsVerticalIcon size={20} color="#00CCBB" />
        </View>

        {/* body */}
        <ScrollView className="flex">
          {/* Categories */}
          {/* Featured rows */}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
