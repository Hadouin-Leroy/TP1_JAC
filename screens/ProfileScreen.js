import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import members from "../members.json";

function ProfileScreen({ navigation, route }) {
  let membre = {};
  console.log(route);
  let id = route.params.id;
  members.map((m) => {
    if (id === m["id"]) {
      membre = m;
    }
  });
  console.log(membre);
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ height: 300, width: 300, uri: membre["url"] }}
      ></Image>
      <Text style={styles.name}>{membre["name"]}</Text>
      <Text style={styles.description}>{membre.description}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    marginVertical: 10,
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 10,
  },
  description: {
    marginVertical: 10,
    marginHorizontal: 20,
    fontSize: 15,
  },
});
export default ProfileScreen;
