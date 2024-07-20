import React from "react";
import { FlexWidget, TextWidget } from "react-native-android-widget";

export const PumpingWidget = ({
  data,
  dimensions: {
    width,
    height,
    screenInfo: { density },
  },
  reason,
}: {
  data?: any;
  dimensions: {
    height: number;
    width: number;
    screenInfo: { density: number };
  };
  reason?: string;
}) => {
  if (!data) {
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
          text={`Loading...`}
          style={{
            fontSize: 14,
            fontFamily: "Inter",
            color: "#000000",
          }}
        />
      </FlexWidget>
    );
  }

  const lastPump = data.results[0];

  const msAgo = new Date().getTime() - new Date(lastPump.start).getTime();
  const minutesAgo = Math.floor(msAgo / 1000 / 60);
  const hoursAgo = Math.floor(minutesAgo / 60);
  const agoString = `${hoursAgo} hr ${minutesAgo - hoursAgo * 60} min ago`;

  return (
    <FlexWidget
      style={{
        height,
        width: width,
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#ffffff",
        borderRadius: 16,
        padding: 16,
      }}
    >
      <TextWidget
        text={"Last Pump"}
        style={{
          fontSize: 16,
          fontFamily: "Inter",
          color: "#cccccc",
          textAlign: "center",
        }}
      />
      <FlexWidget
        style={{
          height: "wrap_content",
          width: "match_parent",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <TextWidget
          text={agoString}
          style={{
            fontSize: 20,
            fontFamily: "Inter",
            color: "#000000",
            textAlign: "center",
          }}
        />
        <TextWidget
          text={`as of ${new Date().toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
          })}`}
          style={{
            fontSize: 10,
            fontFamily: "Inter",
            color: "#000000",
            textAlign: "center",
          }}
        />
      </FlexWidget>

      <FlexWidget
        style={{
          height: "wrap_content",
          width: "wrap_content",
          alignItems: "center",
          justifyContent: "center",
          padding: 5,
          backgroundColor: "#cccccc",
        }}
        clickAction="MY_ACTION"
      >
        <TextWidget style={{ fontSize: 12 }} text="Tap to refresh" />
      </FlexWidget>
    </FlexWidget>
  );
};
