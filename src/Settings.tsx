import { TextInput, View, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

export const Settings = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    get();
  }, []);
  const get = async () => {
    const keys = await AsyncStorage.getAllKeys();
    const items = Object.fromEntries(
      await Promise.all(
        keys.map(async (k) => [k, await AsyncStorage.getItem(k)])
      )
    );
    setItems(items);
  };
  return (
    <View>
      <TextInput
        placeholder="URL"
        onChangeText={(e) => {
          AsyncStorage.setItem("url", e);
          get();
        }}
      />
      <TextInput
        placeholder="Token"
        onChangeText={(e) => {
          AsyncStorage.setItem("token", e);
          get();
        }}
      />
      <Text>{JSON.stringify(items)}</Text>
    </View>
  );
};
