import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import { Colors } from "../../constants/color";

export default function Input({ label, style, textInputConfig, inValid }) {
  let inputStyle = [styles.inputTextBox];
  if (textInputConfig && textInputConfig.multiline) {
    inputStyle.push(styles.inputMultiline);
  }
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}: </Text>
      <TextInput style={inputStyle} {...textInputConfig} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    marginVertical: 10,
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  label: {
    size: 22,
    fontWeight: "bold",
    color: Colors.primary402,
  },
  inputTextBox: {
    backgroundColor: Colors.primary202,
    width: "70%",
    height: 30,
    borderRadius: 5,
    padding: 6,
    fontSize: 16,
    textAlignVertical: "top",
  },
  inputMultiline: {
    minHeight: 200,
  },
});
