/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

 import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
 import { CompositeScreenProps } from '@react-navigation/native';
 import { NativeStackScreenProps } from '@react-navigation/native-stack';
 
 declare global {
   namespace ReactNavigation {
     interface RootParamList extends RootStackParamList {}
   }
 }
 
 export type RootStackParamList = {
  LoginScreen: undefined;
  HomeScreen: undefined;
  PersonScreen: undefined;
  PersonDetailScreen: {
    name: string;
    age: number;
    gender: string;
  };
  AddPersonScreen: undefined;
 };
 
 export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
   RootStackParamList,
   Screen
 >;
 
// --- 하단 탭 네비게이션
//  export type RootTabParamList = {
//    Login: undefined;
//    Home: undefined;
//  };
 
//  export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
//    BottomTabScreenProps<RootTabParamList, Screen>,
//    NativeStackScreenProps<RootStackParamList>
//  >;