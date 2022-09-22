import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen1 from './Screen/Screen1';
import Screen2 from './Screen/Screen2';
import Screen3 from './Screen/Screen3';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName={'Screen1'} screenOptions={{headerShown:false}}>
              <Stack.Screen name='Screen1' component={Screen1}/>
              <Stack.Screen name='Screen3' component={Screen3}/>
              <Stack.Screen name='Screen2' component={Screen2}/>
          </Stack.Navigator>
      </NavigationContainer>
    );
}