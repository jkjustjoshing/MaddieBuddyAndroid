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

  const data = await getWidgetData();
  console.log(props.widgetInfo);

  switch (props.widgetAction) {
    case "WIDGET_ADDED": {
      props.renderWidget(
        <Widget
          data={data}
          reason={props.widgetAction}
          dimensions={props.widgetInfo}
        />
      );
      break;
    }
    case "WIDGET_UPDATE":
      props.renderWidget(
        <Widget
          data={data}
          reason={props.widgetAction}
          dimensions={props.widgetInfo}
        />
      );
      break;

    case "WIDGET_RESIZED":
      props.renderWidget(
        <Widget
          data={data}
          reason={props.widgetAction}
          dimensions={props.widgetInfo}
        />
      );
      break;

    case "WIDGET_DELETED":
      // Not needed for now
      break;

    case "WIDGET_CLICK":
      props.renderWidget(
        <Widget
          data={data}
          reason={props.widgetAction}
          dimensions={props.widgetInfo}
        />
      );
      break;

    default:
      break;
  }
}
