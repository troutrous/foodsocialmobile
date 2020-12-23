/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import NewFeedStack from './src/navigations/NewFeedStack';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => NewFeedStack);
