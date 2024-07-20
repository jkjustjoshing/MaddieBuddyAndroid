import { StyleSheet, View } from "react-native";
import { WidgetInfo, WidgetPreview } from "react-native-android-widget";

import { PumpingWidget } from "./src/PumpingWidget/PumpingWidget";
import { useEffect, useState } from "react";
import { getWidgetData } from "./src/PumpingWidget/getWidgetData";
import { WidgetConfigurationScreen } from "./src/PumpingWidget/WidgetConfigurationScreen";

export default function HelloWidgetPreviewScreen() {
  const [widget, setWidget] = useState<React.ReactElement>(() => (
    <PumpingWidget
      data={null}
      dimensions={{ width: 320, height: 200, screenInfo: { density: 2 } }}
    />
  ));

  return (
    <View style={styles.container}>
      <WidgetConfigurationScreen
        renderWidget={setWidget}
        setResult={() => undefined}
        widgetInfo={
          {
            widgetId: 1000,
            width: 320,
            height: 200,
            screenInfo: { density: 2 },
          } as WidgetInfo
        }
      />
      <WidgetPreview renderWidget={() => widget} width={320} height={200} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
