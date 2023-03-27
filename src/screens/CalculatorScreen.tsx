import {Text, View} from 'react-native';
import {CalculatorBtn} from '../components/CalculatorBtn';
import {styles} from '../theme/appTheme';

export const CalculatorScreen = () => {
  return (
    <>
      <View style={styles.calculatorContainer}>
        <Text style={styles.resultMemory}>1,500.00</Text>
        <Text style={styles.result}>1,500.00</Text>

        <View style={styles.btnRow}>
          <CalculatorBtn btnText="C" bgColor="#9b9b9b" textColor="#000000" />
          <CalculatorBtn btnText="+/-" bgColor="#9b9b9b" textColor="#000000" />
          <CalculatorBtn btnText="del" bgColor="#9b9b9b" textColor="#000000" />
          <CalculatorBtn btnText="/" bgColor="#ff9427" />
        </View>

        <View style={styles.btnRow}>
          <CalculatorBtn btnText="7" />
          <CalculatorBtn btnText="8" />
          <CalculatorBtn btnText="9" />
          <CalculatorBtn btnText="X" bgColor="#ff9427" />
        </View>

        <View style={styles.btnRow}>
          <CalculatorBtn btnText="4" />
          <CalculatorBtn btnText="5" />
          <CalculatorBtn btnText="6" />
          <CalculatorBtn btnText="-" bgColor="#ff9427" />
        </View>

        <View style={styles.btnRow}>
          <CalculatorBtn btnText="1" />
          <CalculatorBtn btnText="2" />
          <CalculatorBtn btnText="3" />
          <CalculatorBtn btnText="+" bgColor="#ff9427" />
        </View>

        <View style={styles.btnRow}>
          <CalculatorBtn btnText="0" btnWidth />
          <CalculatorBtn btnText="." />
          <CalculatorBtn btnText="=" bgColor="#ff9427" />
        </View>
      </View>
    </>
  );
};
