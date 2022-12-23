// 사람 상세 화면
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, View, Text } from "react-native";

type DetailParams = {
    route: {
      params: {
        name: string;
        age: string;
        gender: string;
      };
    };
  };

type Navigation = NativeStackHeaderProps & DetailParams;

export default function PersonDetailScreen({ route }: Navigation) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Name: {route.params.name}</Text>
      <Text style={styles.header}>Age: {route.params.age}</Text>
      <Text style={styles.header}>Gender: {route.params.gender}</Text>
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