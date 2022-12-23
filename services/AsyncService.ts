import AsyncStorage from "@react-native-async-storage/async-storage";

// 데이터 저장
export const storeData = async (key: string, value: any) => {
    try {
      const stringValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, stringValue);
    } catch (e: any) {
      console.error(e.message);
    }
  };

// 데이터 GET
export const getData = async (key: string) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        const data = JSON.parse(value);
        return data;
      }
    } catch (e: any) {
      console.log(e.message);
    }
  };

// 데이터 삭제
export const removeData = async (key: string) => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (e: any) {
      console.error(e.message);
    }
  };

// 데이터가 있는지 확인
export const containsKey = async (key: string) => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      return keys.includes(key);
    } catch (e: any) {
      console.error(e.message);
    }
  };