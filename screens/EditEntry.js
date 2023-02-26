import { View, StyleSheet } from "react-native";
import EntryDetail from "../components/EntriyDetail/EntryDetail";
import { SAMPLE_DATA } from "../constants/sampledata";
import { Colors } from "../constants/color";

export default function EditEntry() {
  return (
    <View style={styles.container}>
      <EntryDetail entry={SAMPLE_DATA[0]} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary201,
  },
});
