import { Button, Modal, StyleSheet, TextInput, View } from "react-native";
import React, { useState } from "react";

const GoalInput = ({ visible, onCancel, addGoalHandler }) => {
  const [goalInput, setGoalInput] = useState("");

  return (
    <Modal visible={visible} animationType="slide" style={{}}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          flexDirection: "column",
          borderBottomWidth: 0.7,
          paddingVertical: 20,
          marginHorizontal: 20,
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
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <View style={{ marginRight: 10 }}>
            <Button
              title="Add Goal"
              onPress={() => {
                addGoalHandler(goalInput);
                setGoalInput("");
              }}
            />
          </View>
          <View>
            <Button title="Cancel" onPress={onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({});
