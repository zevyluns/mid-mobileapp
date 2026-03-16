import React, { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet, Alert } from "react-native";
import { useAuth } from "./src/context/AuthContext";
import { router } from "expo-router";

export default function LoginScreen() {
  const { signIn } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const onLogin = async () => {
    setErr(null);
    setLoading(true);

    const result = await signIn(email, password);

    setLoading(false);

    if (!result.ok) {
      if (result.error === "INVALID_CREDENTIALS") {
        setErr("Wrong email or password.");
      } else if (result.error === "NOT_ALLOWED_STATUS") {
        setErr("Your account is not allowed to log in.");
      } else {
        setErr("Login failed: " + result.error);
      }
      return;
    }

    // route ke home jika login berhasil
    router.replace("/UNKLAB_CAFETERIA_SYSTEM/home");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>UNKLAB CAFETERIA SYSTEM</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        autoCapitalize="none"
      />

      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />

      {err ? <Text style={styles.error}>{err}</Text> : null}

      <Button
        title={loading ? "Signing in..." : "Sign In"}
        onPress={onLogin}
        disabled={loading}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
    textAlign: "center",
    fontWeight: 700,
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 12,
    padding: 8,
  },
  error: {
    color: "red",
    marginBottom: 12,
  },
});