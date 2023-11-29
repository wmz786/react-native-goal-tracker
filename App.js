import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const addGoalHandler = (goalInput) => {
    setGoals((currentGoals) => [
      ...currentGoals,
      { text: goalInput, id: Math.random().toString() },
    ]);
    setModalVisible(false);
  };
  const deleteItem = (id) => {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  };
  return (
    <View style={styles.container}>
      <Button title="Add Goal" onPress={() => setModalVisible(true)} />
      <GoalInput
        addGoalHandler={addGoalHandler}
        onCancel={() => setModalVisible(false)}
        visible={modalVisible}
      />
      <FlatList
        data={goals}
        renderItem={(itemData) => {
          return (
            <GoalItem
              text={itemData.item.text}
              id={itemData.item.id}
              onDeleteItem={deleteItem}
            />
          );
        }}
        keyExtractor={(item) => {
          return item.id;
        }}
        style={{ marginTop: 40 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 50,
  },
});
