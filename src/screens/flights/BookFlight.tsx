import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import ScreenContainer from '../../components/layouts/ScreenContainer';
import { RouteProp } from '@react-navigation/native';
import { ScreenRouteParamList } from '../../types';
import { LeftTitleHeader } from '../../components/headers/LeftTitleHeader';
import { Vspacer } from '../../components/common/Vspacer';
import { commonStyles } from '../../constants/styles';
import { LabelText } from '../../components/common/LabelText';
import { FlightCard } from '../../components/flights/FlightCard';
import { colors } from '../../constants/colors';
import { OutlineButton } from '../../components/button/OutlineButton';
import { useFlightSelection } from '../../contexts/FlightContext';
import { formatDate } from '../../utils/helpers';

const BookFlight = ({
  route,
}: {
  route: RouteProp<ScreenRouteParamList, 'bookFlight'>;
}) => {
  const { returnFlight, departFlight, departureDate, returnDate } =
    useFlightSelection();

  const [isDepartExpanded, setDepartExpanded] = useState(false);
  const [isReturnExpanded, setReturnExpanded] = useState(false);
  return (
    <ScreenContainer>
      <View style={{ flex: 1 }}>
        <LeftTitleHeader title="Booking" />
        <ScrollView>
          <Vspacer />
          <View style={{ paddingHorizontal: 0 }}>
            <View style={{ gap: 15, paddingHorizontal: 20 }}>
              <LabelText
                style={{ fontSize: 20 }}
                text={`${departFlight?.legs[0].origin.city} - ${departFlight?.legs[0].destination.city}`}
              />
              <LabelText
                style={{ fontSize: 18 }}
                text={`USD ${departFlight?.price.raw}`}
              />
            </View>

            <Vspacer />

            <View style={{ ...commonStyles.flexRowBtw, paddingHorizontal: 20 }}>
              <LabelText text="Selected flights" style={{ fontSize: 16 }} />
            </View>
            <Vspacer size={10} />
            <View style={{ gap: 10 }}>
              <LabelText
                text={`Departing flight ${formatDate(departureDate)}`}
                style={{ fontWeight: '400', paddingHorizontal: 20 }}
              />
              <FlightCard
                item={{ ...departFlight, isExpanded: isDepartExpanded }}
                isBooking
                onPress={() => setDepartExpanded(!isDepartExpanded)}
              />
            </View>
            <Vspacer />
            <View style={{ gap: 10 }}>
              <LabelText
                text={`Returning flight ${formatDate(returnDate)}`}
                style={{ fontWeight: '400', paddingHorizontal: 20 }}
              />
              <FlightCard
                item={{ ...returnFlight, isExpanded: isReturnExpanded }}
                isBooking
                onPress={() => setReturnExpanded(!isReturnExpanded)}
              />
            </View>
            <Vspacer />
            <View style={{ paddingHorizontal: 20 }}>
              <LabelText text="Booking options" style={{ fontSize: 16 }} />
              <Vspacer size={10} />
              <View style={styles.book}>
                <View style={{ flex: 1 }}>
                  <LabelText text="Book with Air Peace, Mytrip" />
                  <LabelText
                    text="Separate ticketsThe 2 tickets in your itinerary must be booked individually"
                    style={{ fontWeight: '400', color: colors.textSecondary }}
                  />
                </View>
                <OutlineButton title="Continue" onPress={() => null} />
              </View>
            </View>
          </View>
          <Vspacer />
        </ScrollView>
      </View>
    </ScreenContainer>
  );
};

export default BookFlight;

const styles = StyleSheet.create({
  book: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 15,
    ...commonStyles.flexRow,
    gap: 10,
  },
});
