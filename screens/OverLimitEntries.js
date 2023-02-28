import { View, StyleSheet } from "react-native";
import { Colors } from "../constants/color";
import EntriesList from "../components/EntriyDetail/EntriesList";

import { firestore } from "../Firebase/firebase-setup";
import { onSnapshot, collection, where, query } from "firebase/firestore";
import { useState, useEffect } from "react";

export default function OverLimitEntries() {
  const [entries, setEntries] = useState([]);
  //   You should pass a prop to communicate what
  // type of entries (all or over-limit ones) to query from firebase.

  // query with params

  useEffect(() => {
    const q = query(
      collection(firestore, "entries"),
      where("calorie", ">", 500, "&&", "reviewed", "==", false)
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      if (querySnapshot.empty) {
        setEntries([]);
      } else {
        let docs = [];
        querySnapshot.docs.forEach((snap) => {
          console.log("Snap: ", snap.id);
          return docs.push({ ...snap.data(), id: snap.id });
        });
        //   console.log(docs);
        setEntries(docs);
      }
    });
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
