import { View, Text, TextInput, StyleSheet } from "react-native";
import { useState } from "react";
import Button from "../UI/Button";

export default function EntryForm() {
  return (
    <View>
      <View>
        <Text>Calories: </Text>
      </View>
      <View>
        <Text>EntryForm</Text>
      </View>
      <View>
        <Button>
          <Text>Reset</Text>
        </Button>
        <Button>
          <Text>Submit</Text>
        </Button>
      </View>
    </View>
  );
}
