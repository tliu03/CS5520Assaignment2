import { View, StyleSheet } from "react-native";
import EntriesList from "../components/EntriyDetail/EntriesList";
import { Colors } from "../constants/color";
import { SAMPLE_DATA } from "../constants/sampledata";

export default function AllEntries() {
  return (
    <View style={styles.container}>
      <EntriesList entries={SAMPLE_DATA} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary201,
  },
});
