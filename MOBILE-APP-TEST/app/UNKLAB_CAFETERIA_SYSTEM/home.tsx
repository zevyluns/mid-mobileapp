import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useAuth } from "../src/context/AuthContext";
import { router } from "expo-router";

export default function HomeScreen() {
  const { user, signOut } = useAuth();

  const handleLogout = () => {
    signOut();              // fungsi sign out dari context
    router.replace("/login"); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Text style={styles.text}>
        Welcome, {user?.name ?? user?.email ?? "Guest"}!
      </Text>

      <Button title="Log out" onPress={handleLogout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1, justifyContent: "center" },
  title: { fontSize: 22, marginBottom: 12 },
  text: { fontSize: 18, marginBottom: 20 },
});