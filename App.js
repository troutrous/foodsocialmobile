import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './src/actions/store';
import NewFeedStack from './src/navigations/NewFeedStack';

export default App = (props) => {
  return (
    <Provider store={store}>
      <NewFeedStack />
    </Provider>
  )
}