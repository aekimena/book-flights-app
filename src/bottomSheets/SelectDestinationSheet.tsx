import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import React, { forwardRef, useEffect, useState } from 'react';
import SheetContainer from '../components/layouts/SheetContainer';
import { commonStyles } from '../constants/styles';
import { colors } from '../constants/colors';
import { CloseOutline, SearchOutine } from '../../assets/icons';
import { useQuery } from '@tanstack/react-query';
import { useDebounce } from 'use-debounce';
import { searchAirports } from '../api';
import { BottomSheetFlatList } from '@gorhom/bottom-sheet';

import { Vspacer } from '../components/common/Vspacer';
import { SearchAirportCard } from '../components/home/SearchAirportCard';
import { SearchAirportResult } from '../types';

export const SelectDestinationSheet = forwardRef(
  (
    { onSelectItem }: { onSelectItem: (item: SearchAirportResult) => void },
    ref,
  ) => {
    const [query, setQuery] = useState('');

    const [debounceTerm] = useDebounce(query, 2000);

    const { data, isLoading, isLoadingError } = useQuery({
      queryKey: ['airports', debounceTerm],
      queryFn: async () => searchAirports({ query: debounceTerm }),
      enabled: !!debounceTerm.trim(),
    });

    useEffect(() => {
      console.log(data);
    }, [data]);
    return (
      <SheetContainer snapPoints={['80%']} ref={ref}>
        <View>
          <View style={styles.container}>
            <View style={{ ...commonStyles.flexRow, gap: 15 }}>
              <SearchOutine height={20} width={20} color={colors.icon} />
              <View style={{ flex: 1 }}>
                <TextInput
                  placeholder="Where to?"
                  placeholderTextColor={colors.textSecondary}
                  style={{ height: 45, color: colors.textPrimary }}
                  onChangeText={setQuery}
                />
              </View>

              {!!query.trim() && (
                <TouchableOpacity onPress={() => setQuery('')}>
                  <CloseOutline height={20} width={20} color={colors.icon} />
                </TouchableOpacity>
              )}
            </View>
          </View>
          <Vspacer size={10} />
          <BottomSheetFlatList
            contentContainerStyle={{ paddingHorizontal: 20, gap: 20 }}
            data={data || []}
            keyExtractor={item => item.skyId}
            renderItem={({ item, index }) => (
              <SearchAirportCard item={item} onPress={onSelectItem} />
            )}
          />
        </View>
      </SheetContainer>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    borderBottomWidth: 0.5,
    borderColor: colors.border,
  },
});
