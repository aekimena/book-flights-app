import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { colors } from '../../constants/colors';
import { commonStyles } from '../../constants/styles';
import { ArrowLeft } from '../../../assets/icons';
import { LabelText } from '../common/LabelText';
import { useNavigation } from '@react-navigation/native';

export const LeftTitleHeader = ({ title }: { title: string }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.goBack()}>
        <ArrowLeft height={20} width={20} color={colors.icon} />
      </Pressable>

      <LabelText text={title} style={{ fontSize: 16 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderColor: colors.border,
    ...commonStyles.flexRow,
    gap: 15,
  },
});
