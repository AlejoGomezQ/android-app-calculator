import 'react-native-gesture-handler';

// React Native Components
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';

// Screens
/* import {NavigationStack} from './src/navigation/NavigationStack'; */
import {DrawerMenu} from './src/navigation/DrawerMenu';

export const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#000000" />
      {/* <NavigationStack /> */}
      <DrawerMenu />
    </NavigationContainer>
  );
};
