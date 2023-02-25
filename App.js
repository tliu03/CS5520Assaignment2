import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AllEntries from "./screens/AllEntries";
import OverLimitEntries from "./screens/OverLimitEntries";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Colors } from "./constants/color";
import AddEntry from "./screens/AddEntry";

function EntryOverview() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({ navigation }) => ({
        headerTintColor: Colors.primary300,
        headerStyle: { backgroundColor: Colors.primary100 },
        tabBarStyle: { backgroundColor: Colors.primary100 },
        tabBarActiveTintColor: Colors.primary300,
        tabBarInactiveTintColor: Colors.secondary100,
        headerRight: ({ tintColor }) => (
          <SimpleLineIcons
            name="plus"
            size={22}
            color={tintColor}
            onPress={() => {
              navigation.navigate("AddEntry");
            }}
          />
        ),
      })}
    >
      <Tab.Screen
        name="All Entry"
        component={AllEntries}
        options={{
          tabBarLabel: "All Entries",
          tabBarIcon: ({ color, size }) => {
            return <SimpleLineIcons name="cup" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Over Limit Entry"
        component={OverLimitEntries}
        options={{
          tabBarLabel: "Over-Limit Entries",
          tabBarIcon: ({ color, size }) => {
            return (
              <SimpleLineIcons name="exclamation" size={size} color={color} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: Colors.primary100 },
          headerTintColor: Colors.primary300,
        }}
      >
        <Stack.Screen
          name="Entries"
          component={EntryOverview}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="AddEntry" component={AddEntry} />
        {/* <Stack.Screen name="" /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
