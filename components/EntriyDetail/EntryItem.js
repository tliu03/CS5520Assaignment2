import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../../constants/color";
import Card from "../UI/Card";

export default function EntryItem({ entry }) {
  const navigation = useNavigation();

  function EditEntryNav() {
    navigation.navigate("EditEntry", { entry: entry });
  }
  return (
    <Card style={styles.cardStyle}>
      <Pressable
        onPress={EditEntryNav}
        style={({ pressed }) => [
          styles.entryContainer,
          pressed && styles.pressed,
        ]}
      >
        <Text style={styles.text}>{entry.description}</Text>
        <View style={styles.calorieDisplayContainer}>
          {entry.overLimit && !entry.reviewed && (
            <Ionicons
              name="warning"
              size={18}
              color="yellow"
              style={styles.IconStyle}
            />
          )}
          <Card style={styles.number}>
            <Text style={styles.numberText}>{entry.calorie}</Text>
          </Card>
        </View>
      </Pressable>
    </Card>
  );
}

const styles = StyleSheet.create({
  entryContainer: {
    flexDirection: "row",
    width: "90%",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 4,
    backgroundColor: Colors.primary401,
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: Colors.primary401,
    borderRadius: 4,
  },
  IconStyle: {
    paddingHorizontal: 10,
    marginVertical: 2,
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
