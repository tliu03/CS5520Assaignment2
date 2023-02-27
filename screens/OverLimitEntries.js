import { View, StyleSheet } from "react-native";
import { Colors } from "../constants/color";
import EntriesList from "../components/EntriyDetail/EntriesList";

export default function OverLimitEntries({ entries }) {
  const OverLimitEntry = entries.filter(
    (entry) => entry.calorie > 500 && !entry.reviewed
  );
  return (
    <View style={styles.container}>
      <EntriesList entries={OverLimitEntry} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary201,
  },
});
