import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import styles from "./Styles";
import Flogo from "../../assets/Flogo.png";
import Glogo from "../../assets/Glogo.png";
import Alogo from "../../assets/Alogo.png";
const LoginProvider = () => {
  return (
    <View>
      <View>
        <View className="h-[0.9] relative bg-[#D9D9D9]">
          <Text
            style={styles.Medium}
            className="absolute top-[-12px] left-[27%] text-[#cfcfcf] transform -translate-x-[27%] bg-white px-4"
          >
            or log in with
          </Text>
        </View>
        <View className="flex flex-row justify-center gap-7 mt-3">
          <View className="border border-[#cfcfcf] rounded-lg p-1">
            <Image source={Flogo} className="w-12 h-12" />
          </View>
          <View className="border border-[#cfcfcf] rounded-lg p-1">
            <Image source={Glogo} className="w-12 h-12" />
          </View>
          <View className="border border-[#cfcfcf] rounded-lg p-1">
            <Image source={Alogo} className="w-12 h-12" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default LoginProvider;
