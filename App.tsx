import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RNBootSplash from 'react-native-bootsplash';
import {AppNavigator} from './src/navigation';
import {AppContext} from './src/Context';
// import {OnboardingScreens} from 'screens';

const App = () => {
  return (
    <NavigationContainer
      onReady={() => {
        RNBootSplash.hide({fade: true});
      }}>
      <AppContext>
        <AppNavigator />
      </AppContext>
    </NavigationContainer>
  );
};

export default App;
