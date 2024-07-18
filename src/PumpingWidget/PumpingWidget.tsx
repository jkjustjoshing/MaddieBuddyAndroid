import React from "react";
import { FlexWidget, TextWidget } from "react-native-android-widget";

export const PumpingWidget = ({ data }: { data?: any }) => {
  return (
    <FlexWidget
      style={{
        height: "match_parent",
        width: "match_parent",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff",
        borderRadius: 16,
      }}
    >
      <TextWidget
        text={JSON.stringify(data || {})}
        style={{
          fontSize: 32,
          fontFamily: "Inter",
          color: "#000000",
        }}
      />
    </FlexWidget>
  );
};
