import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const baseContainer = {
  alignItems: "center",
  justifyContent: "center",
  borderBottomWidth: 1,
  borderColor: "skyblue",
  borderRightWidth: 1,
};

const baseText = {
  fontSize: 26,
};

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

const Button = ({ text, special, onPress }) => (
  <TouchableOpacity
    onPress={() => onPress(text)}
    style={special ? styles.specialContainer : styles.container}
  >
    <Text style={special ? styles.specialText : styles.text}>{text}</Text>
  </TouchableOpacity>
);

export default Button;

