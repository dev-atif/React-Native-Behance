import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import styles from "../Components/Shared/Styles";
import { useNavigation } from "@react-navigation/native";
const ListData = [
  {
    title: "My well-being",
    data: [
      { name: "Stress" },
      { name: "Apathy" },
      { name: "Anxiety" },
      { name: "Self-esteem" },
      { name: "Feeling of loneliness" },
      { name: "Phobias" },
      { name: "Addictions" },
      { name: "Mood Swings" },
      { name: "Emotional Dependence" },
    ],
  },
  {
    title: "Relationships",
    data: [
      { name: "With a partner" },
      { name: "With Parents" },
      { name: "With Kids" },
      { name: "With others" },
      { name: "Sexual" },
    ],
  },
  {
    title: "Work and studies",
    data: [
      { name: "Burnout" },
      { name: "Lack of motivation" },
      { name: "Procrastination" },
      { name: "Problem with self-ralization" },
      { name: "Job loss" },
    ],
  },
  {
    title: "Life events",
    data: [
      { name: "Pregnancy" },
      { name: "loss of a loved once" },
      { name: "Violence" },
      { name: "Breakup of a relationship" },
      { name: "Financial difficulties" },
    ],
  },
];
const Questionnaire = () => {
  const [select, setSelected] = useState([]);
  const navigation = useNavigation();
  const getData = (name) => {
    setSelected((prev) => {
      if (prev.includes(name)) {
        return prev.filter((item) => item !== name);
      } else {
        return [...prev, name];
      }
    });
  };

  return (
    <View className="bg-white">
      <View className="flex flex-row items-center justify-center ">
        <Text onPress={() => navigation.navigate("Home")}>
          <AntDesign name="arrowleft" size={30} color="black" />
        </Text>
        <Text className="text-xl flex-1 text-center" style={styles.SemiBold}>
          Questionnaire
        </Text>
      </View>
      <ScrollView>
        <View className="bg-white p-4">
          <View className="mt-8">
            <Text className="text-xl" style={styles.Medium}>
              Select topics for discussion
            </Text>
          </View>
          <View>
            {ListData.map((itm, idx) => (
              <View key={idx}>
                {/* Display section title */}
                <Text className="py-4 text-base" style={styles.SemiBold}>
                  {itm.title}
                </Text>

                {/* Map over the inner data array */}
                <View className="flex flex-row flex-wrap gap-2">
                  {itm.data.map((item, itemIndex) => (
                    <View key={itemIndex}>
                      <TouchableOpacity
                        onPress={() => getData(item.name)}
                        className={`${
                          select.includes(item.name)
                            ? "bg-[#E2F4FE]"
                            : "bg-[#F3F3F3]"
                        } py-3 rounded-xl px-4`}
                      >
                        <Text className="text-center" style={styles.Medium}>
                          {item.name}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  ))}
                </View>
              </View>
            ))}
          </View>
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate("Search")}
              className="bg-[#59A3FF] rounded-xl py-3 my-4"
            >
              <Text
                className="text-white text-center text-lg"
                style={styles.Medium}
              >
                Done
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Questionnaire;
