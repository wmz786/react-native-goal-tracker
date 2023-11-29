import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";

const GoalInput = ({ visible, onCancel, addGoalHandler }) => {
  const [goalInput, setGoalInput] = useState("");

  return (
    <Modal visible={visible} animationType="slide" style={{}}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          padding: 16,
          backgroundColor: "#311b6b",
        }}
      >
        <Image
          source={require("../assets/images/goal.png")}
          style={{
            width: 100,
            height: 100,
            margin: 20,
          }}
        />
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: "#e4d0ff",
            backgroundColor: "#e4d0ff",
            color: "#120438",
            borderRadius: 6,
            width: "100%",
            padding: 16,
          }}
          placeholder="Your Course goals"
          onChangeText={(text) => setGoalInput(text)}
          value={goalInput}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
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
