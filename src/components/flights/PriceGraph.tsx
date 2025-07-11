import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  ToastAndroid,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { SearchAirportResult } from '../../types';
import { BarChart } from 'react-native-gifted-charts';
import { commonStyles } from '../../constants/styles';
import { ChartOutline, ChevronDown } from '../../../assets/icons';
import { colors } from '../../constants/colors';
import { LabelText } from '../common/LabelText';
import { Vspacer } from '../common/Vspacer';
import { useMutation, useQuery } from '@tanstack/react-query';
import { getPriceCalender } from '../../api';
import { getMonthYearDate } from '../../utils/helpers';

export const PriceGraph = ({
  origin,
  destination,
  date,
  onPressBar,
}: {
  origin: SearchAirportResult;
  destination: SearchAirportResult;
  date: Date;
  onPressBar?: (i: any) => void;
}) => {
  const [data, setData] = useState<{ day: string; price: number }[]>([]);

  const { mutateAsync, isPending, isError } = useMutation({
    mutationFn: async () =>
      getPriceCalender({
        originSkyId: origin?.skyId,
        destinationSkyId: destination?.skyId,
        fromDate: getMonthYearDate(new Date(date)),
        currency: 'USD',
      }),
    onError(error, variables, context) {
      console.error(error.message);
      console.log(error);

      ToastAndroid.show('Something went wrong', ToastAndroid.BOTTOM);
    },
    onSuccess(data, variables, context) {
      console.log(data);
      setData(data); // still needs more review. api key limit reached.
    },
  });

  const barData = data.slice(0, 10).map(i => ({
    value: i.price,
    label: i.day,
    onpress: () => onPressBar(i),
  }));

  const onPressShow = () => {
    if (!!origin || !!destination || !!date) {
      if (!data.length) {
        mutateAsync();
      }
    }
  };

  return (
    <View style={{ paddingHorizontal: 20 }}>
      <Pressable
        style={styles.priceBtn}
        onPress={() => {
          onPressShow();
        }}
      >
        {isPending ? (
          <ActivityIndicator size={30} color={colors.primary} />
        ) : (
          <>
            <ChartOutline height={20} width={20} color={colors.primary} />
            <LabelText
              text="Price graph"
              style={{ fontSize: 16, fontWeight: '500', color: colors.primary }}
            />
            <ChevronDown height={15} width={15} color={colors.icon} />
          </>
        )}
      </Pressable>
      {barData.length > 0 && (
        <>
          <Vspacer size={10} />
          <View
            style={{
              width: '100%',
              paddingVertical: 15,
            }}
          >
            <BarChart
              data={barData}
              frontColor={colors.primary}
              noOfSections={4}
              yAxisLabelPrefix="$"
              rotateLabel
              xAxisThickness={0}
              yAxisThickness={0}
              barBorderRadius={10}
              barWidth={20}
              height={250}
              hideRules={false}
            />
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  priceBtn: {
    alignSelf: 'flex-end',
    ...commonStyles.flexRow,
    gap: 5,
    width: 150,
    ...commonStyles.allCenter,
    paddingVertical: 7,
    borderRadius: 50,
    borderColor: colors.border,
    borderWidth: 1,
  },
});
