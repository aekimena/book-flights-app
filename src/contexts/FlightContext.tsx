import React, { createContext, useContext, useState, ReactNode } from 'react';
import { CabinClass, FlightItineraryProp, SearchAirportResult } from '../types';

interface FlightSelectionState {
  origin: SearchAirportResult | null;
  destination: SearchAirportResult | null;
  returnOrigin: SearchAirportResult | null;
  returnDestination: SearchAirportResult | null;
  departureDate: Date; // YYYY-MM-DD
  returnDate?: Date;
  departTravelClass: CabinClass;
  returnravelClass: CabinClass;
  departNoOfPeople: number;
  returnNoOfPeople: number;
  numberOfPeople: number;
  departFlight?: FlightItineraryProp;
  returnFlight?: FlightItineraryProp;
  tripType: 'oneway' | 'roundtrip' | 'multicity';
}

interface FlightSelectionContextProps extends FlightSelectionState {
  setFlightSelection: (updates: Partial<FlightSelectionState>) => void;
  resetFlightSelection: () => void;
}

// Default State
const defaultState: FlightSelectionState = {
  origin: null,
  destination: null,
  returnDestination: null,
  returnOrigin: null,
  departureDate: new Date(),
  returnDate: new Date(),
  departTravelClass: { name: 'Economy', value: 'economy' },
  numberOfPeople: 1,
  departNoOfPeople: 1,
  returnNoOfPeople: 1,
  returnravelClass: { name: 'Economy', value: 'economy' },
  tripType: 'oneway',
  departFlight: undefined,
  returnFlight: undefined,
};

// Context
const FlightSelectionContext = createContext<
  FlightSelectionContextProps | undefined
>(undefined);

// Provider
export const FlightSelectionProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [flightSelection, setFlightSelectionState] =
    useState<FlightSelectionState>(defaultState);

  const setFlightSelection = (updates: Partial<FlightSelectionState>) => {
    setFlightSelectionState(prev => ({
      ...prev,
      ...updates,
    }));
  };

  const resetFlightSelection = () => {
    setFlightSelectionState(defaultState);
  };

  return (
    <FlightSelectionContext.Provider
      value={{
        ...flightSelection,
        setFlightSelection,
        resetFlightSelection,
      }}
    >
      {children}
    </FlightSelectionContext.Provider>
  );
};

// Hook
export const useFlightSelection = (): FlightSelectionContextProps => {
  const context = useContext(FlightSelectionContext);
  if (!context) {
    throw new Error(
      'useFlightSelection must be used within a FlightSelectionProvider',
    );
  }
  return context;
};
