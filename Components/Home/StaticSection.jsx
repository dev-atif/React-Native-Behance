import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import React from "react";
import styles from "../Shared/Styles";
import image from "../../assets/HomeStatic.png";
import { useNavigation } from "@react-navigation/native";
const StaticSection = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View className="relative flex flex-col justify-between bg-[#E2F4FE] h-52 p-4 rounded-xl">
        <View>
          <Text style={styles.Bold} className=" text-md">
            Find your therapist
          </Text>
          <Text style={styles.Bold} className="text-md">
            & schedule a session
          </Text>
        </View>
        <View>
          <TouchableHighlight
            onPress={() => navigation.navigate("Questionnair")}
            className="bg-[#59A3FF] w-1/3 py-2 rounded-xl "
          >
            <Text
              className="text-center text-white font-medium"
              style={styles.Medium}
            >
              Let's go!
            </Text>
          </TouchableHighlight>
        </View>
        <View className="absolute right-0 bottom-0">
          <Image source={image} />
        </View>
      </View>
    </View>
  );
};

export default StaticSection;
