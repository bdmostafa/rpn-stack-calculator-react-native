import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";

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

class Button extends React.Component {
  render() {
    const { text, special, onPress } = this.props;

    return (
      <TouchableOpacity
        onPress={() => (onPress(text), this.text.bounceIn(500))}
        style={special ? styles.specialContainer : styles.container}
      >
        <Animatable.Text
          ref={ref => this.text = ref}
          style={special ? styles.specialText : styles.text}
        >
          {text}
        </Animatable.Text>
      </TouchableOpacity>
    );
  }
}

export default Button;
