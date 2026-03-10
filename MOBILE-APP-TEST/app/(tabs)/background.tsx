import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Background = () => {
  return (
    <View style={styles.container}>
       {/*header*/}
      <Text style={styles.title}>Templatee</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    gap: 12,
  },
  title: {
    fontSize: 32,
    alignSelf: "center",
    fontWeight: "700",
  },
});

export default Background;
