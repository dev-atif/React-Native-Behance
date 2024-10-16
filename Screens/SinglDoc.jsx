import {
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState} from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import doc from "../assets/Doc3.jpg";
import styles from "../Components/Shared/Styles";
import { useNavigation } from "@react-navigation/native";

const tabs = [{ label: "About" }, { label: "Education" }, { label: "Reviews" }];
const data = [
  { name: "Stress" },
  { name: "Apathy" },
  { name: "Anxiety" },
  { name: "Self-esteem" },
  { name: "Feeling of loneliness" },
  { name: "Phobias" },
  { name: "Addictions" },
  { name: "Mood Swings" },
  { name: "Emotional Dependence" },
];
const SinglDoc = () => {
  const [activeTab, setActiveTab] = useState(0);
  const navigation = useNavigation();
  const handleBackPress = () => {
    const routes = navigation.getState().routes; // Get the current routes
    const currentRouteIndex = navigation.getState().index; // Get the current index

    // Check if there is a previous route
    if (currentRouteIndex > 0) {
      const previousRoute = routes[currentRouteIndex - 1].name; // Get previous route name

      // Navigate to the previous screen
      navigation.navigate(previousRoute);
    }
    
  };
  return (
    <View className="p-4 bg-white h-screen">
      <View className="flex flex-row  items-center justify-between ">
        <Text onPress={handleBackPress}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </Text>
        <Text>
          <AntDesign name="heart" size={24} color="#59A3FF" />
        </Text>
      </View>
      <ScrollView>
        <View className="mt-8">
          <View className="flex flex-row justify-center">
            <Image source={doc} className="w-40 h-40 rounded-xl" />
          </View>
          <View className="flex flex-row items-center justify-between">
            <Text className="text-xl" style={styles.SemiBold}>
              Chris Mitchell
            </Text>
            <View className="flex flex-row items-center gap-1">
              <Text>
                <AntDesign name="star" size={24} color="#59A3FF" />
              </Text>
              <Text className="text-lg" style={styles.SemiBold}>
                5.0
              </Text>
            </View>
          </View>
          <View className="mt-1">
            <Text className="text-[15px]" style={styles.Medium}>
              Clinical psychologist
            </Text>
            <Text className="text-[10px]" style={styles.Regular}>
              5 years experience
            </Text>
          </View>
          <View>
            {/* -----Tabs------------ */}
            <View>
              <View className="flex flex-row my-4 bg-[#F0F0F0] rounded-md">
                {tabs.map((tab, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => setActiveTab(index)}
                    className={`p-3 flex-grow ${
                      index === activeTab ? "bg-[#E2F4FE] rounded-md" : ""
                    }`} // Apply active styles
                  >
                    <Text style={styles.Medium} className={`text-center`}>
                      {tab.label}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>

              <View>
                {activeTab === 0 && (
                  <View>
                    <View>
                      <Text className="text-base" style={styles.SemiBold}>
                        Main Methods:
                      </Text>
                      <Text className="my-2" style={styles.Regular}>
                        Cognitive behavioral therapy (CBT)
                      </Text>
                    </View>
                    <View>
                      <Text className="text-base" style={styles.SemiBold}>
                        About Therapist:
                      </Text>
                      <Text className="text-[13px]" style={styles.Regular}>
                        My mission is to help you achieve emotional balance,
                        unlock your potential and learn how to effectively slove
                        your life problems.
                      </Text>
                      <Text
                        className="text-[#1A1A1A] mt-1 text-[13px]"
                        style={styles.Regular}
                      >
                        Read more...
                      </Text>
                    </View>
                    <View className="flex flex-row items-center flex-wrap gap-2 my-4">
                      {data.map((itm, idx) => (
                        <TouchableOpacity
                          className="bg-[#E2F4FE] py-2 px-3 rounded-xl"
                          key={idx}
                        >
                          <Text className="text-[13px]" style={styles.Regular}>
                            {itm.name}
                          </Text>
                        </TouchableOpacity>
                      ))}
                    </View>
                  </View>
                )}
                {activeTab === 1 && (
                  <View>
                    <Text>Education</Text>
                  </View>
                )}
                {activeTab === 2 && (
                  <View>
                    <Text>Reviews</Text>
                  </View>
                )}
              </View>
            </View>
            {/* ---Button------- */}
            <View className="flex flex-row items-center justify-between">
              <View className=" flex flex-col items-center flex-grow ">
                <Text className="text-xl" style={styles.SemiBold}>
                  95$
                </Text>
                <Text className="text-[10px]" style={styles.Regular}>
                  50 min
                </Text>
              </View>
              <View>
                <TouchableOpacity
                  onPress={() => navigation.navigate("BookingSession")}
                  className="bg-[#59A3FF] py-3 rounded-xl px-8"
                >
                  <Text
                    className=" text-white text-center"
                    style={styles.Medium}
                  >
                    Book a Session
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      
    </View>
  );
};

export default SinglDoc;

// Sample About, Education, and Reviews components
