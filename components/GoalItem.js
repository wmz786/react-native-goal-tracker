import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const GoalItem = ({ text, id, onDeleteItem }) => {
  return (
    <Pressable onPress={onDeleteItem.bind(this, id)}>
      <View
        style={{
          marginVertical: 8,
          padding: 8,
          borderRadius: 6,
          backgroundColor: "#5e0acc",
        }}
      >
        <Text style={{ color: "white" }}>{text}</Text>
      </View>
    </Pressable>
  );
};

export default GoalItem;

const styles = StyleSheet.create({});
