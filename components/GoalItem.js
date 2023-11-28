import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const GoalItem = ({ text, id, onDeleteItem }) => {
  return (
    <View
      style={{
        marginVertical: 8,
        borderRadius: 6,
        backgroundColor: "#5e0acc",
      }}
    >
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={onDeleteItem.bind(this, id)}
        style={({ pressed }) => pressed && { opacity: 0.5 }}
      >
        <Text style={{ color: "white", padding: 9 }}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({});
