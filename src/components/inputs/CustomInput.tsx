import { StyleSheet, Text, TextInput, View, ViewStyle } from 'react-native';
import React, { JSX } from 'react';
import { colors } from '../../constants/colors';
import { commonStyles } from '../../constants/styles';
import { LabelText } from '../common/LabelText';
import { Vspacer } from '../common/Vspacer';

export const CustomInput = ({
  onChangeText,
  placeholder,
  defaultValue,
  leftIcon,
  disabled,
  style,
  label,
  secured,
}: {
  onChangeText: (value: string) => void;
  defaultValue: string;
  leftIcon?: JSX.Element;
  placeholder?: string;
  multiLine?: boolean;
  maxLength?: number;
  disabled?: boolean;
  style?: ViewStyle;
  label?: string;
  secured?: boolean;
}) => {
  return (
    <View>
      {label && (
        <View>
          <LabelText text={label} />
          <Vspacer size={5} />
        </View>
      )}
      <View
        style={{
          ...styles.container,
          ...style,
        }}
      >
        {leftIcon && leftIcon}
        <TextInput
          editable={!disabled}
          placeholder={placeholder}
          onChangeText={onChangeText}
          defaultValue={defaultValue}
          style={{ color: colors.textPrimary, height: '100%', width: '100%' }}
          placeholderTextColor={colors.textSecondary}
        />
      </View>
    </View>
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
