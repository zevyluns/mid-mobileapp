import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Menu = () => {
  return (
    <View style={styles.container}>
      {/*header*/}
      <Text style={styles.title}>Template3</Text>
    </View>
  );
};

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    gap: 12,
  },
  title: {
    alignSelf: "center",
    fontSize: 32,
    fontWeight: "700",
  },
});

export default Menu;
