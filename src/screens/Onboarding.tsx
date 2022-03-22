import React from 'react';
import {
  StatusBar,
  Text,
  View,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import {useSharedValue} from 'react-native-reanimated';
import {useAppTheme} from '../Hooks';
import {Icon} from '../components';

const Onboarding = () => {
  const theme = useAppTheme();
  const scrollOffset = useSharedValue(0);
  const {width} = useWindowDimensions();
  const iconWidth = width * 0.5;
  return (
    <View style={[{backgroundColor: theme.primary}, styles.container]}>
      <StatusBar backgroundColor={theme.primary} barStyle="dark-content" />
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Icon name="scholar" color={'white'} size={width / 1.5} />
      </View>
    </View>
  );
};

export default Onboarding;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
