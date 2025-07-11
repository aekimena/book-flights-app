import { screens } from '../navigation/routes';

type HomeDestinationCard = {
  id: string;
  image: string;
  departDate: Date;
  returnDate: Date;
  stops: number;
  duration: Date;
  price: number;
  name: string;
};

type CabinClass = {
  name: 'Economy' | 'Business' | 'First';
  value: 'economy' | 'business' | 'first';
};

type SearchParams = {
  originSkyId: string;
  destinationSkyId: string;
  originEntityId: string;
  destinationEntityId: string;
  date: string;
  cabinClass: string;
  adults: string;
  sortBy: string;
  currency: string;
  market: string;
  countryCode: string;
};

type SearchAirportResult = {
  skyId: 'ABV';
  entityId: '128668198';
  presentation: {
    title: 'Abuja';
    suggestionTitle: 'Abuja (ABV)';
    subtitle: 'Nigeria';
  };
  navigation: {
    entityId: '128668198';
    entityType: 'AIRPORT';
    localizedName: 'Abuja';
    relevantFlightParams: {
      skyId: 'ABV';
      entityId: '128668198';
      flightPlaceType: 'AIRPORT';
      localizedName: 'Abuja';
    };
    relevantHotelParams: {
      entityId: '39833717';
      entityType: 'CITY';
      localizedName: 'Abuja';
    };
  };
};

type PriceCalenderResults = {
  flights: {
    noPriceLabel: string;
    groups: {
      id: string;
      label: string;
    }[];
    days: {
      day: string;
      group: string;
      price: number;
    }[];
  };
};

type SearchFlightsParams = {
  originSkyId: string;
  destinationSkyId: string;
  originEntityId: string;
  destinationEntityId: string;
  date: string;
  cabinClass: 'economy' | 'business' | 'first';
  adults: `${number}`;
  sortBy: 'best';
  currency: 'USD';
  market: 'en-US';
  countryCode: 'US';
  origin: SearchAirportResult;
  destination: SearchAirportResult;
  departDate: Date;
  returnDate: Date;
};

type ScreenRouteParamList = {
  [screens.flights]: {
    search: SearchFlightsParams;
    origin: SearchAirportResult;
    destination: SearchAirportResult;
    departDate: string;
    returnDate: string;
  };
  [screens.bookFlight]: {
    departFlight: FlightItineraryProp;
    returnFlight: FlightItineraryProp;
    departDate: string;
    returnDate: string;
  };
  [screens.home]: undefined;
  [screens.returnFlights]: {
    departFlight: FlightItineraryProp;
    origin: SearchAirportResult;
    destination: SearchAirportResult;
    departDate: string;
    returnDate: string;
  };
};

// ================= to work on later

type FlightItineraryProp = {
  isExpanded?: boolean;
  id: '13416-2507122047--32289-0-12712-2507130530';
  price: {
    raw: 308.98;
    formatted: '$309';
    pricingOptionId: '8DHteU2WRzth';
  };
  legs: [
    {
      id: '13416-2507122047--32289-0-12712-2507130530';
      origin: {
        id: 'LAX';
        entityId: '95673368';
        name: 'Los Angeles International';
        displayCode: 'LAX';
        city: 'Los Angeles';
        country: 'United States';
        isHighlighted: false;
      };
      destination: {
        id: 'JFK';
        entityId: '95565058';
        name: 'New York John F. Kennedy';
        displayCode: 'JFK';
        city: 'New York';
        country: 'United States';
        isHighlighted: false;
      };
      durationInMinutes: 343;
      stopCount: 0;
      isSmallestStops: false;
      departure: '2025-07-12T20:47:00';
      arrival: '2025-07-13T05:30:00';
      timeDeltaInDays: 1;
      carriers: {
        marketing: [
          {
            id: -32289;
            alternateId: 'F9';
            logoUrl: 'https://logos.skyscnr.com/images/airlines/favicon/F9.png';
            name: 'Frontier Airlines';
          },
        ];
        operationType: 'fully_operated';
      };
      segments: [
        {
          id: '13416-12712-2507122047-2507130530--32289';
          origin: {
            flightPlaceId: 'LAX';
            displayCode: 'LAX';
            parent: {
              flightPlaceId: 'LAXA';
              displayCode: 'LAX';
              name: 'Los Angeles';
              type: 'City';
            };
            name: 'Los Angeles International';
            type: 'Airport';
            country: 'United States';
          };
          destination: {
            flightPlaceId: 'JFK';
            displayCode: 'JFK';
            parent: {
              flightPlaceId: 'NYCA';
              displayCode: 'NYC';
              name: 'New York';
              type: 'City';
            };
            name: 'New York John F. Kennedy';
            type: 'Airport';
            country: 'United States';
          };
          departure: '2025-07-12T20:47:00';
          arrival: '2025-07-13T05:30:00';
          durationInMinutes: 343;
          flightNumber: '2504';
          marketingCarrier: {
            id: -32289;
            name: 'Frontier Airlines';
            alternateId: 'F9';
            allianceId: 0;
            displayCode: 'F9';
          };
          operatingCarrier: {
            id: -32289;
            name: 'Frontier Airlines';
            alternateId: 'F9';
            allianceId: 0;
            displayCode: 'F9';
          };
          transportMode: 'TRANSPORT_MODE_FLIGHT';
        },
      ];
    },
  ];
  isSelfTransfer: false;
  isProtectedSelfTransfer: false;
  farePolicy: {
    isChangeAllowed: false;
    isPartiallyChangeable: false;
    isCancellationAllowed: false;
    isPartiallyRefundable: false;
  };
  eco: {
    ecoContenderDelta: 29.683214;
  };
  fareAttributes: {};
  tags: ['second_cheapest'];
  isMashUp: false;
  hasFlexibleOptions: false;
  score: 0.999;
};

type FlightsResults = {
  context: {
    status: 'incomplete';
    sessionId: 'KLUv_WAwAC0HACbRNCPApwPQ_--du3pL1SqTlKU38WyqTEmmlCSn1nZqdFsrPUSJCCoALAApAMkcN5knmA1h2sbKISjMe6r6_6z4sGyNXUb1TcVQ5XrPku46KIEUDWBZoEx78TVtt8uf2O7c-t232Ldlp-4LyEHZKItCgMGaQCSPCANTt9N_-N7Kxr4Fm8zaqco9T3tSjWBhAMPfrc-94a9kZ5et9eb7BNN5I_u3gw5Im8DSSAkJhGJ4Z2pXc-vVp1PvciPbZHedaT224EuMRsNxaJT3an3x8ccyNXe52gIEAJxDPa5Bwxs2XOBMSQE=';
    totalResults: 10;
  };
  itineraries: [
    {
      id: '13416-2507122047--32289-0-12712-2507130530';
      price: {
        raw: 308.98;
        formatted: '$309';
        pricingOptionId: '8DHteU2WRzth';
      };
      legs: [
        {
          id: '13416-2507122047--32289-0-12712-2507130530';
          origin: {
            id: 'LAX';
            entityId: '95673368';
            name: 'Los Angeles International';
            displayCode: 'LAX';
            city: 'Los Angeles';
            country: 'United States';
            isHighlighted: false;
          };
          destination: {
            id: 'JFK';
            entityId: '95565058';
            name: 'New York John F. Kennedy';
            displayCode: 'JFK';
            city: 'New York';
            country: 'United States';
            isHighlighted: false;
          };
          durationInMinutes: 343;
          stopCount: 0;
          isSmallestStops: false;
          departure: '2025-07-12T20:47:00';
          arrival: '2025-07-13T05:30:00';
          timeDeltaInDays: 1;
          carriers: {
            marketing: [
              {
                id: -32289;
                alternateId: 'F9';
                logoUrl: 'https://logos.skyscnr.com/images/airlines/favicon/F9.png';
                name: 'Frontier Airlines';
              },
            ];
            operationType: 'fully_operated';
          };
          segments: [
            {
              id: '13416-12712-2507122047-2507130530--32289';
              origin: {
                flightPlaceId: 'LAX';
                displayCode: 'LAX';
                parent: {
                  flightPlaceId: 'LAXA';
                  displayCode: 'LAX';
                  name: 'Los Angeles';
                  type: 'City';
                };
                name: 'Los Angeles International';
                type: 'Airport';
                country: 'United States';
              };
              destination: {
                flightPlaceId: 'JFK';
                displayCode: 'JFK';
                parent: {
                  flightPlaceId: 'NYCA';
                  displayCode: 'NYC';
                  name: 'New York';
                  type: 'City';
                };
                name: 'New York John F. Kennedy';
                type: 'Airport';
                country: 'United States';
              };
              departure: '2025-07-12T20:47:00';
              arrival: '2025-07-13T05:30:00';
              durationInMinutes: 343;
              flightNumber: '2504';
              marketingCarrier: {
                id: -32289;
                name: 'Frontier Airlines';
                alternateId: 'F9';
                allianceId: 0;
                displayCode: 'F9';
              };
              operatingCarrier: {
                id: -32289;
                name: 'Frontier Airlines';
                alternateId: 'F9';
                allianceId: 0;
                displayCode: 'F9';
              };
              transportMode: 'TRANSPORT_MODE_FLIGHT';
            },
          ];
        },
      ];
      isSelfTransfer: false;
      isProtectedSelfTransfer: false;
      farePolicy: {
        isChangeAllowed: false;
        isPartiallyChangeable: false;
        isCancellationAllowed: false;
        isPartiallyRefundable: false;
      };
      eco: {
        ecoContenderDelta: 29.683214;
      };
      fareAttributes: {};
      tags: ['second_cheapest'];
      isMashUp: false;
      hasFlexibleOptions: false;
      score: 0.999;
    },
    {
      id: '13416-2507121135--32385-0-12712-2507122029';
      price: {
        raw: 419.48;
        formatted: '$420';
        pricingOptionId: '0BwBU9-ewqIj';
      };
      legs: [
        {
          id: '13416-2507121135--32385-0-12712-2507122029';
          origin: {
            id: 'LAX';
            entityId: '95673368';
            name: 'Los Angeles International';
            displayCode: 'LAX';
            city: 'Los Angeles';
            country: 'United States';
            isHighlighted: false;
          };
          destination: {
            id: 'JFK';
            entityId: '95565058';
            name: 'New York John F. Kennedy';
            displayCode: 'JFK';
            city: 'New York';
            country: 'United States';
            isHighlighted: false;
          };
          durationInMinutes: 354;
          stopCount: 0;
          isSmallestStops: false;
          departure: '2025-07-12T11:35:00';
          arrival: '2025-07-12T20:29:00';
          timeDeltaInDays: 0;
          carriers: {
            marketing: [
              {
                id: -32385;
                alternateId: 'DL';
                logoUrl: 'https://logos.skyscnr.com/images/airlines/favicon/DL.png';
                name: 'Delta';
              },
            ];
            operationType: 'fully_operated';
          };
          segments: [
            {
              id: '13416-12712-2507121135-2507122029--32385';
              origin: {
                flightPlaceId: 'LAX';
                displayCode: 'LAX';
                parent: {
                  flightPlaceId: 'LAXA';
                  displayCode: 'LAX';
                  name: 'Los Angeles';
                  type: 'City';
                };
                name: 'Los Angeles International';
                type: 'Airport';
                country: 'United States';
              };
              destination: {
                flightPlaceId: 'JFK';
                displayCode: 'JFK';
                parent: {
                  flightPlaceId: 'NYCA';
                  displayCode: 'NYC';
                  name: 'New York';
                  type: 'City';
                };
                name: 'New York John F. Kennedy';
                type: 'Airport';
                country: 'United States';
              };
              departure: '2025-07-12T11:35:00';
              arrival: '2025-07-12T20:29:00';
              durationInMinutes: 354;
              flightNumber: '951';
              marketingCarrier: {
                id: -32385;
                name: 'Delta';
                alternateId: 'DL';
                allianceId: -31998;
                displayCode: 'DL';
              };
              operatingCarrier: {
                id: -32385;
                name: 'Delta';
                alternateId: 'DL';
                allianceId: -31998;
                displayCode: 'DL';
              };
              transportMode: 'TRANSPORT_MODE_FLIGHT';
            },
          ];
        },
      ];
      isSelfTransfer: false;
      isProtectedSelfTransfer: false;
      farePolicy: {
        isChangeAllowed: false;
        isPartiallyChangeable: false;
        isCancellationAllowed: false;
        isPartiallyRefundable: false;
      };
      eco: {
        ecoContenderDelta: 38.81944;
      };
      fareAttributes: {};
      isMashUp: false;
      hasFlexibleOptions: false;
      score: 0.851592;
    },
    {
      id: '13416-2507121548--32289-1-12712-2507130530';
      price: {
        raw: 202.2;
        formatted: '$203';
        pricingOptionId: 'T0yyrA1Jk9ke';
      };
      legs: [
        {
          id: '13416-2507121548--32289-1-12712-2507130530';
          origin: {
            id: 'LAX';
            entityId: '95673368';
            name: 'Los Angeles International';
            displayCode: 'LAX';
            city: 'Los Angeles';
            country: 'United States';
            isHighlighted: false;
          };
          destination: {
            id: 'JFK';
            entityId: '95565058';
            name: 'New York John F. Kennedy';
            displayCode: 'JFK';
            city: 'New York';
            country: 'United States';
            isHighlighted: false;
          };
          durationInMinutes: 642;
          stopCount: 1;
          isSmallestStops: false;
          departure: '2025-07-12T15:48:00';
          arrival: '2025-07-13T05:30:00';
          timeDeltaInDays: 1;
          carriers: {
            marketing: [
              {
                id: -32289;
                alternateId: 'F9';
                logoUrl: 'https://logos.skyscnr.com/images/airlines/favicon/F9.png';
                name: 'Frontier Airlines';
              },
            ];
            operationType: 'fully_operated';
          };
          segments: [
            {
              id: '13416-13411-2507121548-2507121712--32289';
              origin: {
                flightPlaceId: 'LAX';
                displayCode: 'LAX';
                parent: {
                  flightPlaceId: 'LAXA';
                  displayCode: 'LAX';
                  name: 'Los Angeles';
                  type: 'City';
                };
                name: 'Los Angeles International';
                type: 'Airport';
                country: 'United States';
              };
              destination: {
                flightPlaceId: 'LAS';
                displayCode: 'LAS';
                parent: {
                  flightPlaceId: 'LASA';
                  displayCode: 'LAS';
                  name: 'Las Vegas';
                  type: 'City';
                };
                name: 'Las Vegas Harry Reid International';
                type: 'Airport';
                country: 'United States';
              };
              departure: '2025-07-12T15:48:00';
              arrival: '2025-07-12T17:12:00';
              durationInMinutes: 84;
              flightNumber: '3292';
              marketingCarrier: {
                id: -32289;
                name: 'Frontier Airlines';
                alternateId: 'F9';
                allianceId: 0;
                displayCode: 'F9';
              };
              operatingCarrier: {
                id: -32289;
                name: 'Frontier Airlines';
                alternateId: 'F9';
                allianceId: 0;
                displayCode: 'F9';
              };
              transportMode: 'TRANSPORT_MODE_FLIGHT';
            },
            {
              id: '13411-12712-2507122117-2507130530--32289';
              origin: {
                flightPlaceId: 'LAS';
                displayCode: 'LAS';
                parent: {
                  flightPlaceId: 'LASA';
                  displayCode: 'LAS';
                  name: 'Las Vegas';
                  type: 'City';
                };
                name: 'Las Vegas Harry Reid International';
                type: 'Airport';
                country: 'United States';
              };
              destination: {
                flightPlaceId: 'JFK';
                displayCode: 'JFK';
                parent: {
                  flightPlaceId: 'NYCA';
                  displayCode: 'NYC';
                  name: 'New York';
                  type: 'City';
                };
                name: 'New York John F. Kennedy';
                type: 'Airport';
                country: 'United States';
              };
              departure: '2025-07-12T21:17:00';
              arrival: '2025-07-13T05:30:00';
              durationInMinutes: 313;
              flightNumber: '3238';
              marketingCarrier: {
                id: -32289;
                name: 'Frontier Airlines';
                alternateId: 'F9';
                allianceId: 0;
                displayCode: 'F9';
              };
              operatingCarrier: {
                id: -32289;
                name: 'Frontier Airlines';
                alternateId: 'F9';
                allianceId: 0;
                displayCode: 'F9';
              };
              transportMode: 'TRANSPORT_MODE_FLIGHT';
            },
          ];
        },
      ];
      isSelfTransfer: false;
      isProtectedSelfTransfer: false;
      farePolicy: {
        isChangeAllowed: false;
        isPartiallyChangeable: false;
        isCancellationAllowed: false;
        isPartiallyRefundable: false;
      };
      eco: {
        ecoContenderDelta: 23.548042;
      };
      fareAttributes: {};
      tags: ['cheapest'];
      isMashUp: false;
      hasFlexibleOptions: false;
      score: 0.789635;
    },
    {
      id: '13416-2507120540--31825-0-11442-2507121358';
      price: {
        raw: 324.99;
        formatted: '$325';
        pricingOptionId: 'CJKtrwMKMQJj';
      };
      legs: [
        {
          id: '13416-2507120540--31825-0-11442-2507121358';
          origin: {
            id: 'LAX';
            entityId: '95673368';
            name: 'Los Angeles International';
            displayCode: 'LAX';
            city: 'Los Angeles';
            country: 'United States';
            isHighlighted: false;
          };
          destination: {
            id: 'EWR';
            entityId: '95565059';
            name: 'New York Newark';
            displayCode: 'EWR';
            city: 'New York';
            country: 'United States';
            isHighlighted: false;
          };
          durationInMinutes: 318;
          stopCount: 0;
          isSmallestStops: false;
          departure: '2025-07-12T05:40:00';
          arrival: '2025-07-12T13:58:00';
          timeDeltaInDays: 0;
          carriers: {
            marketing: [
              {
                id: -31825;
                alternateId: 'NK';
                logoUrl: 'https://logos.skyscnr.com/images/airlines/favicon/NK.png';
                name: 'Spirit Airlines';
              },
            ];
            operationType: 'fully_operated';
          };
          segments: [
            {
              id: '13416-11442-2507120540-2507121358--31825';
              origin: {
                flightPlaceId: 'LAX';
                displayCode: 'LAX';
                parent: {
                  flightPlaceId: 'LAXA';
                  displayCode: 'LAX';
                  name: 'Los Angeles';
                  type: 'City';
                };
                name: 'Los Angeles International';
                type: 'Airport';
                country: 'United States';
              };
              destination: {
                flightPlaceId: 'EWR';
                displayCode: 'EWR';
                parent: {
                  flightPlaceId: 'NYCA';
                  displayCode: 'NYC';
                  name: 'New York';
                  type: 'City';
                };
                name: 'New York Newark';
                type: 'Airport';
                country: 'United States';
              };
              departure: '2025-07-12T05:40:00';
              arrival: '2025-07-12T13:58:00';
              durationInMinutes: 318;
              flightNumber: '1039';
              marketingCarrier: {
                id: -31825;
                name: 'Spirit Airlines';
                alternateId: 'NK';
                allianceId: 0;
                displayCode: 'NK';
              };
              operatingCarrier: {
                id: -31825;
                name: 'Spirit Airlines';
                alternateId: 'NK';
                allianceId: 0;
                displayCode: 'NK';
              };
              transportMode: 'TRANSPORT_MODE_FLIGHT';
            },
          ];
        },
      ];
      isSelfTransfer: false;
      isProtectedSelfTransfer: false;
      farePolicy: {
        isChangeAllowed: false;
        isPartiallyChangeable: false;
        isCancellationAllowed: false;
        isPartiallyRefundable: false;
      };
      fareAttributes: {};
      tags: ['third_cheapest', 'shortest'];
      isMashUp: false;
      hasFlexibleOptions: false;
      score: 0.730919;
    },
    {
      id: '13416-2507122355--32385-0-12712-2507130829';
      price: {
        raw: 419.48;
        formatted: '$420';
        pricingOptionId: 'Xcls4sUc9IGM';
      };
      legs: [
        {
          id: '13416-2507122355--32385-0-12712-2507130829';
          origin: {
            id: 'LAX';
            entityId: '95673368';
            name: 'Los Angeles International';
            displayCode: 'LAX';
            city: 'Los Angeles';
            country: 'United States';
            isHighlighted: false;
          };
          destination: {
            id: 'JFK';
            entityId: '95565058';
            name: 'New York John F. Kennedy';
            displayCode: 'JFK';
            city: 'New York';
            country: 'United States';
            isHighlighted: false;
          };
          durationInMinutes: 334;
          stopCount: 0;
          isSmallestStops: false;
          departure: '2025-07-12T23:55:00';
          arrival: '2025-07-13T08:29:00';
          timeDeltaInDays: 1;
          carriers: {
            marketing: [
              {
                id: -32385;
                alternateId: 'DL';
                logoUrl: 'https://logos.skyscnr.com/images/airlines/favicon/DL.png';
                name: 'Delta';
              },
            ];
            operationType: 'fully_operated';
          };
          segments: [
            {
              id: '13416-12712-2507122355-2507130829--32385';
              origin: {
                flightPlaceId: 'LAX';
                displayCode: 'LAX';
                parent: {
                  flightPlaceId: 'LAXA';
                  displayCode: 'LAX';
                  name: 'Los Angeles';
                  type: 'City';
                };
                name: 'Los Angeles International';
                type: 'Airport';
                country: 'United States';
              };
              destination: {
                flightPlaceId: 'JFK';
                displayCode: 'JFK';
                parent: {
                  flightPlaceId: 'NYCA';
                  displayCode: 'NYC';
                  name: 'New York';
                  type: 'City';
                };
                name: 'New York John F. Kennedy';
                type: 'Airport';
                country: 'United States';
              };
              departure: '2025-07-12T23:55:00';
              arrival: '2025-07-13T08:29:00';
              durationInMinutes: 334;
              flightNumber: '915';
              marketingCarrier: {
                id: -32385;
                name: 'Delta';
                alternateId: 'DL';
                allianceId: -31998;
                displayCode: 'DL';
              };
              operatingCarrier: {
                id: -32385;
                name: 'Delta';
                alternateId: 'DL';
                allianceId: -31998;
                displayCode: 'DL';
              };
              transportMode: 'TRANSPORT_MODE_FLIGHT';
            },
          ];
        },
      ];
      isSelfTransfer: false;
      isProtectedSelfTransfer: false;
      farePolicy: {
        isChangeAllowed: false;
        isPartiallyChangeable: false;
        isCancellationAllowed: false;
        isPartiallyRefundable: false;
      };
      eco: {
        ecoContenderDelta: 35.33995;
      };
      fareAttributes: {};
      tags: ['third_shortest'];
      isMashUp: false;
      hasFlexibleOptions: false;
      score: 0.616512;
    },
    {
      id: '13416-2507122354--32093-0-12712-2507130831';
      price: {
        raw: 435.37;
        formatted: '$436';
        pricingOptionId: 'aoJe11RUdXT0';
      };
      legs: [
        {
          id: '13416-2507122354--32093-0-12712-2507130831';
          origin: {
            id: 'LAX';
            entityId: '95673368';
            name: 'Los Angeles International';
            displayCode: 'LAX';
            city: 'Los Angeles';
            country: 'United States';
            isHighlighted: false;
          };
          destination: {
            id: 'JFK';
            entityId: '95565058';
            name: 'New York John F. Kennedy';
            displayCode: 'JFK';
            city: 'New York';
            country: 'United States';
            isHighlighted: false;
          };
          durationInMinutes: 337;
          stopCount: 0;
          isSmallestStops: false;
          departure: '2025-07-12T23:54:00';
          arrival: '2025-07-13T08:31:00';
          timeDeltaInDays: 1;
          carriers: {
            marketing: [
              {
                id: -32093;
                alternateId: 'LO';
                logoUrl: 'https://logos.skyscnr.com/images/airlines/favicon/LO.png';
                name: 'LOT';
              },
            ];
            operating: [
              {
                id: -32171;
                alternateId: 'B6';
                logoUrl: 'https://logos.skyscnr.com/images/airlines/favicon/B6.png';
                name: 'jetBlue';
              },
            ];
            operationType: 'not_operated';
          };
          segments: [
            {
              id: '13416-12712-2507122354-2507130831--32093';
              origin: {
                flightPlaceId: 'LAX';
                displayCode: 'LAX';
                parent: {
                  flightPlaceId: 'LAXA';
                  displayCode: 'LAX';
                  name: 'Los Angeles';
                  type: 'City';
                };
                name: 'Los Angeles International';
                type: 'Airport';
                country: 'United States';
              };
              destination: {
                flightPlaceId: 'JFK';
                displayCode: 'JFK';
                parent: {
                  flightPlaceId: 'NYCA';
                  displayCode: 'NYC';
                  name: 'New York';
                  type: 'City';
                };
                name: 'New York John F. Kennedy';
                type: 'Airport';
                country: 'United States';
              };
              departure: '2025-07-12T23:54:00';
              arrival: '2025-07-13T08:31:00';
              durationInMinutes: 337;
              flightNumber: '5762';
              marketingCarrier: {
                id: -32093;
                name: 'LOT';
                alternateId: 'LO';
                allianceId: -31999;
                displayCode: 'LO';
              };
              operatingCarrier: {
                id: -32171;
                name: 'jetBlue';
                alternateId: 'B6';
                allianceId: 0;
                displayCode: 'B6';
              };
              transportMode: 'TRANSPORT_MODE_FLIGHT';
            },
          ];
        },
      ];
      isSelfTransfer: false;
      isProtectedSelfTransfer: false;
      farePolicy: {
        isChangeAllowed: false;
        isPartiallyChangeable: false;
        isCancellationAllowed: false;
        isPartiallyRefundable: false;
      };
      fareAttributes: {};
      isMashUp: false;
      hasFlexibleOptions: false;
      score: 0.602975;
    },
    {
      id: '13416-2507120600--32385-0-12712-2507121440';
      price: {
        raw: 419.48;
        formatted: '$420';
        pricingOptionId: 'Lvp22GPzvFgj';
      };
      legs: [
        {
          id: '13416-2507120600--32385-0-12712-2507121440';
          origin: {
            id: 'LAX';
            entityId: '95673368';
            name: 'Los Angeles International';
            displayCode: 'LAX';
            city: 'Los Angeles';
            country: 'United States';
            isHighlighted: false;
          };
          destination: {
            id: 'JFK';
            entityId: '95565058';
            name: 'New York John F. Kennedy';
            displayCode: 'JFK';
            city: 'New York';
            country: 'United States';
            isHighlighted: false;
          };
          durationInMinutes: 340;
          stopCount: 0;
          isSmallestStops: false;
          departure: '2025-07-12T06:00:00';
          arrival: '2025-07-12T14:40:00';
          timeDeltaInDays: 0;
          carriers: {
            marketing: [
              {
                id: -32385;
                alternateId: 'DL';
                logoUrl: 'https://logos.skyscnr.com/images/airlines/favicon/DL.png';
                name: 'Delta';
              },
            ];
            operationType: 'fully_operated';
          };
          segments: [
            {
              id: '13416-12712-2507120600-2507121440--32385';
              origin: {
                flightPlaceId: 'LAX';
                displayCode: 'LAX';
                parent: {
                  flightPlaceId: 'LAXA';
                  displayCode: 'LAX';
                  name: 'Los Angeles';
                  type: 'City';
                };
                name: 'Los Angeles International';
                type: 'Airport';
                country: 'United States';
              };
              destination: {
                flightPlaceId: 'JFK';
                displayCode: 'JFK';
                parent: {
                  flightPlaceId: 'NYCA';
                  displayCode: 'NYC';
                  name: 'New York';
                  type: 'City';
                };
                name: 'New York John F. Kennedy';
                type: 'Airport';
                country: 'United States';
              };
              departure: '2025-07-12T06:00:00';
              arrival: '2025-07-12T14:40:00';
              durationInMinutes: 340;
              flightNumber: '934';
              marketingCarrier: {
                id: -32385;
                name: 'Delta';
                alternateId: 'DL';
                allianceId: -31998;
                displayCode: 'DL';
              };
              operatingCarrier: {
                id: -32385;
                name: 'Delta';
                alternateId: 'DL';
                allianceId: -31998;
                displayCode: 'DL';
              };
              transportMode: 'TRANSPORT_MODE_FLIGHT';
            },
          ];
        },
      ];
      isSelfTransfer: false;
      isProtectedSelfTransfer: false;
      farePolicy: {
        isChangeAllowed: false;
        isPartiallyChangeable: false;
        isCancellationAllowed: false;
        isPartiallyRefundable: false;
      };
      eco: {
        ecoContenderDelta: 38.81944;
      };
      fareAttributes: {};
      isMashUp: false;
      hasFlexibleOptions: false;
      score: 0.602753;
    },
    {
      id: '13416-2507120700--32385-0-12712-2507121549';
      price: {
        raw: 419.48;
        formatted: '$420';
        pricingOptionId: 'RM6Pr1kR31CR';
      };
      legs: [
        {
          id: '13416-2507120700--32385-0-12712-2507121549';
          origin: {
            id: 'LAX';
            entityId: '95673368';
            name: 'Los Angeles International';
            displayCode: 'LAX';
            city: 'Los Angeles';
            country: 'United States';
            isHighlighted: false;
          };
          destination: {
            id: 'JFK';
            entityId: '95565058';
            name: 'New York John F. Kennedy';
            displayCode: 'JFK';
            city: 'New York';
            country: 'United States';
            isHighlighted: false;
          };
          durationInMinutes: 349;
          stopCount: 0;
          isSmallestStops: false;
          departure: '2025-07-12T07:00:00';
          arrival: '2025-07-12T15:49:00';
          timeDeltaInDays: 0;
          carriers: {
            marketing: [
              {
                id: -32385;
                alternateId: 'DL';
                logoUrl: 'https://logos.skyscnr.com/images/airlines/favicon/DL.png';
                name: 'Delta';
              },
            ];
            operationType: 'fully_operated';
          };
          segments: [
            {
              id: '13416-12712-2507120700-2507121549--32385';
              origin: {
                flightPlaceId: 'LAX';
                displayCode: 'LAX';
                parent: {
                  flightPlaceId: 'LAXA';
                  displayCode: 'LAX';
                  name: 'Los Angeles';
                  type: 'City';
                };
                name: 'Los Angeles International';
                type: 'Airport';
                country: 'United States';
              };
              destination: {
                flightPlaceId: 'JFK';
                displayCode: 'JFK';
                parent: {
                  flightPlaceId: 'NYCA';
                  displayCode: 'NYC';
                  name: 'New York';
                  type: 'City';
                };
                name: 'New York John F. Kennedy';
                type: 'Airport';
                country: 'United States';
              };
              departure: '2025-07-12T07:00:00';
              arrival: '2025-07-12T15:49:00';
              durationInMinutes: 349;
              flightNumber: '979';
              marketingCarrier: {
                id: -32385;
                name: 'Delta';
                alternateId: 'DL';
                allianceId: -31998;
                displayCode: 'DL';
              };
              operatingCarrier: {
                id: -32385;
                name: 'Delta';
                alternateId: 'DL';
                allianceId: -31998;
                displayCode: 'DL';
              };
              transportMode: 'TRANSPORT_MODE_FLIGHT';
            },
          ];
        },
      ];
      isSelfTransfer: false;
      isProtectedSelfTransfer: false;
      farePolicy: {
        isChangeAllowed: false;
        isPartiallyChangeable: false;
        isCancellationAllowed: false;
        isPartiallyRefundable: false;
      };
      eco: {
        ecoContenderDelta: 38.81944;
      };
      fareAttributes: {};
      isMashUp: false;
      hasFlexibleOptions: false;
      score: 0.598788;
    },
  ];
  messages: [];
  filterStats: {
    duration: {
      min: 318;
      max: 642;
      multiCityMin: 318;
      multiCityMax: 642;
    };
    total: 10;
    hasCityOpenJaw: false;
    multipleCarriers: {
      minPrice: '';
      rawMinPrice: null;
    };
    airports: [
      {
        city: 'Los Angeles';
        airports: [
          {
            id: 'LAX';
            entityId: '95673368';
            name: 'Los Angeles International';
          },
        ];
      },
      {
        city: 'New York';
        airports: [
          {
            id: 'JFK';
            entityId: '95565058';
            name: 'New York John F. Kennedy';
          },
          {
            id: 'EWR';
            entityId: '95565059';
            name: 'New York Newark';
          },
        ];
      },
    ];
    carriers: [
      {
        id: -32385;
        alternateId: 'DL';
        logoUrl: 'https://logos.skyscnr.com/images/airlines/favicon/DL.png';
        name: 'Delta';
        minPrice: '$420';
        allianceId: -31998;
      },
      {
        id: -32289;
        alternateId: 'F9';
        logoUrl: 'https://logos.skyscnr.com/images/airlines/favicon/F9.png';
        name: 'Frontier Airlines';
        minPrice: '$203';
        allianceId: 0;
      },
      {
        id: -32093;
        alternateId: 'LO';
        logoUrl: 'https://logos.skyscnr.com/images/airlines/favicon/LO.png';
        name: 'LOT';
        minPrice: '$436';
        allianceId: -31999;
      },
      {
        id: -31825;
        alternateId: 'NK';
        logoUrl: 'https://logos.skyscnr.com/images/airlines/favicon/NK.png';
        name: 'Spirit Airlines';
        minPrice: '$325';
        allianceId: 0;
      },
    ];
    stopPrices: {
      direct: {
        isPresent: true;
        formattedPrice: '$309';
        rawPrice: 309;
      };
      one: {
        isPresent: true;
        formattedPrice: '$203';
        rawPrice: 203;
      };
      twoOrMore: {
        isPresent: false;
      };
    };
    alliances: [
      {
        id: -31999;
        name: 'Star Alliance';
      },
      {
        id: -31998;
        name: 'SkyTeam';
      },
    ];
  };
  flightsSessionId: '44306ec2-1d51-483f-a599-6bf2bee333cc';
  destinationImageUrl: 'https://content.skyscnr.com/m/3719e8f4a5daf43d/original/Flights-Placeholder.jpg';
};
