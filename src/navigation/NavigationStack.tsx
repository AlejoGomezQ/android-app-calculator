import {createStackNavigator} from '@react-navigation/stack';
import {AboutMe, CalculatorScreen} from '../screens';

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
        name="AboutMe"
        options={{title: 'Acerca de mi'}}
        component={AboutMe}
      />
    </Stack.Navigator>
  );
};
