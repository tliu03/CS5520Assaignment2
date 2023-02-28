import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Card from "../UI/Card";
import { Colors } from "../../constants/color";
import IconButton from "../UI/IconButton";
import { updateFromDB } from "../../Firebase/firestoreHelper";
import { useNavigation } from "@react-navigation/native";

export default function EntryDetail({ entry }) {
  const navigation = useNavigation();
  function reviewButtonHandler() {
    // update data
    updateFromDB(entry.id, { reviewed: true });
    // console.log(entry.reviewed);
    navigation.navigate("All Entry");
  }
  return (
    <Card style={styles.CardContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Calories: {entry.calorie}</Text>
        <Text style={styles.text}>Description: {entry.description}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Card style={styles.buttonContainer}>
          <IconButton
            icon="trash"
            size={28}
            onPress={() => {
              console.log("delete");
            }}
          />
        </Card>
        {!entry.reviewed && entry.overLimit && (
          <Card style={styles.buttonContainer}>
            <IconButton
              icon="checkmark"
              size={28}
              onPress={reviewButtonHandler}
            />
          </Card>
        )}
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  CardContainer: {
    backgroundColor: Colors.primary400,
    marginHorizontal: 50,
    marginTop: 50,
  },
  textContainer: {
    marginTop: 20,
  },

  text: {
    color: Colors.primary201,
    fontSize: 18,
    marginVertical: 8,
  },
  buttonsContainer: {
    flexDirection: "row",
    marginVertical: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
  buttonContainer: {
    backgroundColor: Colors.primary100,
  },
});
