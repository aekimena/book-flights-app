import { FlatList, StyleSheet, Text, ToastAndroid, View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import ScreenContainer from '../../components/layouts/ScreenContainer';
import { RouteProp } from '@react-navigation/native';
import { FlightItineraryProp, ScreenRouteParamList } from '../../types';
import { LeftTitleHeader } from '../../components/headers/LeftTitleHeader';
import { Vspacer } from '../../components/common/Vspacer';

import { ListHeader } from '../../components/flights/ListHeader';
import { FlightCard } from '../../components/flights/FlightCard';
import { useQuery } from '@tanstack/react-query';
import { searchFlights } from '../../api';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useFlightSelection } from '../../contexts/FlightContext';
import { getMonthYearDate } from '../../utils/helpers';
import { SelectClassSheet } from '../../bottomSheets/SelectClassSheet';
import { SelectAdultsSheet } from '../../bottomSheets/SelectAdultsSheet';
import { PriceGraph } from '../../components/flights/PriceGraph';
import { showToast } from '../../utils/notifier';

const ReturnFlights = ({
  route,
  navigation,
}: {
  route: RouteProp<ScreenRouteParamList, 'returnFlights'>;
  navigation: NativeStackNavigationProp<ScreenRouteParamList, 'returnFlights'>;
}) => {
  const cabinClassRef = useRef<any>(null);
  const adultSheetRef = useRef<any>(null);

  const {
    returnOrigin,
    returnDestination,
    departureDate,
    returnDate,
    returnNoOfPeople,
    returnravelClass,
    setFlightSelection,
  } = useFlightSelection();

  const [sort, setSort] = useState('best');

  const [modifiedData, setModifiedData] = useState<FlightItineraryProp[]>([]);
  const { data, isLoading, isLoadingError, refetch, isError } = useQuery({
    queryKey: [
      'return-flights',
      JSON.stringify(returnOrigin),
      JSON.stringify(returnDestination),
      sort,
      departureDate?.toISOString(),
      returnDate?.toISOString(),
    ],
    queryFn: async () =>
      await searchFlights({
        originEntityId: returnOrigin.entityId,
        originSkyId: returnOrigin.skyId,
        destinationEntityId: returnDestination.entityId,
        destinationSkyId: returnDestination.skyId,
        date: getMonthYearDate(returnDate),
        cabinClass: returnravelClass.value,
        adults: returnNoOfPeople.toString(),
        sortBy: sort,
        currency: 'USD',
        market: 'en-US',
        countryCode: 'US',
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

  const onSelectReturningFlights = (item: FlightItineraryProp) => {
    if (!returnOrigin || !returnDestination) {
      return;
    }

    if (new Date() > returnDate) {
      return;
    }

    setFlightSelection({ returnFlight: item });
    navigation.navigate('bookFlight');
  };

  useEffect(() => {
    console.log('data from flights: ', data);

    if (data && Array.isArray(data)) {
      setModifiedData(data.map(i => ({ ...i, isExpanded: false })));
    }
    // return [];
  }, [data, isLoading, isLoadingError]);

  useEffect(() => {
    if (isError) {
      showToast("Couldn't find returning flights.");
    }
  }, [isError]);
  return (
    <ScreenContainer>
      <View style={{ flex: 1 }}>
        <LeftTitleHeader title="Returning flights" />
        <FlatList
          refreshing={isLoading}
          onRefresh={() => {
            if (isError) {
              refetch();
            }
          }}
          data={modifiedData || []}
          ListHeaderComponent={
            <>
              <ListHeader
                origin={returnOrigin}
                destination={returnDestination}
                activeSort={sort}
                setActiveSort={val => setSort(val)}
                isReturning
                numberOfPeople={returnNoOfPeople}
                cabinClass={returnravelClass}
                onPressSelectClass={() => cabinClassRef.current?.expand()}
                onPressPeople={() => adultSheetRef.current?.expand()}
              />
              <Vspacer size={10} />
              <PriceGraph
                origin={returnOrigin}
                destination={returnDestination}
                date={getMonthYearDate(returnDate)}
                onPressBar={item => {
                  setFlightSelection({ returnDate: new Date(item.day) });
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
                onSelectReturningFlights(item);
              }}
              onPress={() => onExpand(item)}
            />
          )}
        />

        <SelectClassSheet
          ref={cabinClassRef}
          onSelect={val => {
            setFlightSelection({ departTravelClass: val });
            cabinClassRef.current?.forceClose();
          }}
        />
        <SelectAdultsSheet
          ref={adultSheetRef}
          onSelect={val => {
            setFlightSelection({ departNoOfPeople: val });
            adultSheetRef.current?.forceClose();
          }}
        />
      </View>
    </ScreenContainer>
  );
};

export default ReturnFlights;
const styles = StyleSheet.create({});
