import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Button from "./Button";
// import Button from './Button';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.number}>0</Text>
        <Text style={styles.number}>0</Text>
        <Text style={styles.number}>0</Text>
      </View>
      <View style={styles.bottom}>
        <View style={styles.row}>
          <Button text="clear" />
          <Button text="pow" />
          <Button text="swap" />
          <Button text="/" />
        </View>
        <View style={styles.row}>
          <Button text="9" />
          <Button text="8" />
          <Button text="7" />
          <Button text="X" />
        </View>
        <View style={styles.row}>
          <Button text="6" />
          <Button text="5" />
          <Button text="4" />
          <Button text="-" />
        </View>
        <View style={styles.row}>
          <Button text="3" />
          <Button text="2" />
          <Button text="1" />
          <Button text="+" />
        </View>
        <View style={styles.row}>
          <Button text="0" />
          <Button text="." />
          <Button text="enter" special />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "skyblue",
  },
  top: {
    paddingTop: 25,
  },
  bottom: {
    flex: 1,
  },
  number: {
    color: "azure",
    backgroundColor: "#424242",
    textAlign: "right",
    padding: 10,
    fontSize: 30,
    fontWeight: "bold",
    borderBottomWidth: 1,
    borderColor: "#fff",
  },
  row: {
    flex: 1,
    flexDirection: "row",
  },
});
