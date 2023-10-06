import React, { useState } from "react";
import styles from "./search-style";
import {
  TouchableOpacity,
  Text,
  TextInput,
  View,
  Keyboard,
} from "react-native";
export const Search = ({ notes, setNotes }) => {
  const [value, setValue] = useState();
  return (
    <View style={styles.container}>
      <TextInput
        name="todo"
        style={styles.input}
        value={value}
        onChangeText={(val) => setValue(val)}
      />
      <TouchableOpacity
        style={styles.saveButton}
        disabled={!value}
        onPress={() => {
          if (value) {
            setNotes((prevlist) => [
              ...prevlist,
              { id: notes.length + 1, text: value, removed: false },
            ]);
            setValue(null);
            Keyboard.dismiss();
          }
        }}
      >
        <Text style={styles.saveButtonText}>Kaydet</Text>
      </TouchableOpacity>
    </View>
  );
};
