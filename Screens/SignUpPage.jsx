import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import FontLoader from "../fontsloader";
import Styles from "../Components/Shared/Styles";
import InputCustom from "../Components/Shared/InputCustom";
import PasswordInput from "../Components/Shared/PasswordInput";
import styles from "../Components/Shared/Styles";
import LoginProvider from "../Components/Shared/LoginProvider";
import { useNavigation } from "@react-navigation/native";

const SignUpPage = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View className="bg-white h-screen flex-1 p-6 justify-end">
        <View className="">
          <View className="mb-10">
            <Text className="text-2xl" style={Styles.Medium}>
              Creat account
            </Text>
          </View>
          <View>
            <InputCustom Label={"Your name"} />
          </View>
          <View className="my-2">
            <InputCustom Label={"Email Address"} />
          </View>
          <View>
            <PasswordInput Label={"Enter Password"} />
          </View>
          <View className="mt-8">
            <Pressable className="bg-[#59A3FF] py-2 rounded-lg">
              <Text
                className="text-center text-lg text-white"
                style={styles.Medium}
              >
                Sign up
              </Text>
            </Pressable>
          </View>
          {/* Login Provider--------------- */}
          <View className="mt-10">
            <LoginProvider />
          </View>
          <View className="mt-10 flex flex-row items-center justify-center">
            <Text style={styles.Regular} className="text-center">
              Already have an account?{" "}
            </Text>
            <Pressable onPress={() => navigation.navigate("Login")}>
              <Text style={styles.Medium}>Sign in</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUpPage;
