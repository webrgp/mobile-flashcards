// reactotron.js
import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

import host from './host';

Reactotron.configure({ 
  name: 'UdaciCards',
  host 
}).use(
  reactotronRedux()
).useReactNative().connect();