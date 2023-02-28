import { View, StyleSheet } from "react-native";
import { Colors } from "../constants/color";
import EntriesList from "../components/EntriyDetail/EntriesList";

import { firestore } from "../Firebase/firebase-setup";
import { onSnapshot, collection } from "firebase/firestore";
import { useState, useEffect } from "react";

export default function OverLimitEntries() {
  const [entries, setEntries] = useState([]);
  //   You should pass a prop to communicate what
  // type of entries (all or over-limit ones) to query from firebase.

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
