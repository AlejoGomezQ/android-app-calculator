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
    color: '#ffffff',
    fontSize: 60,
  },
  btn: {
    justifyContent: 'center',
    height: 80,
    width: 80,
    borderRadius: 100,
    backgroundColor: '#9b9b9b',
  },
  textBtn: {
    textAlign: 'center',
    padding: 10,
    color: '#000000',
    fontSize: 30,
    fontWeight: '400',
  },
});
