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
      <FlexWidget
        style={{
          height: "wrap_content",
          width: "wrap_content",
          alignItems: "center",
          justifyContent: "center",
          padding: 16,
          backgroundColor: "#ff0000",
          borderColor: "#ffff00",
          borderWidth: 2,
        }}
        clickAction="MY_ACTION"
      >
        <TextWidget style={{ fontSize: 12 }} text="My action" />
      </FlexWidget>
      <TextWidget
        text={JSON.stringify(data || {}, null, 2)}
        style={{
          fontSize: 10,
          fontFamily: "Inter",
          color: "#000000",
        }}
      />
    </FlexWidget>
  );
};
