import { View, Text, Image, FlatList } from "react-native";
import React from "react";
import styles from "../Shared/Styles";
import Doc1 from "../../assets/Doc1.jpg";
import Doc5 from "../../assets/Doc5.jpg";
import Doc3 from "../../assets/Doc3.jpg";
import Doc4 from "../../assets/Doc4.jpg";
import AntDesign from "@expo/vector-icons/AntDesign";
const Data = [
  {
    id: "1",
    name: "Alexander Smit",
    type: "Mental psychologist",
    rating: "4.9",
    image: Doc1,
  },
  {
    id: "2",
    name: "Melissa Brown Smit",
    type: "Clinical psychologist",
    rating: "5",
    image: Doc5,
  },
  {
    id: "3",
    name: "Alexander Smit",
    type: "Mental psychologist",
    rating: "4.9",
    image: Doc3,
  },
  {
    id: "4",
    name: "Melissa Brown Smit",
    type: "Clinical psychologist",
    rating: "5",
    image: Doc4,
  },
];

const TherapistSuggestion = () => {
  return (
    <View>
      <View className="my-4">
        <Text style={styles.Medium} className="text-lg">
          Therapist for you
        </Text>
      </View>
      <View>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={Data}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <View
              style={{ marginRight: 5 }}
              className=" flex flex-row   bg-[#E2F4FE] p-3 rounded-lg"
            >
              <View>
                <Image source={item.image} className="w-12 h-12 rounded-lg" />
              </View>
              <View className="  flex-auto ml-2">
                <View>
                  <Text style={styles.Medium} className="text-[12px]">
                    {item.name}
                  </Text>
                  <Text style={styles.Regular} className="text-[9px]">
                    {item.type}
                  </Text>
                </View>

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
            </View>
          )}
        />
      </View>

      {/* <View className=" flex flex-row  gap-2 ">
        <View>
          <Image source={Doc1} className="w-20 h-20 rounded-lg" />
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
              <Text
                style={styles.SemiBold}
                className="font-semibold text-[12px]"
              >
                Today
              </Text>
            </View>
            <View className="flex flex-row items-center gap-2">
              <Text
                style={styles.SemiBold}
                className="font-semibold text-[12px]"
              >
                16:00 - 17:00
              </Text>
            </View>
          </View>
        </View>
      </View> */}
    </View>
  );
};

export default TherapistSuggestion;
