import { View, Text, Pressable } from "react-native";
import React from "react";
import Card from "./Card";

export default function Button({ onPress, children, style }) {
  return (
    <Pressable onPress={onPress} style={style}>
      <Text>{children}</Text>
    </Pressable>
  );
}
