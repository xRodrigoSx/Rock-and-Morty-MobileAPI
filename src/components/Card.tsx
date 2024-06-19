import React, { FC } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Character } from "../types/response";

interface CardProps {
  item: Character;
}

const Card: FC<CardProps> = ({ item }) => {
  const navigation = useNavigation();

  const goToDetails = () => {
    navigation.navigate("Details", item);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={goToDetails}>
      <View>
        <Image
          source={{ uri: item.image }}
          style={styles.image}
        />
      </View>
      <View style={styles.infos}>
        <Text style={styles.title}>{item.name.toUpperCase()}</Text>
        <Text>Status: {item.status}</Text>
        <Text>Species: {item.species}</Text>
      <TouchableOpacity style={styles.button} onPress={goToDetails}>
        <Text style={styles.buttonText}>Detalhes</Text>
      </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#a1b2c3d4",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 20,
  },
  infos: {
    alignItems: "center",
  },
  title: {
    fontSize: 15,
    fontWeight: "bold"
  },
  button: {
    marginTop: 5,
    width: 100,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#252525",
    borderRadius: 5,
    marginHorizontal: 60
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});
