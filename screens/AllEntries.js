import { View, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import EntriesList from "../components/EntriyDetail/EntriesList";
import { Colors } from "../constants/color";

import { firestore } from "../Firebase/firebase-setup";
import { onSnapshot, collection } from "firebase/firestore";

export default function AllEntries() {
  const [entries, setEntries] = useState("");

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(firestore, "entries"),
      (querySnapshot) => {
        if (querySnapshot.empty) {
          setEntries([]);
        } else {
          let docs = [];
          querySnapshot.docs.forEach((snap) => {
            console.log(snap.id);
            return docs.push({ ...snap.data(), id: snap.id });
          });
          console.log(docs);
          setEntries(docs);
        }
      }
    );
    return () => {
      unsubscribe();
    };
  }, []);
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
