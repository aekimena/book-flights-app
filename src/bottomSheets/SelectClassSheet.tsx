import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { forwardRef } from 'react';
import SheetContainer from '../components/layouts/SheetContainer';
import { LabelText } from '../components/common/LabelText';
import { CabinClass } from '../types';

export const SelectClassSheet = forwardRef(
  ({ onSelect }: { onSelect: (val: CabinClass) => void }, ref) => {
    const classList = [
      { name: 'Economy', value: 'economy' },
      { name: 'Business', value: 'business' },
      { name: 'First', value: 'first' },
    ];
    return (
      <SheetContainer snapPoints={['30%']} ref={ref}>
        <View style={{ gap: 20, padding: 20 }}>
          {classList.map((item, index) => (
            <Pressable key={index} style={{}} onPress={() => onSelect(item)}>
              <LabelText text={item.name} style={{ fontSize: 16 }} />
            </Pressable>
          ))}
        </View>
      </SheetContainer>
    );
  },
);

const styles = StyleSheet.create({});
