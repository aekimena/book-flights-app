import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Vspacer } from '../common/Vspacer';
import { LabelText } from '../common/LabelText';
import { commonStyles } from '../../constants/styles';
import { InfoOutline } from '../../../assets/icons';
import { colors } from '../../constants/colors';

export const FindDestinations = () => {
  return (
    <View style={{ paddingHorizontal: 20 }}>
      <Vspacer size={30} />
      <View style={{ ...commonStyles.flexRow, gap: 10 }}>
        <LabelText
          text="Find cheap flights from anywhere"
          style={{ fontSize: 18 }}
        />
        <Pressable>
          <InfoOutline height={20} width={20} color={colors.icon} />
        </Pressable>
      </View>
      <Vspacer />
      <View style={styles.mapContainer}>
        <View style={styles.btn}>
          <LabelText text="Explore destinations" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mapContainer: {
    ...commonStyles.allCenter,
    height: 170,
    width: '100%',
    borderRadius: 20,
  },
  btn: {
    paddingHorizontal: 20,
    paddingVertical: 7,
    borderRadius: 50,
    backgroundColor: colors.card,
  },
});
