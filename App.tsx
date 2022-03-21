import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RNBootSplash from 'react-native-bootsplash';
const App = () => {
  return (
    <NavigationContainer
      onReady={() => {
        RNBootSplash.hide({fade: true});
      }}>
      <Text>App</Text>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
