import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { WidgetPreview } from 'react-native-android-widget';

import { PumpingWidget } from './src/PumpingWidget/PumpingWidget';
import { Settings } from './src/Settings'

export default function HelloWidgetPreviewScreen() {
  return (
    <View style={styles.container}>
      <Settings />
      <WidgetPreview
        renderWidget={() => <PumpingWidget data={{ loading: true }} />}
        width={320}
        height={200}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
