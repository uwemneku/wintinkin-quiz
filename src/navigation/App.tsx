import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppRoutes} from 'types';
import {OnboardingScreens} from '../screens';

const {Navigator, Screen} = createNativeStackNavigator<AppRoutes>();

const AppNavigator = () => {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name={'Onboarding'} component={OnboardingScreens} />
    </Navigator>
  );
};

export default AppNavigator;
