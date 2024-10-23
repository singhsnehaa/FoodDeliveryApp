import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {MainLayout} from './screens';
import CustomeDrawer from './navigation/CustomeDrawer';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'Home'}>
        <Stack.Screen name="Home" component={CustomeDrawer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;