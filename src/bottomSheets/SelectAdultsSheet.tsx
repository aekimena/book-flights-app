import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { forwardRef, useState } from 'react';
import SheetContainer from '../components/layouts/SheetContainer';
import { LabelText } from '../components/common/LabelText';
import { CabinClass } from '../types';
import { commonStyles } from '../constants/styles';
import { colors } from '../constants/colors';
import { MinusOutline, PlusOutline } from '../../assets/icons';
import { CustomButton } from '../components/button/CustomButton';
import { Vspacer } from '../components/common/Vspacer';

export const SelectAdultsSheet = forwardRef(
  ({ onSelect }: { onSelect: (val: number) => void }, ref) => {
    const [quantity, setQuantity] = useState<number>(1);
    return (
      <SheetContainer snapPoints={['30%']} ref={ref}>
        <View style={{ gap: 20, padding: 20 }}>
          <View style={{ ...commonStyles.flexRowBtw, gap: 15 }}>
            <LabelText
              text="Adult"
              style={{ fontSize: 16, fontWeight: '500' }}
            />
            <View style={{ ...commonStyles.flexRow, gap: 10 }}>
              <Pressable
                style={styles.addBtn}
                onPress={() => {
                  if (quantity > 1) {
                    setQuantity(prev => prev - 1);
                  }
                }}
              >
                <MinusOutline height={20} width={20} color={colors.icon} />
              </Pressable>
              <LabelText text={quantity.toString()} />
              <Pressable
                style={styles.addBtn}
                onPress={() => {
                  setQuantity(prev => prev + 1);
                }}
              >
                <PlusOutline height={20} width={20} color={colors.icon} />
              </Pressable>
            </View>
          </View>
          <Vspacer />
          <View style={{}}>
            <CustomButton title="Proceed" onPress={() => onSelect(quantity)} />
          </View>
        </View>
      </SheetContainer>
    );
  },
);

const styles = StyleSheet.create({
  addBtn: {
    height: 40,
    width: 40,
    borderRadius: 5,
    backgroundColor: colors.card,
    ...commonStyles.allCenter,
  },
});
