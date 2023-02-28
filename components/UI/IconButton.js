import { Pressable, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export default function IconButton({ icon, size, color, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
      android_ripple={{ color: "grey" }}
    >
      <Ionicons
        name={icon}
        size={size}
        color={color}
        style={styles.IconStyle}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  IconStyle: {
    paddingHorizontal: 10,
    marginVertical: 2,
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: "grey",
  },
});
