import React, { useState, useEffect } from "react";
import { StyleSheet, Text, Image, View, ActivityIndicator } from "react-native";
import { useRoute } from "@react-navigation/native";
import axios from "axios";
import { Character } from "../types/response";

const Details = () => {
    const route = useRoute<any>();
    const [character, setCharacter] = useState<Character | undefined>(undefined);

    const characterId = route.params.id;

    useEffect(() => {
        const fetchCharacter = async () => {
            try {
                const response = await axios.get<Character>(`https://rickandmortyapi.com/api/character/${characterId}`);
                setCharacter(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchCharacter();
    }, [characterId]);

    if (!character) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: character.image }}
                style={styles.image}
            />
            <View style={styles.detailsContainer}>
                <Text style={styles.name}>{character.name}</Text>
                <Text>Status: {character.status}</Text>
                <Text>Species: {character.species}</Text>
                <Text>Type: {character.type}</Text>
                <Text>Gender: {character.gender}</Text>
                <Text>Origin: {character.origin.name}</Text>
                <Text>Location: {character.location.name}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginBottom: 20,
    },
    detailsContainer: {
        alignItems: "center",
        paddingHorizontal: 20,
    },
    name: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
    },
});

export default Details;
