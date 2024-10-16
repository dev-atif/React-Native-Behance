import { View, Text, TouchableHighlight } from "react-native";
import React from "react";
import styles from "./Styles";

const QuestionnairButton = ({ label }) => {
  return (
    <View>
      <TouchableHighlight className="bg-[#F3F3F3] py-3 rounded-xl px-4" >
        <Text className="text-center" style={styles.Medium}>
          {label}
        </Text>
      </TouchableHighlight>
    </View>
  );
};

export default QuestionnairButton;
