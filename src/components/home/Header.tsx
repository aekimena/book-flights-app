import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { commonStyles } from '../../constants/styles';
import { LabelText } from '../common/LabelText';
import { colors } from '../../constants/colors';

export const Header = () => {
  return (
    <View style={styles.container}>
      <View style={{ ...commonStyles.flexRow, gap: 15 }}>
        <LabelText text="Google" style={{ fontSize: 20 }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...commonStyles.flexRowBtw,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomColor: colors.border,
    borderBottomWidth: 0.5,
  },
});
