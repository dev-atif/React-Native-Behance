import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import styles from "./Styles";

const InputCustom = ({ Label }) => {
  return (
    <View>
      <View className="my-1">
        <Text className="text-[#1A1A1A] text-[12px]" style={styles.Medium}>
          {Label}
        </Text>
      </View>
      <View className="bg-[#F3F3F3] py-1 rounded-lg">
        <TextInput className="w-full px-2 py-1" />
      </View>
    </View>
  );
};

export default InputCustom;
