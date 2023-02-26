import { View, StyleSheet } from "react-native";
import { SAMPLE_DATA } from "../constants/sampledata";
import { Colors } from "../constants/color";
import EntriesList from "../components/EntriyDetail/EntriesList";

export default function OverLimitEntries() {
  const OverLimitEntry = SAMPLE_DATA.filter((entry) => entry.calorie > 500);
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
