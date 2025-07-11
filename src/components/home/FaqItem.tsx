import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { commonStyles } from '../../constants/styles';
import { LabelText } from '../common/LabelText';
import { ChevronDown } from '../../../assets/icons';
import { colors } from '../../constants/colors';

interface ItemProps {
  answer: string;
  question: string;
  isExpanded: boolean;
}

export const FaqItem = ({
  item,
  onPress,
}: {
  item: ItemProps;
  onPress: () => void;
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        paddingVertical: 15,
        borderBottomWidth: 0.5,
        borderColor: colors.border,
        gap: 5,
      }}
    >
      <View style={{ ...commonStyles.flexRow, gap: 15 }}>
        <View style={{ flex: 1 }}>
          <LabelText text={item.question} style={{ fontSize: 16 }} />
        </View>
        <ChevronDown height={20} width={20} color={colors.icon} />
      </View>
      {item.isExpanded && (
        <LabelText text={item.answer} style={{ fontWeight: '400' }} />
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({});
