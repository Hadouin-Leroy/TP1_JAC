import * as React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Button,
  TouchableOpacity,
  Image,
  Text,
} from "react-native";
import members from "../members.json";

// @ts-ignore
export default function MemberScreen(props) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {members.map((m) => (
        <>
          <TouchableOpacity
            style={styles.membre}
            onPress={() => props.navigation.push("Profile", { id: m["id"] })}
          >
            <Image
              style={styles.image}
              source={{ width: 100, height: 100, uri: m["url"] }}
            />
            <Text style={styles.name}>{m.name}</Text>
          </TouchableOpacity>
        </>
      ))}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
  },
  membre: {
    flexWrap: "wrap",
    alignItems: "center",
    flexDirection: "column",
    alignContent: "center",
    padding: 5,
  },
  name: {
    flexWrap: "wrap",
    fontSize: 15,
  },
  image: {
    height: 180,
    aspectRatio: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
