import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { LabelText } from '../common/LabelText';
import { commonStyles } from '../../constants/styles';
import { colors } from '../../constants/colors';
import { LocationOutline } from '../../../assets/icons';
import { SearchAirportResult } from '../../types';

export const SearchAirportCard = ({
  item,
  onPress,
}: {
  item: SearchAirportResult;
  onPress: (item: SearchAirportResult) => void;
}) => {
  return (
    <Pressable
      style={{ ...commonStyles.flexRow, gap: 15 }}
      onPress={() => onPress(item)}
    >
      <LocationOutline height={20} width={20} color={colors.icon} />
      <View style={{ flex: 1, gap: 5 }}>
        <LabelText
          text={item.presentation.suggestionTitle}
          style={{ fontSize: 16 }}
        />
        <LabelText
          text={item.presentation.subtitle}
          style={{ color: colors.textSecondary }}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({});
