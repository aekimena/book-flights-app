import { StyleSheet, Text, View } from 'react-native';
import React, { forwardRef, JSX } from 'react';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
} from '@gorhom/bottom-sheet';

const SheetContainer = forwardRef(
  (
    {
      index = -1,
      snapPoints,
      children,
    }: {
      index?: number;
      snapPoints: Array<number | `${number}%`>;
      children: JSX.Element;
    },

    ref,
  ) => {
    const BacdropComponent = props => {
      return (
        <BottomSheetBackdrop
          {...props}
          appearsOnIndex={0}
          disappearsOnIndex={-1}
        />
      );
    };
    return (
      <BottomSheet
        enableOverDrag={false}
        enablePanDownToClose={false}
        index={index}
        snapPoints={snapPoints}
        ref={ref}
        backdropComponent={BacdropComponent}
        enableDynamicSizing={false}
        backgroundStyle={{ borderRadius: 0 }}
      >
        <BottomSheetView style={{ flex: 1 }}>{children}</BottomSheetView>
      </BottomSheet>
    );
  },
);

export default SheetContainer;

const styles = StyleSheet.create({});
