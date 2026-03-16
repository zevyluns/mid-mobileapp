import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export default function MenuScreen() {
  const menus = useQuery(api.menu.getAll.getAll) ?? [];

  // ambil data hari dari hp
  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Weekly Menu</Text>

      {menus.map((m: any) => {
        const isToday = m.day.toLowerCase() === today.toLowerCase();

        return (
          <View
            key={m.id} // highlight card jika isToday = true
            style={[styles.card, isToday && styles.todayCard]}
          >
            <Text style={[styles.day, isToday && styles.todayText]}>
              {m.day}
            </Text>

            <Text style={styles.menuText}>{m.text}</Text>

            {isToday && <Text style={styles.todayBadge}>TODAY</Text>}
          </View>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f6fa",
  },

  header: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 18,
    marginBottom: 14,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },

  todayCard: {
    borderWidth: 2,
    borderColor: "#4CAF50",
    backgroundColor: "#f0fff4",
  },

  day: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 6,
  },

  todayText: {
    color: "#2e7d32",
  },

  menuText: {
    fontSize: 18,
    lineHeight: 24,
  },

  todayBadge: {
    marginTop: 8,
    fontSize: 12,
    fontWeight: "bold",
    color: "#2e7d32",
  },
});