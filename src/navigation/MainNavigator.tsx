import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { screens } from './routes';
import HomeScreen from '../screens/home/HomeScreen';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import FlightsScreen from '../screens/flights/FlightsScreen';
import ReturnFlights from '../screens/flights/ReturnFlights';
import BookFlight from '../screens/flights/BookFlight';
import { FlightSelectionProvider } from '../contexts/FlightContext';
import { ScreenRouteParamList } from '../types';

const MainNavigator = () => {
  const Stack = createNativeStackNavigator<ScreenRouteParamList>();
  return (
    <FlightSelectionProvider>
      <BottomSheetModalProvider>
        <Stack.Navigator
          screenOptions={{ headerShown: false, animation: 'slide_from_right' }}
        >
          <Stack.Screen name={screens.home} component={HomeScreen} />
          <Stack.Screen name={screens.flights} component={FlightsScreen} />
          <Stack.Screen
            name={screens.returnFlights}
            component={ReturnFlights}
          />
          <Stack.Screen name={screens.bookFlight} component={BookFlight} />
        </Stack.Navigator>
      </BottomSheetModalProvider>
    </FlightSelectionProvider>
  );
};

export default MainNavigator;

const styles = StyleSheet.create({});
