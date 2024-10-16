import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import FontLoader from "../fontsloader";
import Styles from "../Components/Shared/Styles";
import InputCustom from "../Components/Shared/InputCustom";
import PasswordInput from "../Components/Shared/PasswordInput";
import styles from "../Components/Shared/Styles";
import LoginProvider from "../Components/Shared/LoginProvider";
import { useNavigation } from "@react-navigation/native";
const LoginPage = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View className="bg-white h-screen flex-1 p-6 justify-end">
        <View className="">
          <View className="mb-10">
            <Text className="text-2xl" style={Styles.Medium}>
              Sign In
            </Text>
          </View>

          <View className="my-2">
            <InputCustom Label={"Email Address"} />
          </View>
          <View>
            <PasswordInput Label={"Enter Password"} />
          </View>
          <View className="flex flex-row justify-end mt-2">
            <Text className=" text-[#1A1A1A]">Forgot password ?</Text>
          </View>
          <View className="mt-8 mb-10">
            <Pressable className="bg-[#59A3FF] py-2 rounded-lg">
              <Text
                className="text-center text-lg text-white"
                style={styles.Medium}
              >
                Sign in
              </Text>
            </Pressable>
          </View>
          {/* Login Provider--------------- */}
          <View className="mb-10">
            <LoginProvider />
          </View>
          <View className="mt-10 flex flex-row items-center justify-center">
            <Text style={styles.Regular} className="text-center">
              Already have an account?{" "}
            </Text>
            <Pressable onPress={() => navigation.navigate("SignUpPage")}>
              <Text style={styles.Medium}>Sign up</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginPage;
