import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginHorizontal: 10,
    borderRadius: 10,
    backgroundColor: "#384750",
    display: "flex",
    flexDirection: "column",
  },
  input: {
    padding: 3,
    borderBottomWidth: 1,
    borderColor: "#51636d",
    color: "#fff",
  },
  saveButton: {
    backgroundColor: "#f6a603",
    marginVertical: 3,
    marginTop: 15,
    paddingVertical: 10,
    borderRadius: 10,
    justifyContent: "center",
  },
  saveButtonText: {
    alignSelf: "center",
    color: "#fff",
    fontSize: 18,
  },
});

export default styles;
