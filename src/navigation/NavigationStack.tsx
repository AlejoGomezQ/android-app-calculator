import {createStackNavigator} from '@react-navigation/stack';
import {AboutMeScreen, CalculatorScreen} from '../screens';

const Stack = createStackNavigator();

export const NavigationStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="CalculatorScreen"
        options={{title: 'Calculadora'}}
        component={CalculatorScreen}
      />
      <Stack.Screen
        name="AboutMeScreen"
        options={{title: 'Acerca de mi'}}
        component={AboutMeScreen}
      />
    </Stack.Navigator>
  );
};
