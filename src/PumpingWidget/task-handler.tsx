import React from "react";
import type { WidgetTaskHandlerProps } from "react-native-android-widget";
import { PumpingWidget } from "./PumpingWidget";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getWidgetData } from "./getWidgetData";

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

  // switch (props.widgetAction) {
  //   case "WIDGET_ADDED": {
  //     props.renderWidget(
  //       <Widget data={await getWidgetData(props.widgetInfo.widgetId)} />
  //     );
  //     // await new Promise((r) => setTimeout(r, 5000));
  //     // const data = await fetchPath("/pumping/");

  //     // props.renderWidget(<Widget data={{ load: data }} />);
  //     break;
  //   }
  //   case "WIDGET_UPDATE":
  //     // Not needed for now
  //     break;

  //   case "WIDGET_RESIZED":
  //     // Not needed for now
  //     break;

  //   case "WIDGET_DELETED":
  //     // Not needed for now
  //     break;

  //   case "WIDGET_CLICK":
  //     // const data = await fetchPath("/pumping/");
  //     props.renderWidget(
  //       <Widget
  //         data={{
  //           click: "yes",
  //           data: { a: props.clickAction, d: props.clickActionData }, // await getWidgetData(props.widgetInfo.widgetId),
  //         }}
  //       />
  //     );
  //     break;

  //   default:
  //     break;
  // }
  const { widgetInfo: xx, ...p } = props;
  props.renderWidget(
    <Widget
      data={{
        break: "yes",
        p,
      }}
    />
  );
}
