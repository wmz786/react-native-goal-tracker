import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [goalInput, setGoalInput] = useState("");
  const [goals, setGoals] = useState([]);
  const removeGoal = (index) => {
    console.log(index);
  };
  return (
    <View style={styles.container}>
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
        />
        <Button
          title="Add Goal"
          onPress={() =>
            setGoals((currentGoals) => [
              ...currentGoals,
              { text: goalInput, id: Math.random().toString() },
            ])
          }
        />
      </View>
      <FlatList
        data={goals}
        renderItem={(itemData) => {
          return (
            <View
              key={itemData.index}
              style={{
                marginVertical: 8,
                padding: 8,
                borderRadius: 6,
                backgroundColor: "#5e0acc",
              }}
              onPress={removeGoal}
            >
              <Text style={{ color: "white" }}>{itemData.item.text}</Text>
            </View>
          );
        }}
        keyExtractor={(item, index) => {
          return item.id;
        }}
        style={{ marginTop: 40 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
  goalContainer: {
    flexDirection: "row",
  },
});
