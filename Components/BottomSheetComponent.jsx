import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./Shared/Styles";

const BottomSheetComponent = ({ close }) => {
  return (
    <View className="bg-white px-4 pb-4 pt-10 rounded-t-xl">
      <View className=" px-4 pt-4 pb-16 rounded-xl bg-[#E2F4FE]">
        <View>
          <Text className="text-lg text-center" style={styles.SemiBold}>
            Payment successful
          </Text>
        </View>
        <View className="mt-4">
          <View className="flex flex-row items-center justify-between">
            <Text style={styles.Medium}>Date and time</Text>
            <Text style={styles.Medium}>June 17,14:00 PM</Text>
          </View>
          <View className="flex flex-row items-center my-2 justify-between">
            <Text style={styles.Medium}>Therapist</Text>
            <Text style={styles.Medium}>Chris Mitchell</Text>
          </View>
          <View className="flex flex-row items-center justify-between">
            <Text style={styles.Medium}>Session duratio</Text>
            <Text style={styles.Medium}>50 minutes</Text>
          </View>
        </View>
        <View className="border-b-2 border-[#59A3FF] my-8 border-dashed"></View>
        <View>
          <View>
            <Text className="text-[15px] text-center" style={styles.Medium}>
              Payment amount
            </Text>
            <Text className="text-4xl mt-2 text-center" style={styles.SemiBold}>
              95 $
            </Text>
          </View>
        </View>
      </View>
      <View className="mt-4">
        <TouchableOpacity
          onPress={() => close(false)}
          className="bg-[#59A3FF] py-3 rounded-xl"
        >
          <Text className="text-white text-center" style={styles.Medium}>
            Done
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BottomSheetComponent;
