import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
} from "react-native";
import Button from "./Button";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  pressNum,
  pressEnter,
  processCalculation,
  pressClear,
  pressSwap,
  processToggle,
} from "./modules";
import * as Animatable from "react-native-animatable";

const baseNumber = {
  // color: "azure",
  backgroundColor: "#424242",
  textAlign: "right",
  padding: 10,
  fontSize: 25,
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
    paddingTop: Platform.OS === "ios" ? 35 : 25,
  },
  bottom: {
    flex: 1,
  },
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

class App extends React.Component {
  render() {
    const {
      currentState: { stack, inputState },
      pressNum,
      pressEnter,
      processCalculation,
      pressClear,
      pressSwap,
      processToggle,
    } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <TouchableOpacity onPress={() => processToggle(2)}>
            <Animatable.Text
              ref={(ref) => (this.text3 = ref)}
              style={styles.append}
              numberOfLines={1}
            >
              {" "}
              {stack[2] || 0}{" "}
            </Animatable.Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => processToggle(1)}>
            <Animatable.Text
              ref={(ref) => (this.text2 = ref)}
              style={styles.append}
              numberOfLines={1}
            >
              {" "}
              {stack[1] || 0}{" "}
            </Animatable.Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => processToggle(0)}>
            <Animatable.Text
              ref={(ref) => (this.text1 = ref)}
              animation="slideInRight"
              iterationCount={1}
              direction="alternate"
              style={styles[inputState]}
              numberOfLines={1}
            >
              {stack[0] || 0}
            </Animatable.Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottom}>
          <View style={styles.row}>
            <Button
              text="clear"
              onPress={() => (
                pressClear(),
                this.text1.shake(500),
                this.text2.shake(500),
                this.text3.shake(500)
              )}
            />
            <Button text="pow" onPress={processCalculation} />
            <Button text="swap" onPress={pressSwap} />
            <Button
              text="/"
              onPress={(x) => (
                processCalculation(x),
                this.text1.flipInX(500),
                this.text2.slideInDown(500)
              )}
            />
          </View>
          <View style={styles.row}>
            <Button text="9" onPress={pressNum} />
            <Button text="8" onPress={pressNum} />
            <Button text="7" onPress={pressNum} />
            <Button
              text="X"
              onPress={(x) => (
                processCalculation(x),
                this.text1.flipInX(500),
                this.text2.slideInDown(500)
              )}
            />
          </View>
          <View style={styles.row}>
            <Button text="6" onPress={pressNum} />
            <Button text="5" onPress={pressNum} />
            <Button text="4" onPress={pressNum} />
            <Button
              text="-"
              onPress={(x) => (
                processCalculation(x),
                this.text1.flipInX(500),
                this.text2.slideInDown(500)
              )}
            />
          </View>
          <View style={styles.row}>
            <Button text="3" onPress={pressNum} />
            <Button text="2" onPress={pressNum} />
            <Button text="1" onPress={pressNum} />
            <Button
              text="+"
              onPress={(x) => (
                processCalculation(x),
                this.text1.flipInX(500),
                this.text2.slideInDown(500)
              )}
            />
          </View>
          <View style={styles.row}>
            <Button text="0" onPress={pressNum} />
            <Button text="." onPress={pressNum} />
            <Button
              text="enter"
              special
              onPress={() => (
                pressEnter(), this.text1.slideInUp(500), this.text2.flipInX(500)
              )}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default connect(
  (state) => ({ currentState: state }),
  (dispatch) =>
    bindActionCreators(
      {
        pressNum,
        pressEnter,
        processCalculation,
        pressClear,
        pressSwap,
        processToggle,
      },
      dispatch
    )
)(App);
