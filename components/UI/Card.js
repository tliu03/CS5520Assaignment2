import { View, Text, StyleSheet } from "react-native";

export default function Card({ children, style }) {
  return <View style={[styles.card, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    marginVertical: 2,
    marginHorizontal: 10,
    padding: 2,
    alignItems: "center",
    justifyContent: "center",
  },
});
