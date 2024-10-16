import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import Profile from "../Components/Home/Profile";
import HomeDays from "../Components/Home/HomeDays";
import StaticSection from "../Components/Home/StaticSection";
import UpcommingSession from "../Components/Home/UpcommingSession";
import TherapistSuggestion from "../Components/Home/TherapistSuggestion";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useFocusEffect } from "@react-navigation/native";
const HomeScreen = () => {
  return (
    <ScrollView>
      <StatusBar barStyle="dark-content" backgroundColor="#ffff" />
      <View className="p-4 bg-white">
        <View>
          <Profile />
        </View>
        <View className="my-4">
          <HomeDays />
        </View>
        <View>
          <StaticSection />
        </View>
        <View>
          <UpcommingSession />
        </View>
        <View>
          <TherapistSuggestion />
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
