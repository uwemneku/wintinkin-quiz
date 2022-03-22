import {
  StyleProp,
  StyleSheet,
  Text,
  TextProps,
  TextStyle,
  View,
} from 'react-native';
import React from 'react';

interface ThemeTextProps extends TextProps {
  fontWeight: TextStyle['fontWeight'];
  color: TextStyle['color'];
}

const ThemeText = ({color, fontWeight, ...props}: ThemeTextProps) => {
  return <Text {...props} />;
};

export default ThemeText;

const styles = StyleSheet.create({});
