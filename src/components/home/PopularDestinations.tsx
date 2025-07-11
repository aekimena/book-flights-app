import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import { Vspacer } from '../common/Vspacer';
import { LabelText } from '../common/LabelText';
import { popularDestinations } from '../../constants/data';

export const PopularDestinations = () => {
  return (
    <View style={{ paddingHorizontal: 0 }}>
      <Vspacer />
      <LabelText
        text="Popular destinations"
        style={{ fontSize: 18, paddingHorizontal: 20 }}
      />
      <Vspacer />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 15, paddingHorizontal: 20 }}
      >
        {popularDestinations.slice(0, 5).map((item, index) => (
          <Pressable>
            <Image
              source={{ uri: item.image }}
              style={{ height: 100, width: 120, borderRadius: 12 }}
            />
            <View
              style={{ position: 'absolute', bottom: 10, left: 10, zIndex: 2 }}
            >
              <LabelText text={item.name} style={{ color: '#fff' }} />
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});
