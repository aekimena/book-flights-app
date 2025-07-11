import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { LabelText } from '../common/LabelText';
import { colors } from '../../constants/colors';
import { commonStyles } from '../../constants/styles';

export const OutlineButton = ({
  onPress,
  title,
  disabled,
}: {
  onPress: () => void;
  disabled?: boolean;
  title: string;
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <LabelText text={title} style={{ color: colors.primary }} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: colors.border,
    ...commonStyles.allCenter,
  },
});
