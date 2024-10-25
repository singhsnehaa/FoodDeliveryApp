import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {MainLayout} from '../../screens';
import {
  COLORS,
  FONTS,
  SIZES,
  constants,
  icons,
  dummyData,
} from '../../constants';
import {reset, changeDrawerTab} from '../../redux/features/tabsSlice';
import {useDispatch, useSelector} from 'react-redux';
import CustomeDrawerContent from './CustomeDrawerContent';

const Drawer = createDrawerNavigator();

const CustomeDrawer = () => {
  return (
    <View style={{flex: 1, backgroundColor: COLORS.primary}}>
      <Drawer.Navigator
        screenOptions={{
          initialRouteName: 'MainLayout',
          headerShown: false,
          drawerType: 'slide',
          drawerStyle: styles.drawerStyle,
          overlayColor: 'transparent',
          sceneContainerStyle: {backgroundColor: 'transparent'},
        }}
        drawerContent={props => {
          return <CustomeDrawerContent navigation={props.navigation} />;
        }}>
        <Drawer.Screen name="MainLayout">
          {props => <MainLayout {...props} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </View>
  );
};

export default CustomeDrawer;
const styles = StyleSheet.create({
  drawerStyle: {
    flex: 1,
    width: '65%', //'65%'
    paddingRight: 20,
    backgroundColor: 'transparent',
  },
});
