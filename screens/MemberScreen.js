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
import { FlatList } from "react-native-gesture-handler";
import members from "../members.json";

// @ts-ignore
export default function MemberScreen(props) {
  return (
    //le composant flatlist fait le meme job que scrollview plus map()
    <FlatList
      contentContainerStyle={styles.container}
      data={members}
      keyExtractor={(item, index) => item.id}
      renderItem={({ item }) => (
        <>
          <TouchableOpacity
            style={styles.membre}
            onPress={() => props.navigation.push("Profile", { id: item.id })}
          >
            <Image
              style={styles.image}
              source={{ width: 50, height: 50, uri: item.url }}
            />
            <Text style={styles.name}>{item.name}</Text>
          </TouchableOpacity>
        </>
      )}
    />
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
