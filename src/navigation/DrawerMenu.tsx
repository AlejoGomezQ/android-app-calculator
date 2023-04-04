import {createDrawerNavigator} from '@react-navigation/drawer';
import {AboutMeScreen, CalculatorScreen} from '../screens';

const Drawer = createDrawerNavigator();

export const DrawerMenu = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: '#cfcfcf',
        },
        drawerActiveBackgroundColor: 'rgba(157, 60, 229, 0.5)',
        drawerActiveTintColor: '#000000',
      }}>
      <Drawer.Screen
        name="Calculator"
        options={{title: 'Calculadora'}}
        component={CalculatorScreen}
      />
      <Drawer.Screen
        name="AboutMeScreen"
        options={{title: 'Acerca de mi'}}
        component={AboutMeScreen}
      />
    </Drawer.Navigator>
  );
};
