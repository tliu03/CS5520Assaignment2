import { View, Text, StyleSheet } from "react-native";
import EntryButton from "../UI/EntryButton";
import IconButton from "../UI/IconButton";
import { useState } from "react";

export default function EntryItem({ entry }) {
  const [overLimit, setOverLimit] = useState("false");
  const [entry, setEntry] = useState({
    meal: "",
    calorie: 0,
  });
  return (
    <EntryButton>
      <Text>{entry.meal}</Text>
      {overLimit && (
        <IconButton icon="" size={12} color="yello" onPress={() => {}} />
      )}
      <View>
        <Text>{entry.calorie}</Text>
      </View>
    </EntryButton>
  );
}

const styles = StyleSheet.create({});
