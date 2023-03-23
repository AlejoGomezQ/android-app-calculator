import {Text, View} from 'react-native';
import {styles} from '../theme/appTheme';

export const CalculatorScreen = () => {
  return (
    <>
      <View style={styles.calculatorContainer}>
        <Text style={styles.resultMemory}>1,500.00</Text>
        <Text style={styles.result}>1,500.00</Text>

        <View>
          <View style={styles.btn}>
            <Text style={styles.textBtn}>1</Text>
          </View>
        </View>
      </View>
    </>
  );
};
