import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { LabelText } from '../common/LabelText';
import { Vspacer } from '../common/Vspacer';
import { commonStyles } from '../../constants/styles';
import { colors } from '../../constants/colors';
import { CustomButton } from '../button/CustomButton';
import {
  CalenderOutline,
  ChevronDown,
  SearchOutine,
  UserOutline,
} from '../../../assets/icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { SelectInput } from '../inputs/SelectInput';
import { formatDate } from '../../utils/helpers';
import { useNavigation } from '@react-navigation/native';
import {
  CabinClass,
  ScreenRouteParamList,
  SearchAirportResult,
} from '../../types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useFlightSelection } from '../../contexts/FlightContext';

export const Search = ({
  onPressLocation,
  onPressDestination,
  origin,
  destination,
  isHomeScreen,
  isReturning = false,

  cabinClass = { name: 'Economy', value: 'economy' },
  onPressSelectClass,
  numberOfPeople = 1,
  onPressPeople,
}: {
  onPressLocation: () => void;
  onPressDestination: () => void;
  origin: SearchAirportResult;
  destination: SearchAirportResult;
  isHomeScreen?: boolean;
  isReturning?: boolean;
  cabinClass?: CabinClass;
  onPressSelectClass?: () => void;
  numberOfPeople?: number;
  onPressPeople?: () => void;
}) => {
  const [showDepartDate, setShowDepartDate] = useState(false);
  const [showReturnDate, setShowReturnDate] = useState(false);

  const { setFlightSelection, departureDate, returnDate } =
    useFlightSelection();

  const navigation =
    useNavigation<NativeStackNavigationProp<ScreenRouteParamList, 'home'>>();

  const onChangeDepartDate = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShowDepartDate(false);
    setFlightSelection({ departureDate: new Date(currentDate) });
  };
  const onChangeReturnDate = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShowReturnDate(false);
    setFlightSelection({ returnDate: new Date(currentDate) });
  };

  const onPressSearch = () => {
    if (!origin) {
      return;
    }
    if (!destination) {
      return;
    }

    if (origin.entityId == destination.entityId) {
      return;
    }

    if (!departureDate) {
      return;
    }
    if (!returnDate) {
      return;
    }
    if (new Date(departureDate) >= new Date(returnDate)) {
      return;
    }

    navigation.navigate('flights');
  };
  return (
    <View
      style={{
        paddingHorizontal: 20,
      }}
    >
      {isHomeScreen && (
        <LabelText
          text="Flights"
          style={{ textAlign: 'center', fontSize: 30, lineHeight: undefined }}
        />
      )}
      <Vspacer size={10} />
      <View style={{ ...commonStyles.flexRow, gap: 15 }}>
        <Pressable style={styles.dropDown} onPress={onPressPeople}>
          <UserOutline height={18} width={18} color={colors.icon} />
          <LabelText text={numberOfPeople.toString()} />
          <ChevronDown height={15} width={15} color={colors.icon} />
        </Pressable>
        <Pressable style={styles.dropDown} onPress={onPressSelectClass}>
          <LabelText text={cabinClass.name} />
          <ChevronDown height={15} width={15} color={colors.icon} />
        </Pressable>
      </View>

      <Vspacer size={10} />
      <View style={{ gap: 15 }}>
        <View style={{ ...commonStyles.flexRow, gap: 15 }}>
          <SelectInput
            onPress={onPressLocation}
            style={{ flex: 1 }}
            value={!!origin ? origin.presentation.suggestionTitle : ''}
            placeholder="Where from?"
            disabled={isReturning}
          />
          <SelectInput
            onPress={onPressDestination}
            style={{ flex: 1 }}
            disabled={isReturning}
            value={
              !!destination ? destination.presentation.suggestionTitle : ''
            }
            placeholder="Where to?"
          />
        </View>
        <View style={{ ...commonStyles.flexRow }}>
          {!isReturning && (
            <SelectInput
              value={departureDate ? formatDate(departureDate) : ''}
              onPress={() => setShowDepartDate(true)}
              placeholder="Depature"
              leftIcon={
                <CalenderOutline height={20} width={20} color={colors.icon} />
              }
              style={{ flex: 1 }}
            />
          )}

          <SelectInput
            value={returnDate ? formatDate(returnDate) : ''}
            onPress={() => setShowReturnDate(true)}
            placeholder="Return"
            leftIcon={
              <CalenderOutline height={20} width={20} color={colors.icon} />
            }
            style={{ flex: 1 }}
          />
        </View>
      </View>
      {isHomeScreen && (
        <>
          <Vspacer size={30} />

          <View style={styles.searchContainer}>
            <CustomButton
              title="Search"
              onPress={onPressSearch}
              leftIcon={<SearchOutine height={20} width={20} color={'#fff'} />}
            />
          </View>
        </>
      )}

      {showDepartDate && (
        <DateTimePicker
          testID="dateTimePicker"
          value={departureDate || new Date()}
          mode={'date'}
          is24Hour={true}
          onChange={onChangeDepartDate}
        />
      )}
      {showReturnDate && (
        <DateTimePicker
          testID="dateTimePicker"
          value={returnDate || new Date()}
          mode={'date'}
          is24Hour={true}
          onChange={onChangeReturnDate}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  dropDown: {
    ...commonStyles.flexRow,
    gap: 10,
    borderRadius: 50,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderColor: colors.border,
  },
  searchContainer: {
    position: 'absolute',
    height: 45,
    alignSelf: 'center',
    bottom: -25,
  },
});
