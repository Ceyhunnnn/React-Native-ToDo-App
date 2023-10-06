import { useState } from "react";
import {
  KeyboardAvoidingView,
  FlatList,
  StyleSheet,
  View,
  SafeAreaView,
} from "react-native";
import Header from "./src/components/header";
import Todo from "./src/components/todo";
import { Search } from "./src/components/search/search";

export default function App() {
  const [notes, setNotes] = useState([]);
  const Item = ({ text }) => (
    <Todo
      text={text.text}
      objectValue={text}
      setNotes={setNotes}
      notes={notes}
    />
  );
  console.log(notes);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.listArea}>
        <Header todoCount={notes.length} />
        <FlatList
          data={notes}
          renderItem={({ item }) => <Item text={item} />}
        />
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Search setNotes={setNotes} notes={notes} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#102028",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  listArea: {
    flex: 1,
    paddingVertical: 10,
  },
});
