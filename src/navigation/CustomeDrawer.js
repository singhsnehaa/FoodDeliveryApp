import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {MainLayout} from '../screens';
import {COLORS, FONTS, SIZES, constants, icons, dummyData} from '../constants';

const Drawer = createDrawerNavigator();

const CustomeDrawerItem = ({label, icon}) => {
  return (
    <TouchableOpacity
      style={styles.drawerMenuBox}
      onPress={() => console.log(menu)}>
      <Image
        source={icon}
        style={{height: 20, width: 20, tintColor: COLORS.white}}
      />
      <Text style={{color: COLORS.white, ...FONTS.h3, marginLeft: 15}}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const CustomeDrawerContent = ({navigation}) => {
  return (
    <DrawerContentScrollView
      scrollEnabled={true}
      contentContainerStyle={{flex: 1}}>
      <View style={styles.DrawerContentBox}>
        {/* Close */}
        <View style={{alignItems: 'flex-start', justifyContent: 'center'}}>
          <TouchableOpacity
            style={styles.closeIconBox}
            onPress={() => navigation.closeDrawer()}>
            <Image
              source={icons.cross}
              style={{height: 35, width: 35, tintColor: COLORS.white}}
            />
          </TouchableOpacity>
        </View>
        {/* profile */}
        <TouchableOpacity
          style={styles.profileBox}
          onPress={() => console.log('profile')}>
          <Image
            source={dummyData.myProfile?.profile_image}
            style={{height: 50, width: 50, borderRadius: SIZES.radius}}
          />
          <View style={{marginLeft: SIZES.radius}}>
            <Text style={{color: COLORS.white, ...FONTS.h3}}>
              {dummyData.myProfile.name}
            </Text>
            <Text style={{color: COLORS.white, ...FONTS.body4}}>
              View your profile
            </Text>
          </View>
        </TouchableOpacity>
        {/* Drawer items */}
        <View style={{flex: 1, marginTop: SIZES.padding}}>
          <CustomeDrawerItem label={constants.screens.home} icon={icons.home} />
          <CustomeDrawerItem
            label={constants.screens.my_wallet}
            icon={icons.wallet}
          />
          <CustomeDrawerItem
            label={constants.screens.notification}
            icon={icons.notification}
          />
          <CustomeDrawerItem
            label={constants.screens.favourite}
            icon={icons.favourite}
          />
          {/* Line diveder */}
          <View style={styles.lineDivider}></View>
          <CustomeDrawerItem label={'Track your order'} icon={icons.location} />
          <CustomeDrawerItem label={'Coupons'} icon={icons.coupon} />
          <CustomeDrawerItem label={'Settings'} icon={icons.setting} />
          <CustomeDrawerItem label={'Invite a Friend'} icon={icons.profile} />
          <CustomeDrawerItem label={'Help Center'} icon={icons.help} />
        </View>
        <View style={{marginBottom: SIZES.padding}}>
          <CustomeDrawerItem label={'Logout'} icon={icons.logout} />
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

const CustomeDrawer = () => {
  return (
    <View style={{flex: 1, backgroundColor: COLORS.primary}}>
      <Drawer.Navigator
        screenOptions={{
          initialRouteName: 'MainLayout',
          // headerShown: false,
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
  DrawerContentBox: {
    flex: 1,
    paddingHorizontal: SIZES.radius,
  },
  closeIconBox: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileBox: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: SIZES.radius,
  },
  drawerMenuBox: {
    flexDirection: 'row',
    height: 40,
    marginBottom: SIZES.base,
    alignItems: 'center',
    paddingLeft: SIZES.radius,
    borderRadius: SIZES.base,
    //backgroundcolor
  },
  lineDivider: {
    height: 1,
    marginVertical: SIZES.radius,
    marginLeft: SIZES.radius,
    backgroundColor: COLORS.lightGray1,
  },
});
