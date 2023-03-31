import {Text, View} from 'react-native';

import {CalculatorBtn} from '../components/CalculatorBtn';

import {styles} from '../theme/appTheme';
import {useCalculator} from '../hooks/useCalculator';

export const CalculatorScreen = () => {
  const {
    num,
    memory,
    deleteTotal,
    del,
    numChain,
    positiveNegative,
    split,
    multiply,
    subtract,
    sum,
    calc,
  } = useCalculator();

  return (
    <>
      <View style={styles.calculatorContainer}>
        {memory !== '0' && <Text style={styles.resultMemory}>{memory}</Text>}
        <Text
          style={styles.result}
          numberOfLines={1}
          adjustsFontSizeToFit={true}>
          {num}
        </Text>

        <View style={styles.btnRow}>
          <CalculatorBtn
            btnText="C"
            bgColor="#9b9b9b"
            textColor="#000000"
            btnAction={deleteTotal}
          />
          <CalculatorBtn
            btnText="+/-"
            bgColor="#9b9b9b"
            textColor="#000000"
            btnAction={positiveNegative}
          />
          <CalculatorBtn
            btnText="del"
            bgColor="#9b9b9b"
            textColor="#000000"
            btnAction={del}
          />
          <CalculatorBtn btnText="/" bgColor="#9d3ce5" btnAction={split} />
        </View>

        <View style={styles.btnRow}>
          <CalculatorBtn btnText="7" btnAction={numChain} />
          <CalculatorBtn btnText="8" btnAction={numChain} />
          <CalculatorBtn btnText="9" btnAction={numChain} />
          <CalculatorBtn btnText="X" bgColor="#9d3ce5" btnAction={multiply} />
        </View>

        <View style={styles.btnRow}>
          <CalculatorBtn btnText="4" btnAction={numChain} />
          <CalculatorBtn btnText="5" btnAction={numChain} />
          <CalculatorBtn btnText="6" btnAction={numChain} />
          <CalculatorBtn btnText="-" bgColor="#9d3ce5" btnAction={subtract} />
        </View>

        <View style={styles.btnRow}>
          <CalculatorBtn btnText="1" btnAction={numChain} />
          <CalculatorBtn btnText="2" btnAction={numChain} />
          <CalculatorBtn btnText="3" btnAction={numChain} />
          <CalculatorBtn btnText="+" bgColor="#9d3ce5" btnAction={sum} />
        </View>

        <View style={styles.btnRow}>
          <CalculatorBtn btnText="0" btnWidth btnAction={numChain} />
          <CalculatorBtn btnText="." btnAction={numChain} />
          <CalculatorBtn btnText="=" bgColor="#9d3ce5" btnAction={calc} />
        </View>
      </View>
    </>
  );
};
