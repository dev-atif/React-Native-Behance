import { View, Text, Image, TouchableHighlight } from "react-native";
import React from "react";
import styles from "../Shared/Styles";
import doc from "../../assets/user.jpg";
import Fontisto from "@expo/vector-icons/Fontisto";
import AntDesign from "@expo/vector-icons/AntDesign";
const UpcommingSession = () => {
  return (
    <View>
      <View className="my-4">
        <Text style={styles.Medium} className="text-lg font-medium">
          Upcoming session
        </Text>
      </View>
      <View className="p-4 rounded-xl bg-[#B1D4FF]">
        <View className=" flex flex-row  gap-2 ">
          <View>
            <Image source={doc} className="w-20 h-20 rounded-lg" />
          </View>
          <View className="  flex-auto">
            <View>
              <Text style={styles.Medium} className="text-lg">
                Alexandra Hall
              </Text>
              <Text style={styles.Regular} className="text-[11px]">
                Clinical psychologist
              </Text>
            </View>

            <View className="flex flex-row justify-between mt-3">
              <View className="flex flex-row items-center gap-2">
                <Text>
                  <Fontisto name="date" size={15} color="black" />
                </Text>
                <Text
                  style={styles.SemiBold}
                  className="font-semibold text-[12px]"
                >
                  Today
                </Text>
              </View>
              <View className="flex flex-row items-center gap-2">
                <Text>
                  <AntDesign name="clockcircleo" size={15} color="black" />
                </Text>
                <Text
                  style={styles.SemiBold}
                  className="font-semibold text-[12px]"
                >
                  16:00 - 17:00
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View className="flex flex-row justify-between mt-4">
          <TouchableHighlight className="bg-white  px-6 py-3 rounded-xl">
            <Text
              style={styles.Medium}
              className="text-black text-center font-medium"
            >
              Reschedule
            </Text>
          </TouchableHighlight>
          <TouchableHighlight className="bg-[#59A3FF] px-6 py-3 rounded-xl">
            <Text
              style={styles.Medium}
              className="text-white text-center font-medium"
            >
              Start session
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

export default UpcommingSession;
