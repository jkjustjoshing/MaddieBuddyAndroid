import React from "react";
import type { WidgetTaskHandlerProps } from "react-native-android-widget";
import { PumpingWidget } from "./PumpingWidget";
import AsyncStorage from "@react-native-async-storage/async-storage";

const nameToWidget = {
  Pumping: PumpingWidget,
};

export async function widgetTaskHandler(props: WidgetTaskHandlerProps) {
  const widgetInfo = props.widgetInfo;
  const Widget =
    nameToWidget[widgetInfo.widgetName as keyof typeof nameToWidget];
  const token = await AsyncStorage.getItem("token");
  const url = await AsyncStorage.getItem("url");

  const fetchPath = async (path: string) => {
    const response = await fetch(url + path, {
      headers: {
        Authorization: "Token " + token?.trim(),
      },
    });
    if (!response.ok) {
      throw new Error(response.status + ": " + (await response.text()));
    }

    return response.json();
  };

  switch (props.widgetAction) {
    case "WIDGET_ADDED": {
      props.renderWidget(<Widget data={{ Loading: true }} />);
      await new Promise((r) => setTimeout(r, 5000));
      const data = await fetchPath("/pumping/");

      props.renderWidget(<Widget data={{ load: data }} />);
      break;
    }
    case "WIDGET_UPDATE":
      // Not needed for now
      break;

    case "WIDGET_RESIZED":
      // Not needed for now
      break;

    case "WIDGET_DELETED":
      // Not needed for now
      break;

    case "WIDGET_CLICK":
      const data = await fetchPath("/pumping/");
      props.renderWidget(<Widget data={{ click: data }} />);
      break;

    default:
      break;
  }
}
