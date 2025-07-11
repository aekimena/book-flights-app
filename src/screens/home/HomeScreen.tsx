import { ImageBackground, ScrollView, StyleSheet, View } from 'react-native';
import React, { useRef } from 'react';
import ScreenContainer from '../../components/layouts/ScreenContainer';

import { Vspacer } from '../../components/common/Vspacer';
import { Search } from '../../components/home/Search';

import { SelectLocationSheet } from '../../bottomSheets/SelectLocationSheet';
import { SelectDestinationSheet } from '../../bottomSheets/SelectDestinationSheet';
import { images } from '../../../assets/images';
import { SelectClassSheet } from '../../bottomSheets/SelectClassSheet';
import { SelectAdultsSheet } from '../../bottomSheets/SelectAdultsSheet';
import { useFlightSelection } from '../../contexts/FlightContext';
import { Header } from '../../components/home/Header';

const HomeScreen = () => {
  const locationRef = useRef<any>(null);
  const destinationRef = useRef<any>(null);
  const cabinClassRef = useRef<any>(null);
  const adultSheetRef = useRef<any>(null);

  const {
    setFlightSelection,
    origin,
    destination,
    departNoOfPeople,
    departTravelClass,
  } = useFlightSelection();
  return (
    <>
      <ScreenContainer>
        <View style={{ flex: 1 }}>
          <Header />

          <ScrollView>
            <View style={{ height: 150 }}>
              <ImageBackground
                source={images.homeBanner}
                style={{ flex: 1 }}
              ></ImageBackground>
            </View>

            <Vspacer size={20} />
            <Search
              onPressLocation={() => locationRef.current?.expand()}
              onPressDestination={() => destinationRef.current?.expand()}
              origin={origin}
              destination={destination}
              isHomeScreen
              cabinClass={departTravelClass}
              onPressSelectClass={() => cabinClassRef.current?.expand()}
              onPressPeople={() => adultSheetRef.current?.expand()}
              numberOfPeople={departNoOfPeople}
            />

            <Vspacer size={20} />

            <Vspacer size={100} />
          </ScrollView>

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
              setFlightSelection({ destination: item, returnOrigin: item });
              destinationRef.current?.forceClose();
            }}
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
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
