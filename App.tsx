import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import PersonScreen from './screens/PersonScreen';
import PersonDetailScreen from './screens/PersonDetailScreen';
import useCachedResources from './resources/useCachedResources';
import AddPersonScreen from './screens/AddPersonScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const isLoaded = useCachedResources();
  // 데이터가  있으면 화면 구성
  if (isLoaded) {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='LoginScreen'>
          <Stack.Screen 
            name="LoginScreen" 
            component={LoginScreen}
            options={{ title: '로그인' }}
          ></Stack.Screen>
          <Stack.Screen 
            name="HomeScreen" 
            component={HomeScreen}
            options={{ title: '홈' }}
          ></Stack.Screen>
          <Stack.Screen 
            name="PersonScreen" 
            component={PersonScreen}
            options={{ title: '사람 목록' }}
          ></Stack.Screen>
          <Stack.Screen 
            name="PersonDetailScreen" 
            component={PersonDetailScreen}
            options={{ title: '사람' }}
          ></Stack.Screen>
          <Stack.Screen 
            name="AddPersonScreen" 
            component={AddPersonScreen}
            options={{ title: '사람 추가' }}
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return null;
  }
}
