import { View, Text, StyleSheet, Pressable } from "react-native";
import Button from "../UI/Button";
import IconButton from "../UI/IconButton";
import { useState } from "react";
import { Colors } from "../../constants/color";
import Card from "../UI/Card";

export default function EntryItem({ entry }) {
  return (
    <Pressable>
      <Card style={styles.entryContainer}>
        <Text style={styles.text}>{entry.description}</Text>
        <View style={styles.calorieDisplayContainer}>
          {entry.calorie > 500 && (
            <IconButton
              icon="warning"
              size={18}
              color="yellow"
              onPress={() => {
                console.log("pressedIcon");
              }}
            />
          )}
          <Card style={styles.number}>
            <Text style={styles.numberText}>{entry.calorie}</Text>
          </Card>
        </View>
      </Card>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  entryContainer: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colors.primary401,
  },
  calorieDisplayContainer: {
    flexDirection: "row",
  },
  text: {
    color: "white",
    fontSize: 18,
  },
  number: {
    backgroundColor: "white",
    width: 50,
  },
  numberText: {
    color: Colors.primary401,
  },
});
