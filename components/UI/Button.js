import { View, Text, Pressable } from "react-native";
import React from "react";

export default function Button({ onPress, children }) {
  return <Pressable onPress={onPress}>{children}</Pressable>;
}
