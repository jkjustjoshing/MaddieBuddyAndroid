import registerRootComponent from 'expo/build/launch/registerRootComponent';

import App from './App';
import { registerWidgetTaskHandler } from 'react-native-android-widget';
import { widgetTaskHandler } from './src/PumpingWidget/task-handler';

registerRootComponent(App);
registerWidgetTaskHandler(widgetTaskHandler);
