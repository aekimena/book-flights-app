import { StyleSheet, Text, TextStyle, View } from 'react-native';
import React from 'react';
import { colors } from '../../constants/colors';

export const LabelText = ({
  style,
  text,
}: {
  style?: TextStyle;
  text: string;
}) => {
  return <Text style={[styles.text, { ...style }]}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 21,
    color: colors.textPrimary,
  },
});
