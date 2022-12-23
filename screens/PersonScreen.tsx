// 사람 목록 화면
import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";
import { Person } from "../models/Person";
import PersonCell from "../components/PersonCell";
import data from "../data/personData.json";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { getPersons } from "../services/PersonService";

export default function PersonListScreen({
    navigation,
  }: NativeStackHeaderProps) {
    const [persons, setPersons] = useState<Person[]>([]);

  useEffect(() => {
    async function getData() {
      const _persons = await getPersons();
      setPersons(_persons);
    }
    getData();
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Person List</Text>
      <FlatList
          data={persons}
          renderItem={({ item }: { item: Person }) => {
            return (
              <Pressable
                onPress={() =>
                  navigation.navigate("PersonDetailScreen", {
                    name: item.name,
                    age: item.age,
                    gender: item.gender,
                  })
                }
              >
                <PersonCell item={item} />
              </Pressable>
            );
          }}
          keyExtractor={(item) => item.name}
        />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      padding: 20,
      flex: 1,
      backgroundColor: "rgba(50,50,50,1)",
    },
    header: {
      fontSize: 20,
      marginBottom: 20,
      fontWeight: "bold",
      color: "white",
    },
  });