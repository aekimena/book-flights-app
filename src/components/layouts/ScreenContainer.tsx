import { StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { colors } from '../../constants/colors';
import { Vspacer } from '../common/Vspacer';

const ScreenContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <StatusBar
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
        translucent
      />
      <Vspacer size={15} />
      {children}
    </View>
  );
};

export default ScreenContainer;

const styles = StyleSheet.create({});
