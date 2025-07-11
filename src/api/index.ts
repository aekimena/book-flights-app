import axios from 'axios';
import {
  FlightItineraryProp,
  PriceCalenderResults,
  SearchAirportResult,
  SearchFlightsParams,
} from '../types';

const BASE_URL = 'https://sky-scrapper.p.rapidapi.com/api'; // to get from .evn instead
const API_KEY = ''; // to get from .evn instead
const API_HOST = ''; // to get from .evn instead

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'x-rapidapi-key': API_KEY,
    'x-rapidapi-host': API_HOST,
  },
});

export const searchAirports = async (params: {
  query: string;
}): Promise<SearchAirportResult[]> => {
  const { data } = await axiosInstance.get('/v1/flights/searchAirport', {
    params,
  });
  return data.data;
};
export const searchFlights = async (
  params: SearchFlightsParams,
): Promise<FlightItineraryProp[]> => {
  const { data } = await axiosInstance.get('/v2/flights/searchFlights', {
    params,
  });
  console.log('this is the data: ', data);
  return data?.data?.itineraries;
};
export const getPriceCalender = async (params: {
  originSkyId: string;
  destinationSkyId: string;
  fromDate: string;
  currency: 'USD';
}): Promise<PriceCalenderResults['flights']['days']> => {
  const { data } = await axiosInstance.get('/v1/flights/getPriceCalendar', {
    params,
  });
  console.log(data);

  return data?.data?.flights?.days; // to review later _ api limit reached
};
