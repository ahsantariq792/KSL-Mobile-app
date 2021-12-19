// navigation 
// first install navigation library from https://reactnavigation.org/
// then
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signin from '../screen/Signin';
import Signup from '../screen/Signup';
import Home from '../screen/Home';
import Welcome from '../screen/welcome';
import Managersignin from '../screen/Managersignin';
// import Branches from '../Components/User/Branches';


const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Managersignin" component={Managersignin} />

    </Stack.Navigator>
    </NavigationContainer>
  );
}

