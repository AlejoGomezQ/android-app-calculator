// React Native Components
import {SafeAreaView, StatusBar} from 'react-native';

// Screens
import {CalculatorScreen} from './src/screens/CalculatorScreen';

// Global Style
import {styles} from './src/theme/appTheme';

export const App = () => {
  return (
    <SafeAreaView style={styles.bg}>
      <StatusBar backgroundColor="#000000" />
      <CalculatorScreen />
    </SafeAreaView>
  );
};
