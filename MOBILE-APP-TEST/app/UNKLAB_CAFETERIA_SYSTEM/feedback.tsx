// app/(tabs)/feedback.tsx
import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet, Keyboard } from "react-native";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useAuth } from "../src/context/AuthContext";

export default function FeedbackScreen() {
  const { user } = useAuth();
  const [text, setText] = useState("");
  const [sending, setSending] = useState(false);

  // Use the generated mutation reference. Adjust if your generated API path differs.
  const createFeedback = useMutation(api.feedback.createFeedback.createFeedback);

  const send = async () => {
    if (!user) {
      Alert.alert("Tidak ada akun", "Mohon login untuk mengirim feedback.");
      return;
    }
    if (!text.trim()) {
      Alert.alert("Kosong", "Mohon tuliskan sesuatu sebelum mengirim.");
      return;
    }

    setSending(true);
    try {
      const res = await createFeedback({ userId: user.id, text });
      if (res?.ok) {
        setText("");
        Keyboard.dismiss();
        Alert.alert("Terima kasih!", "Feedback Anda telah dikirim.");
      } else {
        // handle unexpected server response
        Alert.alert("Gagal mengirim", "Server tidak mengonfirmasi. Coba lagi.");
      }
    } catch (err: any) {
      const msg = (err?.message ?? String(err)).toString();
      if (msg.includes("EMPTY_FEEDBACK")) {
        Alert.alert("Kosong", "Feedback Anda kosong.");
      } else {
        console.error("Feedback send error:", err);
        Alert.alert("Gagal mengirim", "Terjadi kesalahan saat mengirim feedback.");
      }
    } finally {
      setSending(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Send Feedback</Text>

      <Text style={styles.label}>Terlogin sebagai...:</Text>
      <Text style={styles.user}>{user?.email ?? "Unknown"}</Text>

      <TextInput
        style={styles.input}
        placeholder="Tuliskan kritik dan saran anda..."
        value={text}
        onChangeText={setText}
        multiline
        numberOfLines={5}
        editable={!sending}
      />

      <Button title={sending ? "Mengirim..." : "Kirim"} onPress={send} disabled={sending} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 12 },
  label: { fontSize: 14, color: "#666" },
  user: { fontSize: 16, marginBottom: 12 },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    textAlignVertical: "top",
    fontSize: 16,
    minHeight: 120,
    backgroundColor: "#fafafa",
  },
});