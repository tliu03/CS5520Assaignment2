import { View, Text, TextInput, StyleSheet, Alert } from "react-native";
import { useState } from "react";
import Button from "../UI/Button";
import { Colors } from "../../constants/color";
import Card from "../UI/Card";
import Input from "./Input";

export default function EntryForm({ onSubmit }) {
  const [entry, setEntry] = useState({
    calorie: 0,
    description: "",
  });

  function entryInputHandler(inputIdentifier, enteredValue) {
    setEntry((currValue) => {
      return {
        ...currValue,
        [inputIdentifier]: enteredValue,
      };
    });
  }

  function submitHandler() {
    const entryData = {
      calorie: +entry.calorie,
      description: entry.description,
    };

    const calorieIsValid = !isNaN(entryData.calorie) && entryData.calorie > 0;
    const descriptionIsValid = entryData.description.trim().length > 0;
    if (!calorieIsValid || !descriptionIsValid) {
      Alert.alert("Invalid Input, pleaese re-enter!");
    } else {
      onSubmit(entryData);
    }
  }

  function resetForm() {
    setEntry({
      calorie: 0,
      description: "",
    });
  }
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Input
          label="Calories"
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: entryInputHandler.bind(this, "calorie"),
            value: entry.calorie,
          }}
        />
        <Input
          label="Description"
          textInputConfig={{
            multiline: true,
            onChangeText: entryInputHandler.bind(this, "description"),
            value: entry.description,
          }}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <Button style={styles.button} onPress={resetForm}>
          Reset
        </Button>
        <Button style={styles.button} onPress={submitHandler}>
          Submit
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary201,
    alignItems: "center",
  },
  formContainer: {
    width: "100%",
    marginTop: 60,
    marginBottom: 20,
    paddingHorizontal: 30,
    // marginLeft: 20,
    // alignItems: "center",
    // justifyContent: "center",
  },

  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: "30%",
  },
});
