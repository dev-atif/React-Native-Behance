import { View, Text, Image } from "react-native";
import React from "react";
import profile from "../../assets/Homeprofile.jpg";
import styles from "../Shared/Styles";
import Fontisto from "@expo/vector-icons/Fontisto";
const Profile = () => {
  return (
    <View className="flex flex-row items-center justify-between">
      <View className="flex flex-row items-center gap-3">
        <Image source={profile} className="h-12 w-12 rounded-full" />
        <Text style={styles.Bold} className="text-base font-bold">
          Good morning, Anna
        </Text>
      </View>
      <View>
        <Text className="relative">
          <Fontisto name="bell" size={24} color="black" />
        </Text>
        <View className="bg-[#59A3FF] h-2.5 w-2.5 rounded-full absolute top-0 right-0"></View>
      </View>
    </View>
  );
};

export default Profile;
