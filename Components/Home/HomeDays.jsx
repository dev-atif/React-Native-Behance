import { View, Text, FlatList } from "react-native";
import React from "react";
import styles from "../Shared/Styles";
const Days = [
  {
    date: "9",
    day: "Sun",
  },
  {
    date: "10",
    day: "Today",
  },
  {
    date: "11",
    day: "Tue",
  },
  {
    date: "12",
    day: "Wed",
  },
  {
    date: "13",
    day: "Thu",
  },
  {
    date: "14",
    day: "Fri",
  },
  {
    date: "15",
    day: "Sat",
  },
];
const HomeDays = () => {
  return (
    <View>
      <View className="flex flex-row justify-between">
        {Days.map((itm, idx) => (
          <View
            key={idx}
            className={`${
              itm.date === "11" ? "bg-[#B1D4FF]" : "bg-[#E2F4FE]"
            } w-11 py-2 rounded-xl`}
          >
            <View className="flex flex-col items-center gap-2">
              <Text className="text-[12px]" style={styles.Regular}>
                {itm.day}
              </Text>
              <Text className="text-[12px] font-bold" style={styles.Bold}>
                {itm.date}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default HomeDays;
