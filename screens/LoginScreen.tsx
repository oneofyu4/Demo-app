// 로그인 화면 (첫 화면)
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import * as React from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';


export default function LoginScreen ({ navigation } : NativeStackHeaderProps) {
  
    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Login Screen</Text>
    <Button
      title="Go to Home Screen"
      onPress={() => {
        navigation.navigate('HomeScreen');
      }}
    />
    <Button
      title="Show Person List"
      onPress={() => {
        navigation.navigate('PersonScreen');
      }}
    />
    <Button
      title="Add Person"
      onPress={() => {
        navigation.navigate('AddPersonScreen');
      }}
    />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
