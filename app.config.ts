import type { ConfigContext, ExpoConfig } from 'expo/config';
import { WithAndroidWidgetsParams } from 'react-native-android-widget';

const widgetConfig: WithAndroidWidgetsParams = {
  // Paths to all custom fonts used in all widgets
  fonts: ['./assets/Inter-Regular.ttf'],
  widgets: [
    {
      name: 'Pumping', // This name will be the **name** with which we will reference our widget.
      label: 'Pumping', // Label shown in the widget picker
      minWidth: '320dp',
      minHeight: '120dp',
      minResizeWidth: '320dp',
      minResizeHeight: '120dp',
      // This means the widget's default size is 5x2 cells, as specified by the targetCellWidth and targetCellHeight attributes.
      // Or 320×120dp, as specified by minWidth and minHeight for devices running Android 11 or lower.
      // If defined, targetCellWidth,targetCellHeight attributes are used instead of minWidth or minHeight.
      targetCellWidth: 5,
      targetCellHeight: 2,
      description: 'Latest pump data', // Description shown in the widget picker
      previewImage: './assets/splash.png', // Path to widget preview image

      // How often, in milliseconds, that this AppWidget wants to be updated.
      // The task handler will be called with widgetAction = 'UPDATE_WIDGET'.
      // Default is 0 (no automatic updates)
      // Minimum is 1800000 (30 minutes == 30 * 60 * 1000).
      updatePeriodMillis: 1800000,

      widgetFeatures: 'reconfigurable',
    },
  ],
};

export default (): ExpoConfig => ({
  "name": "MaddieBuddy",
  "slug": "MaddieBuddy",
  "version": "1.0.0",
  "orientation": "portrait",
  "icon": "./assets/icon.png",
  "userInterfaceStyle": "light",
  "splash": {
    "image": "./assets/splash.png",
    "resizeMode": "contain",
    "backgroundColor": "#ffffff"
  },
  "ios": {
    "supportsTablet": true
  },
  "android": {
    "adaptiveIcon": {
      "foregroundImage": "./assets/adaptive-icon.png",
      "backgroundColor": "#ffffff"
    },
    package: 'run.kramer.maddie_buddy',
  },
  "web": {
    "favicon": "./assets/favicon.png"
  },
  plugins: [['react-native-android-widget', widgetConfig]],
  "extra": {
    "eas": {
      "projectId": "e04f858b-2224-498c-bea2-087ce468bc07"
    }
  }
}

)
