import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";

const Item = props => {
  return (
    <View>
        <Image source={{ uri: props.itemUrl }} style={styles.workoutImage} />
        <Text style={styles.workoutTitle}>{props.itemTitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  workoutTitle: {
    textAlign: "center",
    fontSize: 18,
    backgroundColor: "#E8E8E8"
  },

  workoutImage: {
    width: "100%",
    height: 220
  }
});

export default Item;