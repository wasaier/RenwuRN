import React, { Component } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { BlurView } from "@react-native-community/blur";

import uri from '../img/bg.webp';

export default class BlurCard extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Image
          key={'blurryImage'}
          source={uri}
          style={styles.absolute}
        />
        <Text style={styles.absolute}>Hi, I am some blurred text</Text>
        <BlurView
          style={styles.absolute}
          blurType="light"
          blurAmount={100}
          reducedTransparencyFallbackColor="white"
        />
        <Text>I'm the non blurred text because I got rendered on top of the BlurView</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }
});