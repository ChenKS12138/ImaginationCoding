import  AsyncStorage  from "@react-native-community/async-storage";

const setStorage = async (key,value) => {
  try {
    await AsyncStorage.setItem(key, value);
    return true;
  } catch (error) {
    // Error saving data
    return false;
  }
}

const getStorage = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    }
   } catch (error) {
     // Error retrieving data
   }
}

const clearStorage = async (key) => {
  try{
    await AsyncStorage.removeItem(key);
    return true;
  }
  catch(err) {
    return false;
  }
} 

const getKeys = async () => {
  try{
    const keys = await AsyncStorage.getAllKeys();
    return keys;
  }
  catch(err){
    return false;
  }
}

const getStorageMulti = async (keyArray) => {
  try{
    const data = await AsyncStorage.multiGet(keyArray);
    return data;
  }
  catch(err){
    return false;
  }
}

const setStorageMulti = async (keysAndValues) => {
  try{
    await AsyncStorage.multiSet(keysAndValues);
    return true;
  }
  catch(err){
    return false;
  }
}

export default Storager = {setStorage,getStorage,clearStorage,getKeys,getStorageMulti,setStorageMulti}
