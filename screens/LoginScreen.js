import React, { useEffect, useState } from "react";
import { StyleSheet, View, Platform, ScrollView } from "react-native";
import { Button, Input, Image } from "react-native-elements";
import { StatusBar } from "expo-status-bar";
import { KeyboardAvoidingView } from "react-native";
import { auth } from "../firebase";

// Navigation as a prop to swipe between screens
export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        navigation.replace("Home");
      }
    });

    return unsubscribe;
  }, []);

  const signIn = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error.message));
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <StatusBar style="light" />
        <Image
          source={{
            uri:
              "https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png",
          }}
          style={{
            width: 150,
            height: 150,
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: 20,
          }}
        />
        <View style={styles.inputContainer}>
          <Input
            placeholder="Email"
            autoFocus
            type="email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <Input
            placeholder="Password"
            secureTextEntry
            type="password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            onSubmitEditing={signIn}
          />
        </View>

        <Button
          containerStyle={styles.button}
          onPress={signIn}
          title="Login"
          disabled={!email || !password}
        />
        <Button
          containerStyle={styles.button}
          onPress={() => navigation.navigate("Register")}
          type="outline"
          title="Register"
        />
        {/* <View style={{ height: 100 }} />  */}
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

// By default, styles are flex in direction of columns in react-native
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white",
  },
  inputContainer: {
    width: 300,
  },
  button: {
    width: 300,
    marginTop: 10,
    outline: "none",
    border: "none",
  },
});
