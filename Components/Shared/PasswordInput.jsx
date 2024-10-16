import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from "react-native";
import React, { useState } from "react";

import Feather from "@expo/vector-icons/Feather";
import styles from "./Styles";
const PasswordInput = ({ Label }) => {
  const [secured, setSecured] = useState(true);

  const toggleSecureEntry = () => {
    setSecured(!secured);
  };

  return (
    <View>
      <View className="my-1">
        <Text className="text-[#1A1A1A] text-[12px]" style={styles.Medium}>
          {Label}
        </Text>
      </View>
      <View className="bg-[#F3F3F3] py-1 rounded-lg flex items-center flex-row  ">
        <TextInput secureTextEntry={secured} className="flex-1 px-2 py-1 " />
        <Text onPress={toggleSecureEntry} className=" px-3">
          {!secured ? (
            <Feather name="eye" size={20} color="#1A1A1A" />
          ) : (
            <Feather name="eye-off" size={20} color="#1A1A1A" />
          )}
        </Text>
      </View>
    </View>
  );
};

export default PasswordInput;
