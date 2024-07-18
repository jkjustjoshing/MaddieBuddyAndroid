import registerRootComponent from 'expo/build/launch/registerRootComponent';

import App from './App';
import { registerWidgetConfigurationScreen, registerWidgetTaskHandler } from 'react-native-android-widget';
import { widgetTaskHandler } from './src/PumpingWidget/task-handler';
import { WidgetConfigurationScreen } from './src/PumpingWidget/WidgetConfigurationScreen';

registerRootComponent(App);
registerWidgetTaskHandler(widgetTaskHandler);
registerWidgetConfigurationScreen(WidgetConfigurationScreen)
