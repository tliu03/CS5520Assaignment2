import { Pressable, View, Text, StyleSheet } from "react-native";
import { Colors } from "../../constants/color";

function Button({ children, onPress, style }) {
  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [styles.button, pressed && styles.pressed]}
        android_ripple={{ color: Colors.primary400, radius: 5 }}
      >
        <View>
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
    opacity: 0.5,
    backgroundColor: Colors.primary400,
    borderRadius: 5,
  },
});
