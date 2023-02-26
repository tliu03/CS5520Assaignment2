import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import EntryItem from "./EntryItem";

export default function EntriesList({ entries }) {
  if (!entries || entries.length === 0) {
    return (
      <View style={styles.listContainer}>
        <Text>There's no entry at the moment, please add one!</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.listContainer}>
        <FlatList
          data={entries}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <EntryItem entry={item} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listContainer: {
    marginTop: 40,
  },
});
