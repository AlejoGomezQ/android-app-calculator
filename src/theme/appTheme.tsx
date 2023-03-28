import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  bg: {
    flex: 1,
    backgroundColor: '#000000',
  },
  calculatorContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
  },
  resultMemory: {
    textAlign: 'right',
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: 30,
  },
  result: {
    textAlign: 'right',
    marginBottom: 10,
    color: '#ffffff',
    fontSize: 60,
  },
  btnRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    paddingHorizontal: 10,
  },
});
