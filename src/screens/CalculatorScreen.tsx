import {useState} from 'react';
import {Text, View} from 'react-native';

import {CalculatorBtn} from '../components/CalculatorBtn';

import {styles} from '../theme/appTheme';

export const CalculatorScreen = () => {
  const [num, setNum] = useState('0');
  const [memory, setMemory] = useState('0');

  const deleteTotal = () => {
    setNum('0');
    setMemory('0');
  };

  const del = () => {
    let isNegative = '';
    let tempNum = num;

    if (num.includes('-')) {
      isNegative = '-';
      tempNum = num.substring(1);
    }

    if (tempNum.length > 1) {
      setNum(isNegative + tempNum.slice(0, -1));
    } else {
      setNum('0');
    }
  };

  const numChain = (number: string) => {
    //No aceptar más de un punto
    if (num.includes('.') && number === '.') return;

    // No empecar con más de un cero
    if (num.startsWith('0') || num.startsWith('-0')) {
      //Punto decimal
      if (number === '.') {
        setNum(num + number);

        //Evaluar si es otro cero y hay un punto
      } else if (number === '0' && num.includes('.')) {
        setNum(num + number);

        //Evaluar dif cero y no tiene punto
      } else if (number !== '0' && !num.includes('.')) {
        setNum(number);

        //Evitar 00000.0
      } else if (number === '0' && !num.includes('.')) {
        setNum(num);
      }
    } else {
      setNum(num + number);
    }
  };

  const positiveNegative = () => {
    if (num.includes('-')) {
      setNum(num.replace('-', ''));
    } else {
      setNum(`-${num}`);
    }
  };

  return (
    <>
      <View style={styles.calculatorContainer}>
        <Text style={styles.resultMemory}>{memory}</Text>
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
          <CalculatorBtn btnText="/" bgColor="#ff9427" btnAction={numChain} />
        </View>

        <View style={styles.btnRow}>
          <CalculatorBtn btnText="7" btnAction={numChain} />
          <CalculatorBtn btnText="8" btnAction={numChain} />
          <CalculatorBtn btnText="9" btnAction={numChain} />
          <CalculatorBtn btnText="X" bgColor="#ff9427" btnAction={numChain} />
        </View>

        <View style={styles.btnRow}>
          <CalculatorBtn btnText="4" btnAction={numChain} />
          <CalculatorBtn btnText="5" btnAction={numChain} />
          <CalculatorBtn btnText="6" btnAction={numChain} />
          <CalculatorBtn btnText="-" bgColor="#ff9427" btnAction={numChain} />
        </View>

        <View style={styles.btnRow}>
          <CalculatorBtn btnText="1" btnAction={numChain} />
          <CalculatorBtn btnText="2" btnAction={numChain} />
          <CalculatorBtn btnText="3" btnAction={numChain} />
          <CalculatorBtn btnText="+" bgColor="#ff9427" btnAction={numChain} />
        </View>

        <View style={styles.btnRow}>
          <CalculatorBtn btnText="0" btnWidth btnAction={numChain} />
          <CalculatorBtn btnText="." btnAction={numChain} />
          <CalculatorBtn btnText="=" bgColor="#ff9427" btnAction={numChain} />
        </View>
      </View>
    </>
  );
};
