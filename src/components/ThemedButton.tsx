import {StyleSheet, Text, View, ViewProps} from 'react-native';
import React from 'react';
import {ThemedButtonProps} from 'types/components';

const ThemedButton = (props: ThemedButtonProps) => {
  const customStyle: ViewProps['style'] = [];
  const {text, textColor, variant} = props;

  switch (variant) {
    case 'filled':
      {
        const {backgroundColor} = props;
        const _: ViewProps['style'] = {backgroundColor};
        customStyle.push(_);
      }
      break;

    case 'outline':
      {
      }
      break;
  }
  return (
    <View style={customStyle}>
      <Text>{text}</Text>
    </View>
  );
};

export default ThemedButton;

const styles = StyleSheet.create({});
