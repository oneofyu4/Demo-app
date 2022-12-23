import React, { useState } from "react";
import { StyleSheet, Button, TextInput, View } from "react-native";
import { useForm, Controller } from "react-hook-form";

export type PersonForm = {
    name: string;
    age: string;
    gender: string;
};

type PersonFormProps = {
    onSubmit: (form: PersonForm) => void;
};

export function AddPersonForm({ onSubmit }: PersonFormProps) {
    const { control, handleSubmit } = useForm();
    // Hook Form 을 사용하지 않을 때 쓰는 방법
    // const [form, setForm] = useState({
    //     name: "",
    //     age: "",
    //     gender: "",
    //   });
    //   const onChangeText = (prop: string) => (value: string) => {
    //     setForm({
    //       ...form,
    //       [prop]: value,
    //     });
    //   };

    return (
        <View>
            <Controller
                control={control}
                // rules : 폼이 반드시 입력되야 하는지
                rules={{ required: true }}
                name="name"
                defaultValue={""}
                render={({ field: { onChange, value } }) => (
                    <TextInput
                        onChangeText={onChange}
                        value={value}
                        style={styles.input}
                        placeholder="Enter your name"
                    />
                )}
            />
            <Controller
                control={control}
                // rules : 폼이 반드시 입력되야 하는지
                rules={{ required: true }}
                name="age"
                defaultValue={""}
                render={({ field: { onChange, value } }) => (
                    <TextInput
                        onChangeText={onChange}
                        value={value}
                        style={styles.input}
                        placeholder="Enter your age"
                    />
                )}
            />
            <Controller
                control={control}
                // rules : 폼이 반드시 입력되야 하는지
                rules={{ required: true }}
                name="gender"
                defaultValue={""}
                render={({ field: { onChange, value } }) => (
                    <TextInput
                        onChangeText={onChange}
                        value={value}
                        style={styles.input}
                        placeholder="Enter your Male/Female"
                    />
                )}
            />
            <Button
                onPress={handleSubmit((data) => onSubmit(data as PersonForm))}
                title="등록"
            ></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        backgroundColor: "rgba(50,50,50,1)",
    },
    input: {
        fontSize: 20,
        marginBottom: 20,
        fontWeight: "bold",
        color: "white",
        backgroundColor: "blue",
    },
});