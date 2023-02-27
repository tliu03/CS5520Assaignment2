import { View, StyleSheet } from "react-native";
import EntryDetail from "../components/EntriyDetail/EntryDetail";
import { SAMPLE_DATA } from "../constants/sampledata";
import { Colors } from "../constants/color";
import { useEffect } from "react";

export default function EditEntry({ route, navigation }) {
  return (
    <View style={styles.container}>
      <EntryDetail entry={route.params.entry} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary201,
  },
});
