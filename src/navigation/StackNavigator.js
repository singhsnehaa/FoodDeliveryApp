import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import CustomeDrawer from './drawer/CustomeDrawer';
import {
  ForgotPassword,
  OnBoarding,
  Otp,
  SignIn,
  SignUp,
  FoodDetail,
  MyCart,
  MyCard,
  AddCard,
  Checkout,
} from '../screens';

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
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="FoodDetail" component={FoodDetail} />
        <Stack.Screen name="MyCart" component={MyCart} />
        <Stack.Screen name="MyCard" component={MyCard} />
        <Stack.Screen name="AddCard" component={AddCard} />
        <Stack.Screen name="Checkout" component={Checkout} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
