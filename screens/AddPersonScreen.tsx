import React from "react";
import { StyleSheet, View } from "react-native";
import { AddPersonForm, PersonForm } from "./forms/AddPersonForm";

export default function AddPersonScreen() {
    const handleSubmit = (form: PersonForm) => {
        alert(`Name: ${form.name} Age: ${form.age} Gender: ${form.gender}`);
    };

    return (
        <View style={styles.container}>
            <AddPersonForm onSubmit={handleSubmit}></AddPersonForm>
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