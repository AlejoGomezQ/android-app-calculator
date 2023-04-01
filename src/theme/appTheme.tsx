import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  calculatorContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    backgroundColor: '#000000',
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

  //About Screen
  aboutMeScreen: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  infoContainer: {
    justifyContent: 'center',
    paddingTop: 60,
  },
  aboutMeText: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 18,
  },
  boldText: {
    fontWeight: 'bold',
  },
});
