import { View, Text } from "react-native";
import React from "react";
import EntryForm from "../components/ManageEntry/EntryForm";
import { firestore } from "../Firebase/firebase-setup";
import { writeToDB } from "../Firebase/firestoreHelper";

export default function AddEntry() {
  function SubmitEntry(entryData) {
    writeToDB(entryData);
  }
  return <EntryForm onSubmit={SubmitEntry} />;
}
