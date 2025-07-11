import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { colors } from '../../constants/colors';

export const Separator = ({ margin = 20 }: { margin?: number }) => {
  return (
    <View
      style={{
        height: 0.5,
        width: '100%',
        backgroundColor: colors.border,
        marginVertical: margin,
      }}
    ></View>
  );
};

const styles = StyleSheet.create({});
