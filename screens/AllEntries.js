import { View, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import EntriesList from "../components/EntriyDetail/EntriesList";
import { Colors } from "../constants/color";


export default function AllEntries({entries}) {
 
  return (
    <View style={styles.container}>
      <EntriesList entries={entries} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary201,
  },
});
