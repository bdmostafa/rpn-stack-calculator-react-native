import React from "react";
import { StyleSheet, View, Text } from "react-native";

const baseContainer = {
  alignItems: "center",
  justifyContent: "center",
  borderBottomWidth: 1,
  borderColor: "skyblue",
  borderRightWidth: 1,
};

const baseText = {
  fontSize: 36,
};

const Button = ({ text, special }) => (
  <View style={special ? styles.specialContainer : styles.container}>
    <Text style={special ? styles.specialText : styles.text}>{text}</Text>
  </View>
);

export default Button;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
    ...baseContainer,
  },
  specialContainer: {
    flex: 2,
    backgroundColor: "cornflowerblue",
    textTransform: "uppercase",
    ...baseContainer,
  },
  text: baseText,
  specialText: {
    ...baseText,
    color: "#fff",
  },
});
