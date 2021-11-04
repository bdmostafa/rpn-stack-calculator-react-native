import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "./Button";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { pressNum, pressEnter, processCalculation } from "./modules";

const App = ({
  currentState: { stack, inputState },
  pressNum,
  pressEnter,
  processCalculation,
}) => {
  // console.log('kkkkk', pressNum, '==========',processCalculation)
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.append}> {stack[2] || 0} </Text>
        <Text style={styles.append}> {stack[1] || 0} </Text>
        <Text style={styles[inputState]}>{stack[0] || 0}</Text>
      </View>
      <View style={styles.bottom}>
        <View style={styles.row}>
          <Button text="clear" onPress={processCalculation} />
          <Button text="pow" onPress={processCalculation} />
          <Button text="swap" onPress={processCalculation} />
          <Button text="/" onPress={processCalculation} />
        </View>
        <View style={styles.row}>
          <Button text="9" onPress={pressNum} />
          <Button text="8" onPress={pressNum} />
          <Button text="7" onPress={pressNum} />
          <Button text="X" onPress={processCalculation} />
        </View>
        <View style={styles.row}>
          <Button text="6" onPress={pressNum} />
          <Button text="5" onPress={pressNum} />
          <Button text="4" onPress={pressNum} />
          <Button text="-" onPress={processCalculation} />
        </View>
        <View style={styles.row}>
          <Button text="3" onPress={pressNum} />
          <Button text="2" onPress={pressNum} />
          <Button text="1" onPress={pressNum} />
          <Button text="+" onPress={processCalculation} />
        </View>
        <View style={styles.row}>
          <Button text="0" onPress={pressNum} />
          <Button text="." onPress={pressNum} />
          <Button text="enter" special onPress={pressEnter} />
        </View>
      </View>
    </View>
  );
};

export default connect(
  (state) => ({ currentState: state }),
  (dispatch) =>
    bindActionCreators({ pressNum, pressEnter, processCalculation }, dispatch)
)(App);

const baseNumber = {
  // color: "azure",
  backgroundColor: "#424242",
  textAlign: "right",
  padding: 10,
  fontSize: 30,
  fontWeight: "bold",
  borderBottomWidth: 1,
  borderColor: "#fff",
};

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
  // number: {
  //   color: "azure",
  //   backgroundColor: "#424242",
  //   textAlign: "right",
  //   padding: 10,
  //   fontSize: 30,
  //   fontWeight: "bold",
  //   borderBottomWidth: 1,
  //   borderColor: "#fff",
  // },
  row: {
    flex: 1,
    flexDirection: "row",
  },
  append: {
    color: "azure",
    ...baseNumber,
  },
  replace: {
    color: "#2E71E5",
    ...baseNumber,
  },
  push: {
    color: "greenyellow",
    ...baseNumber,
  },
});
