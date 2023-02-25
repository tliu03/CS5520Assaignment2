import { View, Text } from "react-native";
import React from "react";
import EntryForm from "../components/ManageEntry/EntryForm";

export default function AddEntry() {
  function SubmitEntry() {
    console.log("submit");
  }
  return <EntryForm onSubmit={SubmitEntry} />;
}
