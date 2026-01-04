import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home/Home';

export type RootStackParamList = {
  Home: undefined;
  App2: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        {/* <Stack.Screen name="App2" component={App2Navigator} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
