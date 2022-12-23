import { containsKey, getData, removeData, storeData } from "./AsyncService";
import data from "../data/personData.json";
import { Person } from "../models/Person";


export const initPersons = async (): Promise<boolean> => {
    const hasPersons = await containsKey("person-data");
  
    if (!hasPersons) {
      await storeData("person-data", data);
      return true;
    }
  
    return false;
  };

  export const getPersons = async (): Promise<Person[]> => {
    const persons = await getData("person-data");
    return persons;
  };

  export const removeAllPersons = async () => {
    await removeData("person-data");
  };