import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./screens/LoginScreen";
import { createStackNavigator } from "@react-navigation/stack";
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";
import AddChatScreen from "./screens/AddChatScreen";
import ChatScreen from "./screens/ChatScreen";

const Stack = createStackNavigator();

// Global Styles
const globalScreenOptions = {
  headerStyle: { backgroundColor: "#2668ED" },
  headerTitleStyle: { color: "white" },
  headerTintColor: "white",
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={globalScreenOptions}
      >
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ gestureEnabled: true }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ gestureEnabled: true }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ gestureEnabled: true }}
        />
        <Stack.Screen
          name="AddChat"
          component={AddChatScreen}
          options={{ gestureEnabled: true }}
        />
        <Stack.Screen
          name="Chat"
          component={ChatScreen}
          options={{ gestureEnabled: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
