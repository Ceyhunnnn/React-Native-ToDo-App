import React from "react";
import { View, Text } from "react-native";
import styles from "./header-style";

export const Header = ({ todoCount }) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.textSetting}>Yapılacaklar</Text>
        <Text style={styles.textSetting}>{todoCount}</Text>
      </View>
    </View>
  );
};
