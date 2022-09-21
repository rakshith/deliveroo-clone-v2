import { View, Text, SafeAreaView, Image, TextInput } from "react-native";
import React, { useLayoutEffect } from "react";
import {
  ChevronDownIcon,
  UserIcon,
  AdjustmentsIcon,
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
    <SafeAreaView>
      <Text className="bg-white text-red-500">
        <View className="flex-row pb-3 items-center mx-4 space-x-2 px-2">
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
      </Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
