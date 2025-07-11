import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { FlightItineraryProp } from '../../types';
import { colors } from '../../constants/colors';
import { commonStyles } from '../../constants/styles';
import { ChevronDown } from '../../../assets/icons';
import { LabelText } from '../common/LabelText';
import { Vspacer } from '../common/Vspacer';
import {
  formatMinutesToHoursAndMinutes,
  getFormattedTime,
} from '../../utils/helpers';

export const FlightCard = ({
  item,
  onPress,
  onPressSelect,
  isBooking = false,
}: {
  item: FlightItineraryProp;
  onPress: () => void;
  onPressSelect: () => void;
  isBooking?: boolean;
}) => {
  return (
    <Pressable style={{ paddingHorizontal: 20 }} onPress={onPress}>
      <View style={{ borderWidth: 1, borderColor: colors.border, padding: 15 }}>
        <View
          style={{
            ...commonStyles.flexRow,
            gap: 15,
            alignItems: 'flex-start',
          }}
        >
          <Image
            source={{ uri: item.legs[0].carriers.marketing[0].logoUrl }}
            style={{ height: 30, width: 30 }}
          />
          {!item?.isExpanded && (
            <View style={{ flex: 1 }}>
              <Text>
                {getFormattedTime(new Date(item.legs[0].departure))}{' '}
                <Text style={{ color: colors.textSecondary, fontSize: 12 }}>
                  ({item.legs[0].origin.displayCode})
                </Text>
                - {getFormattedTime(new Date(item.legs[0].arrival))}{' '}
                <Text style={{ color: colors.textSecondary, fontSize: 12 }}>
                  ({item.legs[0].destination.displayCode})
                </Text>
              </Text>
              <Text style={{ color: colors.success }}>
                USD {item.price.raw.toLocaleString()}
              </Text>
              <View style={{ ...commonStyles.flexRow, gap: 10 }}>
                <Text style={{ color: colors.textSecondary, fontSize: 12 }}>
                  round trip
                </Text>
                <Text style={{ color: colors.textSecondary, fontSize: 12 }}>
                  {item.legs[0].carriers.marketing[0].name}
                </Text>
              </View>
            </View>
          )}

          {item?.isExpanded && (
            <View style={{ flex: 1 }}>
              <View style={{ ...commonStyles.flexRow, gap: 15 }}>
                <View style={{ ...commonStyles.allCenter }}>
                  <View
                    style={{
                      height: 100,
                      width: 1,
                      backgroundColor: colors.border,
                    }}
                  />
                </View>
                <View style={{ gap: 10 }}>
                  <View>
                    <LabelText
                      text={getFormattedTime(new Date(item.legs[0].departure))}
                    />
                    <Text>
                      {item.legs[0].origin.name}{' '}
                      <Text>({item.legs[0].origin.displayCode})</Text>
                    </Text>
                  </View>
                  <LabelText
                    text={`Travel time: ${formatMinutesToHoursAndMinutes(
                      item.legs[0].durationInMinutes,
                    )}`}
                    style={{ color: colors.textSecondary, fontWeight: '400' }}
                  />
                  <View>
                    <LabelText
                      text={getFormattedTime(new Date(item.legs[0].arrival))}
                    />
                    <Text>
                      {item.legs[0].destination.name}{' '}
                      <Text>({item.legs[0].destination.displayCode})</Text>
                    </Text>
                  </View>
                </View>
              </View>
              <Vspacer size={10} />
              <Text style={{ color: colors.success }}>
                USD {item.price.raw.toLocaleString()}
              </Text>
              <Vspacer size={10} />
              <LabelText text={item.legs[0].carriers.marketing[0].name} />
              {!isBooking && (
                <>
                  <Vspacer size={10} />
                  <TouchableOpacity onPress={onPressSelect} style={styles.btn}>
                    <LabelText
                      text="Select flight"
                      style={{ color: colors.primary }}
                    />
                  </TouchableOpacity>
                </>
              )}
            </View>
          )}
          <ChevronDown height={20} width={20} color={colors.icon} />
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  btn: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: colors.border,
    ...commonStyles.allCenter,
  },
});
