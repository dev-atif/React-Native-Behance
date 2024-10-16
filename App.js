import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./Screens/HomeScreen";
import FontLoader from "./fontsloader";
import SignUpPage from "./Screens/SignUpPage";
import LoginPage from "./Screens/LoginPage";
import Octicons from "@expo/vector-icons/Octicons";
import Questionnaire from "./Screens/Questionnaire";
import SearchTherapist from "./Screens/SearchTherapist";
import AntDesign from "@expo/vector-icons/AntDesign";
import SinglDoc from "./Screens/SinglDoc";
import BookingSession from "./Screens/BookingSession";
import { GestureHandlerRootView } from "react-native-gesture-handler";
export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <SafeAreaProvider>
      <FontLoader>
        <SafeAreaView style={{ flex: 1 }}>
          <NavigationContainer>
            <Tab.Navigator
              initialRouteName="Home"
              screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: "#59A3FF",
                tabBarInactiveTintColor: "#F3F3F3",
                tabBarStyle: {
                  display:
                    route.name === "Login" ||
                    route.name === "SignUpPage" ||
                    route.name === "Questionnair" ||
                    route.name === "SingleDoc" ||
                    route.name === "BookingSession"
                      ? "none"
                      : "flex",
                },
              })}
            >
              <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                  tabBarIcon: ({ color, size }) => (
                    <Octicons name="home" size={size} color={color} />
                  ),
                }}
              />
              <Tab.Screen
                name="Search"
                component={SearchTherapist}
                options={{
                  tabBarIcon: ({ color, size }) => (
                    <AntDesign name="search1" size={size} color={color} />
                  ),
                }}
              />
              <Tab.Screen name="SignUpPage" component={SignUpPage} />
              <Tab.Screen name="Login" component={LoginPage} />
              <Tab.Screen
                name="Questionnair"
                component={Questionnaire}
                options={{
                  tabBarButton: () => null,
                }}
              />
              <Tab.Screen
                name="SingleDoc"
                component={SinglDoc}
                options={{
                  tabBarButton: () => null,
                }}
              />
              <Tab.Screen
                name="BookingSession"
                component={BookingSession}
                options={{
                  tabBarButton: () => null,
                }}
              />
            </Tab.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </FontLoader>
    </SafeAreaProvider>
  );
}
