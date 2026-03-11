import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const weeklyMenu = [
  {
    day: "SUNDAY",
    morning: "Template",
    afternoon: "Template",
    evening: "Template"
  },
  {
    day: "MONDAY",
    morning: "Template",
    afternoon: "Template",
    evening: "Template"
  },
  {
    day: "TUESDAY",
    morning: "Template",
    afternoon: "Template",
    evening: "Template"
  },
  {
    day: "WEDNESDAY",
    morning: "Template",
    afternoon: "Template",
    evening: "Template"
  },
  {
    day: "THURSDAY",
    morning: "Template",
    afternoon: "Template",
    evening: "Template"
  },
  {
    day: "FRIDAY",
    morning: "Template",
    afternoon: "Template",
    evening: "Template"
  },
  {
    day: "SATURDAY",
    morning: "Template",
    afternoon: "Template",
    evening: "Template"
  }
];

const Menu = () => {
  // get hari dari device
  const todayIndex = new Date().getDay(); // return dengan 0 = Sunday, 1 = Monday, ..., 6 = Saturday

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Weekly Menu</Text>
      <ScrollView>
      {weeklyMenu.map((menu, index) => {
        const isToday = index === todayIndex;

        return (
          <View
            key={menu.day}
            style={[
              styles.menuBox,
              index === todayIndex && styles.highlightBox
            ]}
          >
            <Text style={styles.dayTitle}>{menu.day} MENU</Text>
            <Text>Morning: {menu.morning}</Text>
            <Text>Afternoon: {menu.afternoon}</Text>
            <Text>Evening: {menu.evening}</Text>
          </View>
        );
      })}
      </ScrollView>
    </View>
  );
};

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    gap: 16,
  },

  title: {
    alignSelf: "center",
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 10,
  },

  menuBox: {
    borderWidth: 2,
    borderColor: "#333",
    borderRadius: 10,
    padding: 16,
    backgroundColor: "#f5f5f5",
  },

  highlightBox: {
    borderColor: "#007AFF",
    backgroundColor: "#dfefff",
  },

  dayTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 6,
  },
});

export default Menu;