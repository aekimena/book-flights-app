import { FlatList, StyleSheet, Text, ToastAndroid, View } from 'react-native';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import ScreenContainer from '../../components/layouts/ScreenContainer';
import { RouteProp } from '@react-navigation/native';
import { FlightItineraryProp, ScreenRouteParamList } from '../../types';

import { LeftTitleHeader } from '../../components/headers/LeftTitleHeader';

import { ListHeader } from '../../components/flights/ListHeader';
import { FlightCard } from '../../components/flights/FlightCard';
import { useQuery } from '@tanstack/react-query';
import { searchFlights } from '../../api';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useFlightSelection } from '../../contexts/FlightContext';
import { getMonthYearDate } from '../../utils/helpers';
import { SelectLocationSheet } from '../../bottomSheets/SelectLocationSheet';
import { SelectDestinationSheet } from '../../bottomSheets/SelectDestinationSheet';

import { SelectClassSheet } from '../../bottomSheets/SelectClassSheet';
import { SelectAdultsSheet } from '../../bottomSheets/SelectAdultsSheet';
import { PriceGraph } from '../../components/flights/PriceGraph';
import { Vspacer } from '../../components/common/Vspacer';

const FlightsScreen = ({
  route,
  navigation,
}: {
  route: RouteProp<ScreenRouteParamList, 'flights'>;
  navigation: NativeStackNavigationProp<ScreenRouteParamList, 'flights'>;
}) => {
  const locationRef = useRef<any>(null);
  const destinationRef = useRef<any>(null);
  const cabinClassRef = useRef<any>(null);
  const adultSheetRef = useRef<any>(null);

  const {
    departureDate,
    returnDate,
    origin,
    destination,
    departNoOfPeople,
    departTravelClass,
    setFlightSelection,
  } = useFlightSelection();

  const [sort, setSort] = useState('best');

  const [modifiedData, setModifiedData] = useState<FlightItineraryProp[]>([]);
  const { data, isLoading, isLoadingError, refetch, isError } = useQuery({
    queryKey: [
      'depart-flights',
      JSON.stringify(origin),
      JSON.stringify(destination),
      sort,
      departureDate?.toISOString(),
      returnDate?.toISOString(),
    ],
    queryFn: async () =>
      await searchFlights({
        originEntityId: origin?.entityId,
        originSkyId: origin?.skyId,
        destinationEntityId: destination?.entityId,
        destinationSkyId: destination?.skyId,
        adults: departNoOfPeople.toString(),
        cabinClass: departTravelClass?.value,
        countryCode: 'US',
        date: getMonthYearDate(departureDate),
        currency: 'USD',
        sortBy: sort,
        market: 'en-US',
      }),
  });

  const onExpand = (item: FlightItineraryProp) => {
    setModifiedData(prev =>
      prev.map(i => ({
        ...i,
        isExpanded: i.id === item.id ? !i.isExpanded : i.isExpanded,
      })),
    );
  };

  useEffect(() => {
    console.log('data from flights: ', data);

    if (data && Array.isArray(data)) {
      setModifiedData(data.map(i => ({ ...i, isExpanded: false })));
    }
  }, [data, isLoading, isLoadingError]);

  useEffect(() => {
    if (isError) {
      ToastAndroid.show('Something went wrong', ToastAndroid.BOTTOM);
    }
  }, [isError]);
  return (
    <ScreenContainer>
      <View style={{ flex: 1 }}>
        <LeftTitleHeader title="Flights" />
        <FlatList
          onRefresh={() => {
            if (isError) {
              refetch();
            }
          }}
          refreshing={isLoading}
          data={modifiedData || []}
          ListHeaderComponent={
            <>
              <ListHeader
                onPressDestination={() => destinationRef.current?.expand()}
                onPressOrigin={() => locationRef.current?.expand()}
                origin={origin}
                destination={destination}
                activeSort={sort}
                setActiveSort={val => setSort(val)}
                numberOfPeople={departNoOfPeople}
                cabinClass={departTravelClass}
                onPressSelectClass={() => cabinClassRef.current?.expand()}
                onPressPeople={() => adultSheetRef.current?.expand()}
              />
              <Vspacer size={10} />
              <PriceGraph
                origin={origin}
                destination={destination}
                date={getMonthYearDate(departureDate)}
                onPressBar={item => {
                  setFlightSelection({ departureDate: new Date(item.day) });
                }}
              />
              <Vspacer size={15} />
            </>
          }
          keyExtractor={item => item.id}
          renderItem={({ item, index }) => (
            <FlightCard
              item={item}
              onPressSelect={() => {
                setFlightSelection({ departFlight: item });

                navigation.navigate('returnFlights');
              }}
              onPress={() => onExpand(item)}
            />
          )}
        />

        {/* sheets */}

        <SelectLocationSheet
          ref={locationRef}
          onSelectItem={item => {
            setFlightSelection({ origin: item, returnDestination: item });
            locationRef.current?.forceClose();
          }}
        />
        <SelectDestinationSheet
          ref={destinationRef}
          onSelectItem={item => {
            // setDestination(item);
            setFlightSelection({ destination: item, returnOrigin: item });
            destinationRef.current?.forceClose();
          }}
        />
        <SelectClassSheet
          ref={cabinClassRef}
          onSelect={val => {
            // setCabinClass(val);
            setFlightSelection({ departTravelClass: val });
            cabinClassRef.current?.forceClose();
          }}
        />
        <SelectAdultsSheet
          ref={adultSheetRef}
          onSelect={val => {
            // setNumberOfPeople(val);
            setFlightSelection({ departNoOfPeople: val });
            adultSheetRef.current?.forceClose();
          }}
        />
      </View>
    </ScreenContainer>
  );
};

export default FlightsScreen;
const styles = StyleSheet.create({});
