// FontLoader.js
import React, { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import * as Font from "expo-font";

const loadFonts = async () => {
  await Font.loadAsync({
    "D-Regular": require("./assets/fonts/DMSans-Regular.ttf"),
    "DM-M": require("./assets/fonts/DMSans-Medium.ttf"),
    "DM-Bold": require("./assets/fonts/DMSans-Bold.ttf"), // Adjust the path as necessary
    "DM-Semi-Bold": require("./assets/fonts/DMSans-SemiBold.ttf"), // Adjust the path as necessary
  });
};

const FontLoader = ({ children }) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFontsAsync = async () => {
      await loadFonts();
      setFontsLoaded(true);
    };

    loadFontsAsync();
  }, []);

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return children;
};

export default FontLoader;
