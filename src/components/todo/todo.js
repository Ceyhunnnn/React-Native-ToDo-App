import React from "react";
import styles from "./todo-style";
import { Text, View, TouchableOpacity } from "react-native";
export const Todo = ({ text, objectValue, setNotes, notes }) => {
  const updateState = () => {
    const updatedTodos = notes.map((todo) => {
      if (todo.id === objectValue.id) {
        return { ...todo, removed: true };
      }
      return todo;
    });
    setNotes(updatedTodos);
  };
  return (
    <View
      style={objectValue.removed ? styles.todoTextRemove : styles.container}
    >
      <TouchableOpacity onLongPress={updateState}>
        <Text
          style={objectValue.removed ? styles.todoTextRemoved : styles.todoText}
        >
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
