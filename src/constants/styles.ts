import { StyleSheet } from 'react-native';

const commonStyles = StyleSheet.create({
  flexRow: { flexDirection: 'row', alignItems: 'center' },
  flexRowBtw: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  flexRowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  allCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export { commonStyles };
