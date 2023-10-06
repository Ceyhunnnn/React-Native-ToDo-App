import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#7da453",
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 10,
    borderRadius: 5,
  },
  todoText: {
    fontSize: 16,
    color: "#fff",
  },
  todoTextRemoved: {
    fontSize: 16,
    color: "#696e71",
    textDecorationLine: "line-through",
  },
  todoTextRemove: {
    backgroundColor: "#384750",
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 10,
    borderRadius: 5,
  },
});
export default styles;
