import React, { useState } from "react";
import {
    FlatList,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import axios from "axios";
import { Character, RootObject } from "../types/response";
import Card from "../components/Card";

const Home = () => {
    const [characterList, setCharacterList] = useState<Character[]>([]);
    const [search, setSearch] = useState("");

    const urlBase = "https://rickandmortyapi.com/api/";

    const getCharacters = async () => {
        try {
            const response = await axios.get<RootObject>(`${urlBase}character/?name=${search}`);
            const data = response.data.results;
            setCharacterList(data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Rick and Morty Characters</Text>
            <View style={styles.rowContainer}>
                <TextInput
                    onChangeText={setSearch}
                    style={styles.input}
                    placeholder="Search Character..."
                />
                <TouchableOpacity style={styles.button} onPress={getCharacters}>
                    <Text style={styles.buttonText}>Search</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={characterList}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <Card item={item} />
                )}
                contentContainerStyle={{ paddingBottom: 20 }}
            />
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
    },
    rowContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
    },
    title: {
        fontSize: 22,
        marginBottom: 10,
    },
    button: {
        width: 80,
        height: 40,
        backgroundColor: "#252525",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 10,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
    },
    input: {
        flex: 1,
        height: 40,
        borderWidth: 1,
        borderColor: "#ccc",
        paddingHorizontal: 10,
    },
});
