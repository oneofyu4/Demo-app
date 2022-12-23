// 홈 화면 (로그인 후)
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';


export default function HomeScreen({ navigation } : NativeStackHeaderProps) {
  return (
    <View style={styles.container}>
      <Text>홈 화면</Text>
      <Button
        title="로그인 화면으로"
        onPress={() => navigation.navigate('LoginScreen')}
      />
      <StatusBar style="auto" />
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
