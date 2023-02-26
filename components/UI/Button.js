import { Pressable, View, Text, StyleSheet } from "react-native";
import { Colors } from "../../constants/color";

function Button({ children, onPress, style }) {
  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View style={styles.button}>
          <Text style={styles.buttonText}>{children}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    padding: 8,
    backgroundColor: Colors.primary400,
    marginHorizontal: 10,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: Colors.secondary01,
    borderRadius: 4,
  },
});
