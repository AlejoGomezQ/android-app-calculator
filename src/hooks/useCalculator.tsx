import {useRef, useState} from 'react';

enum Operators {
  sum,
  sub,
  mult,
  div,
}

export const useCalculator = () => {
  const [num, setNum] = useState('0');
  const [memory, setMemory] = useState('0');

  const lastOperator = useRef<Operators>();

  const saveAsMemoryNum = () => {
    if (num.endsWith('.')) {
      setMemory(num.slice(0, -1));
    } else {
      setMemory(num);
    }

    setNum('0');
  };

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

  const split = () => {
    saveAsMemoryNum();
    lastOperator.current = Operators.div;
  };

  const multiply = () => {
    saveAsMemoryNum();
    lastOperator.current = Operators.mult;
  };

  const subtract = () => {
    saveAsMemoryNum();
    lastOperator.current = Operators.sub;
  };

  const sum = () => {
    saveAsMemoryNum();
    lastOperator.current = Operators.sum;
  };

  const calc = () => {
    const num1 = Number(num);
    const num2 = Number(memory);

    switch (lastOperator.current) {
      case Operators.sum:
        setNum(`${num1 + num2}`);
        break;

      case Operators.sub:
        setNum(`${num2 - num1}`);
        break;

      case Operators.mult:
        setNum(`${num1 * num2}`);
        break;

      case Operators.div:
        setNum(`${num2 / num1}`);
        break;
    }

    setMemory('0');
  };

  return {
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
  };
};
