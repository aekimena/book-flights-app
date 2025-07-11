import { Pressable, StyleSheet, ViewStyle } from 'react-native';
import React, { JSX } from 'react';
import { colors } from '../../constants/colors';
import { commonStyles } from '../../constants/styles';
import { LabelText } from '../common/LabelText';

export const SelectInput = ({
  placeholder,

  leftIcon,
  disabled,
  style,
  value,
  onPress,
}: {
  onChangeText: (value: string) => void;

  leftIcon?: JSX.Element;
  placeholder?: string;

  disabled?: boolean;
  style?: ViewStyle;
  value?: string;
  onPress?: () => void;
}) => {
  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      style={{
        ...styles.container,
        ...style,
      }}
    >
      {leftIcon && leftIcon}

      <LabelText text={value || placeholder || 'Select'} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 45,
    width: '100%',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.border,
    gap: 10,
    paddingHorizontal: 10,
    ...commonStyles.flexRow,
  },
});
