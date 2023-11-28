import { Button, StyleSheet, TextInput, View } from "react-native";
import React, { useState } from "react";

const GoalInput = ({ setGoals }) => {
  const [goalInput, setGoalInput] = useState("");
  const addGoalHandler = () => {
    setGoals((currentGoals) => [
      ...currentGoals,
      { text: goalInput, id: Math.random().toString() },
    ]);
    setGoalInput("");
  };
  return (
    <View
      style={{
        flexDirection: "column",
        borderBottomWidth: 0.7,
        paddingVertical: 20,
      }}
    >
      <TextInput
        style={{
          padding: 10,
          marginBottom: 20,
          borderWidth: 0.7,
          borderRadius: 7,
        }}
        placeholder="Your Course goals"
        onChangeText={(text) => setGoalInput(text)}
        value={goalInput}
      />
      <Button title="Add Goal" onPress={addGoalHandler} />
    </View>
  );
};

export default GoalInput;

const styles = StyleSheet.create({});
