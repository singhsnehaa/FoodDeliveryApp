import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import CustomeDrawer from './drawer/CustomeDrawer';
import {OnBoarding, Otp, SignIn, SignUp} from '../screens';

const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'OnBoarding'}>
        <Stack.Screen name="OnBoarding" component={OnBoarding} />
        <Stack.Screen name="Home" component={CustomeDrawer} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Otp" component={Otp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
