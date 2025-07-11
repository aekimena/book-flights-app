import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { commonStyles } from '../../constants/styles';
import { LabelText } from '../common/LabelText';
import { HomeDestinationCard } from '../../types';

export const DestinationCard = ({ item }: { item: HomeDestinationCard }) => {
  return (
    <Pressable
      style={{ ...commonStyles.flexRow, gap: 15, alignItems: 'flex-start' }}
    >
      <Image
        source={{ uri: item.image }}
        style={{ height: 100, width: 100, borderRadius: 12 }}
      />
      <View style={{ flex: 1, ...commonStyles.flexRow, gap: 15 }}>
        <View style={{ gap: 5, flex: 1 }}>
          <LabelText text={item.name} />
          <LabelText text={`${item.departDate} - ${item.returnDate}`} />
          <LabelText text={`${item.stops} stops ${item.duration}`} />
        </View>
        <View>
          <LabelText text={`NGN ${item.price.toLocaleString()}`} />
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({});
