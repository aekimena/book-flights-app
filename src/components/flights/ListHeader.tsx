import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { CabinClass, SearchAirportResult } from '../../types';
import { Search } from '../home/Search';
import { Vspacer } from '../common/Vspacer';
import { commonStyles } from '../../constants/styles';
import { colors } from '../../constants/colors';
import { LabelText } from '../common/LabelText';

export const ListHeader = ({
  origin,
  destination,
  onPressDestination,
  onPressOrigin,
  activeSort = 'best',
  setActiveSort,
  isReturning = false,

  cabinClass = { name: 'Economy', value: 'economy' },
  onPressSelectClass,
  numberOfPeople = 1,
  onPressPeople,
}: {
  origin: SearchAirportResult;
  destination: SearchAirportResult;
  onPressOrigin: () => void;
  onPressDestination: () => void;
  activeSort?: 'best' | 'cheapest';
  setActiveSort?: (val: 'best' | 'cheapest') => void;
  isReturning?: boolean;

  cabinClass?: CabinClass;
  onPressSelectClass?: () => void;
  numberOfPeople?: number;
  onPressPeople?: () => void;
}) => {
  return (
    <>
      <Search
        origin={origin}
        destination={destination}
        onPressDestination={onPressDestination}
        onPressLocation={onPressOrigin}
        isReturning={isReturning}
        numberOfPeople={numberOfPeople}
        cabinClass={cabinClass}
        onPressPeople={onPressPeople}
        onPressSelectClass={onPressSelectClass}
      />
      <Vspacer size={10} />
      <View style={{ ...commonStyles.flexRow, paddingHorizontal: 20 }}>
        <Pressable
          onPress={() => setActiveSort('best')}
          style={{
            ...styles.sortBox,
            backgroundColor:
              activeSort == 'best' ? colors.primaryLight : 'transparent',
          }}
        >
          <LabelText text="Best" />
        </Pressable>
        <Pressable
          style={{
            ...styles.sortBox,
            backgroundColor:
              activeSort == 'cheapest' ? colors.primaryLight : 'transparent',
          }}
          onPress={() => setActiveSort('cheapest')}
        >
          <LabelText text="Cheapest" />
        </Pressable>
      </View>
      <Vspacer size={20} />
      <View style={{ paddingHorizontal: 20, gap: 10 }}>
        <LabelText
          text={isReturning ? 'Returning flights' : 'Departing flights'}
          style={{ fontSize: 16 }}
        />
        <LabelText
          text={
            isReturning
              ? 'Prices include required taxes + fees for 1 adult. Optional charges and bag fees may apply'
              : 'Prices include required taxes + fees for 1 adult. Optional charges and bag fees may apply. Passenger assistance info.'
          }
          style={{ fontWeight: '400' }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  sortBox: {
    flex: 1,
    height: 50,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.border,
    ...commonStyles.allCenter,
  },
});
