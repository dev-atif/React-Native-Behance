import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import React, { useState } from "react";
import Doc1 from "../assets/Doc1.jpg";
import Doc5 from "../assets/Doc5.jpg";
import Doc3 from "../assets/Doc3.jpg";
import Doc4 from "../assets/Doc4.jpg";
import styles from "../Components/Shared/Styles";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
const Data = [
  {
    id: "1",
    name: "Alexander Smit",
    type: "Mental psychologist",
    rating: "4.9",
    image: Doc1,
    date: "Tomorrow",
    price: "110",
  },
  {
    id: "2",
    name: "Michael Green",
    type: "Clinical psychologist",
    rating: "5",
    image: Doc5,
    date: "June 15",
    price: "95",
  },
  {
    id: "3",
    name: "Chris Mitchell",
    type: "Mental psychologist",
    rating: "4.9",
    image: Doc3,
    date: "June 17",
    price: "99",
  },
  {
    id: "4",
    name: "Melissa Brown",
    type: "Clinical psychologist",
    rating: "5",
    image: Doc4,
    date: "Tomorrow",
    price: "110",
  },
  {
    id: "6",
    name: "Alexander Smit",
    type: "Mental psychologist",
    rating: "4.9",
    image: Doc1,
    date: "June 17",
    price: "99",
  },
  {
    id: "7",
    name: "Melissa Brown Smit",
    type: "Clinical psychologist",
    rating: "5",
    image: Doc5,
    date: "June 15",
    price: "95",
  },
  {
    id: "8",
    name: "Alexander Smit",
    type: "Mental psychologist",
    rating: "4.9",
    image: Doc3,
    date: "Tomorrow",
    price: "110",
  },
  {
    id: "9",
    name: "Melissa Brown Smit",
    type: "Clinical psychologist",
    rating: "5",
    image: Doc4,
    date: "June 15",
    price: "95",
  },
];
const SearchTherapist = ({ route }) => {
  const [selectid, setSelectid] = useState("3");
  const navigation = useNavigation();
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle("dark-content");
      StatusBar.setBackgroundColor("#F0F0F0");
      StatusBar.setHidden(false);
      StatusBar.setTranslucent(true);

      return () => {
        // Optional: Reset the StatusBar when leaving the screen
        StatusBar.setBackgroundColor("#ffffff"); // Reset to default if needed
      };
    }, [route.name])
  );

  return (
    <View className="px-4 h-screen">
      <View className="flex flex-row items-center justify-between mt-4 mb-8">
        <Text className="text-2xl text-center flex-grow" style={styles.Medium}>
          Therapist
        </Text>
        <Text>
          <MaterialIcons name="menu-open" size={24} color="black" />
        </Text>
      </View>
      <View>
        <FlatList
          data={Data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                setSelectid(item.id);
                navigation.navigate("SingleDoc");
              }}
              className={`${
                item.id === selectid ? "bg-[#E2F4FE]" : "bg-white"
              } my-2 rounded-xl  flex flex-row p-3`}
            >
              <View>
                <Image source={item.image} className="w-24 h-24 rounded-xl" />
              </View>
              <View className="ml-2 flex-auto flex flex-col justify-between">
                <View>
                  <View className="flex flex-row justify-between items-center">
                    <Text className="text-base" style={styles.SemiBold}>
                      {item.name}
                    </Text>
                    <Text>
                      <AntDesign name="hearto" size={20} color="#59A3FF" />
                    </Text>
                  </View>
                  <Text style={styles.Regular} className="text-[9px] my-0.5">
                    {item.type}
                  </Text>
                  <View className="flex flex-row mt-0.5  items-center ">
                    <Text>
                      <AntDesign name="star" size={10} color="#59A3FF" />
                    </Text>
                    <Text
                      style={styles.SemiBold}
                      className="font-semibold ml-1 text-[10px]"
                    >
                      {item.rating}
                    </Text>
                  </View>
                </View>
                <View>
                  <View className="flex flex-row items-center justify-between">
                    <View className="flex flex-row items-center ">
                      <Text style={styles.SemiBold}>
                        <AntDesign name="calendar" size={12} color="black" />
                      </Text>
                      <Text style={styles.SemiBold} className="text-[10px]">
                        {" "}
                        {item.date}
                      </Text>
                    </View>

                    <Text style={styles.SemiBold} className="text-[12px]">
                      {" "}
                      {item.price}$
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default SearchTherapist;
