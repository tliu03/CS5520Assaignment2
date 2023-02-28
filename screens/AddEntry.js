import { View, Text } from "react-native";
import React from "react";
import EntryForm from "../components/ManageEntry/EntryForm";
import { firestore } from "../Firebase/firebase-setup";
import { writeToDB } from "../Firebase/firestoreHelper";
import { useNavigation } from "@react-navigation/native";

export default function AddEntry() {
  const navigation = useNavigation();
  function SubmitEntry(entryData) {
    writeToDB(entryData);
    navigation.navigate("All Entry");
  }
  return <EntryForm onSubmit={SubmitEntry} />;
}
