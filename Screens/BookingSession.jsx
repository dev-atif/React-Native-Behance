import {
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Image,
  Button,
} from "react-native";
import React, { useState, useRef } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import styles from "../Components/Shared/Styles";
import gpay from "../assets/gpay.png";
import visa from "../assets/visa.png";
import master from "../assets/mastercard.png";
import { RadioButton } from "react-native-paper";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import BottomSheetComponent from "../Components/BottomSheetComponent";
import { BottomSheet } from "@rneui/themed";

const BookingSession = () => {
  const getMonthDatesWithDays = () => {
    const today = new Date();
    const year = today.getFullYear(); // Current year
    const month = today.getMonth() + 1; // Current month

    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const result = [];

    for (let day = 1; day <= new Date(year, month, 0).getDate(); day++) {
      const date = new Date(year, month - 1, day);
      result.push({
        day: daysOfWeek[date.getDay()],
        date: day.toString(),
      });
    }

    return result;
  };
  const AvailableTime = [
    { time: "12:00" },
    { time: "13:00" },
    { time: "14:00" },
    { time: "15:00" },
    { time: "16:00" },
    { time: "17:00" },
    { time: "18:00" },
  ];
  const data = getMonthDatesWithDays();
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectTime, setSelecttime] = useState(null);
  const [payment, setPayment] = useState("Gpay");
  const [isVisible, setIsVisible] = useState(false);
  return (
    <View style={{ flex: 1 }}>
      <View className="flex flex-row bg-white p-4 ">
        <Text>
          <AntDesign name="arrowleft" size={30} color="black" />
        </Text>
        <Text className="text-center flex-1 text-xl" style={styles.SemiBold}>
          Booking a session
        </Text>
      </View>
      <ScrollView>
        <View>
          <View className="pt-8 bg-white p-4  rounded-b-xl">
            <View className="flex flex-row justify-center items-center ">
              <View className="w-[12%]">
                <Text>
                  <MaterialIcons name="error-outline" size={24} color="black" />
                </Text>
              </View>
              <View className="w-[88%] flex flex-row flex-wrap">
                <Text style={styles.Regular}>
                  You can cancel or reschedule session up to 12 hours in advance
                </Text>
              </View>
            </View>
            <View className="my-4">
              <Text className="" style={styles.Medium}>
                Select Date
              </Text>
              <View className="mt-2">
                <FlatList
                  data={data}
                  horizontal={true} // Enable horizontal scrolling
                  keyExtractor={(item, index) => index.toString()} // Unique key for each item
                  renderItem={({ item }) => (
                    <View className="">
                      <TouchableOpacity
                        onPress={() => setSelectedDate(item.date)}
                        className={`${
                          selectedDate === item.date
                            ? "bg-[#B1D4FF]"
                            : "bg-[#F3F3F3]"
                        } mr-1 w-12 py-3 flex flex-col justify-center rounded-xl items-center`}
                      >
                        <Text
                          className={`text-black text-[10px]`}
                          style={styles.Medium}
                        >
                          {item.day} {/* Display the day */}
                        </Text>
                        <Text
                          className="text-[14px] text-black"
                          style={styles.SemiBold}
                        >
                          {item.date} {/* Display the date */}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  )}
                />
              </View>
              <View></View>
            </View>
            <View>
              <Text className="mb-4" style={styles.Medium}>
                Select available time
              </Text>
              <View className="flex  flex-row flex-wrap  gap-2 ">
                {AvailableTime.map((itm, idx) => (
                  <TouchableOpacity
                    onPress={() => setSelecttime(itm.time)}
                    className={`${
                      selectTime === itm.time ? "bg-[#B1D4FF]" : "bg-[#F3F3F3]"
                    } py-2 rounded-xl px-8`}
                    key={idx}
                  >
                    <Text className="text-center" style={styles.Regular}>
                      {itm.time}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </View>
          <View className="bg-white px-4 py-8 mt-2 rounded-xl">
            <View>
              <Text className="mb-4" style={styles.Medium}>
                Payment Methods
              </Text>
              <View className="flex flex-row  justify-between">
                <View className="flex flex-row gap-3 items-center">
                  <View className="bg-[#F3F3F3]   px-1 rounded-xl">
                    <Image
                      source={gpay}
                      className="w-10 h-8  object-contain "
                      style={{ resizeMode: "contain" }}
                    />
                  </View>
                  <View>
                    <Text className="text-[15px]" style={styles.Medium}>
                      Google Pay
                    </Text>
                  </View>
                </View>
                <View>
                  <RadioButton
                    color="#59A3FF"
                    value="Gpay"
                    status={payment === "Gpay" ? "checked" : "unchecked"}
                    onPress={() => setPayment("Gpay")}
                  />
                </View>
              </View>
              <View className="flex flex-row  justify-between my-4">
                <View className="flex flex-row gap-3 items-center">
                  <View className="bg-[#F3F3F3]   px-1 rounded-xl">
                    <Image
                      source={visa}
                      className="w-10 h-8  object-contain "
                      style={{ resizeMode: "contain" }}
                    />
                  </View>
                  <View>
                    <Text className="text-[15px]" style={styles.Medium}>
                      Google Pay
                    </Text>
                  </View>
                </View>
                <View>
                  <RadioButton
                    color="#59A3FF"
                    value="visa"
                    status={payment === "visa" ? "checked" : "unchecked"}
                    onPress={() => setPayment("visa")}
                  />
                </View>
              </View>
              <View className="flex flex-row  justify-between">
                <View className="flex flex-row gap-3 items-center">
                  <View className="bg-[#F3F3F3]   px-1 rounded-xl">
                    <Image
                      source={master}
                      className="w-10 h-8  object-contain "
                      style={{ resizeMode: "contain" }}
                    />
                  </View>
                  <View>
                    <Text className="text-[15px]" style={styles.Medium}>
                      Google Pay
                    </Text>
                  </View>
                </View>
                <View>
                  <RadioButton
                    color="#59A3FF"
                    value="master"
                    status={payment === "master" ? "checked" : "unchecked"}
                    onPress={() => setPayment("master")}
                  />
                </View>
              </View>
            </View>
          </View>
          <View className="bg-white p-4 my-2  rounded-xl">
            <View className="flex flex-row items-center justify-between">
              <View className="flex flex-row items-center gap-2">
                <Text>
                  <MaterialCommunityIcons
                    name="ticket-percent-outline"
                    size={20}
                    color="black"
                  />
                </Text>
                <Text style={styles.Medium}>Promo code</Text>
              </View>
              <View>
                <Text>
                  <MaterialIcons
                    name="arrow-forward-ios"
                    size={20}
                    color="black"
                  />
                </Text>
              </View>
            </View>
          </View>
          <View className="py-4 bg-white rounded-t-xl px-4">
            <TouchableOpacity
              onPress={() => setIsVisible(true)}
              className="bg-[#59A3FF] py-3 rounded-xl"
            >
              <Text
                className="text-center text-xl text-white"
                style={styles.SemiBold}
              >
                Pay 95$
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <View>
        <BottomSheet
          containerStyle={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }} // Optional: dark background
          isVisible={isVisible}
        >
          <BottomSheetComponent close={setIsVisible} />
        </BottomSheet>
      </View>
    </View>
  );
};

export default BookingSession;
