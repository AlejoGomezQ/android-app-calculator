import {View, Text, TouchableOpacity} from 'react-native';

interface Props {
  btnText: string;
  bgColor?: string;
  textColor?: string;
  btnWidth?: boolean;
}

export const CalculatorBtn = ({
  btnText,
  bgColor = '#2d2d2d',
  textColor = '#ffffff',
  btnWidth,
}: Props) => {
  return (
    <TouchableOpacity>
      <View
        style={{
          ...styles.btn,
          backgroundColor: bgColor,
          width: btnWidth ? 180 : 80,
        }}>
        <Text
          style={{
            ...styles.textBtn,
            color: textColor,
          }}>
          {btnText}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

//#9b9b9b

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  btn: {
    justifyContent: 'center',
    height: 80,
    width: 80,
    marginHorizontal: 10,
    borderRadius: 100,
    backgroundColor: '#2d2d2d',
  },
  textBtn: {
    textAlign: 'center',
    padding: 10,
    color: '#ffffff',
    fontSize: 30,
    fontWeight: '400',
  },
});
