import React, { useEffect, useState } from "react";
import type { WidgetConfigurationScreenProps } from "react-native-android-widget";
import { View, Text, Button, TextInput } from "react-native";
import { PumpingWidget } from "./PumpingWidget";
import { getWidgetData } from "./getWidgetData";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function WidgetConfigurationScreen({
  widgetInfo,
  setResult,
  renderWidget,
}: WidgetConfigurationScreenProps) {
  const [token, setToken] = useState("");
  const [url, setUrl] = useState("");
  useEffect(() => {
    const doAsync = async () => {
      const token = await AsyncStorage.getItem("configuration.token");
      setToken((t) => t || token);
      const url = await AsyncStorage.getItem("configuration.url");
      setUrl((u) => u || url);
    };
    doAsync();
  }, []);

  const done = async () => {
    if (!token || !url) {
      return;
    }
    await AsyncStorage.setItem("configuration.token", token);
    await AsyncStorage.setItem("configuration.url", url);

    const data = await getWidgetData(widgetInfo.widgetId);
    renderWidget(<PumpingWidget data={{ data }} />);
    setResult("ok");
  };

  return (
    <View>
      <TextInput placeholder="URL" onChangeText={setUrl} />
      <TextInput placeholder="Token" onChangeText={setToken} />
      <Button onPress={done} disabled={!token || !url} title="Done" />
    </View>
  );
}
