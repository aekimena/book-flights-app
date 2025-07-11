import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { JSX } from 'react';
import { LabelText } from '../common/LabelText';
import { commonStyles } from '../../constants/styles';
import { colors } from '../../constants/colors';

export const CustomButton = ({
  leftIcon,
  onPress,
  title,
  isLoading,
  disabled,
}: {
  leftIcon?: JSX.Element;
  title: string;
  isLoading?: boolean;
  disabled?: boolean;
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      disabled={disabled}
    >
      {isLoading ? (
        <>
          <ActivityIndicator size={30} color={'#fff'} />
        </>
      ) : (
        <>
          {leftIcon && leftIcon}
          <LabelText text={title} style={{ color: '#fff' }} />
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    ...commonStyles.flexRowCenter,
    gap: 10,
    backgroundColor: colors.primary,
    height: 40,
    width: '100%',
    borderRadius: 50,
    paddingHorizontal: 15,
  },
});
