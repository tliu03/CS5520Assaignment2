import { View, Text, Pressable } from "react-native";
import React from "react";

export default function EntryButton({ onPress, children }) {
  return <Pressable onPress={onPress}>{children}</Pressable>;
}
