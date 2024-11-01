import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import RootNavigator from './src/navigation';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import {OnBoarding} from './src/screens';

const App = () => {
  useEffect(() => {
    SplashScreen.hide(); //hides the splash screen on app load.
  }, []);

  return (
    <Provider store={store}>
      {/* <RootNavigator /> */}
      <OnBoarding />
    </Provider>
  );
};

export default App;
