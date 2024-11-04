import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
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

const CustomeDrawerItem = ({label, icon, isFocused, onPress}) => {
  return (
    <TouchableOpacity
      style={[
        styles.drawerMenuBox,
        {backgroundColor: isFocused ? COLORS.transparentBlack1 : null},
      ]}
      onPress={onPress}>
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
  const {selectedDrawerTab} = useSelector(state => state.tabs);
  const dispatch = useDispatch();

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
          <CustomeDrawerItem
            label={constants.screens.home}
            icon={icons.home}
            isFocused={selectedDrawerTab === constants.screens.home}
            onPress={() => {
              dispatch(changeDrawerTab(constants.screens.home));
              navigation.navigate('MainLayout');
            }}
          />
          <CustomeDrawerItem
            label={constants.screens.my_wallet}
            icon={icons.wallet}
            isFocused={selectedDrawerTab === constants.screens.my_wallet}
            onPress={() => {
              dispatch(changeDrawerTab(constants.screens.my_wallet));
              navigation.navigate('MainLayout');
            }}
          />
          <CustomeDrawerItem
            label={constants.screens.notification}
            icon={icons.notification}
            isFocused={selectedDrawerTab === constants.screens.notification}
            onPress={() => {
              dispatch(changeDrawerTab(constants.screens.notification));
              navigation.navigate('MainLayout');
            }}
          />
          <CustomeDrawerItem
            label={constants.screens.favourite}
            icon={icons.favourite}
            isFocused={selectedDrawerTab === constants.screens.favourite}
            onPress={() => {
              dispatch(changeDrawerTab(constants.screens.favourite));
              navigation.navigate('MainLayout');
            }}
          />
          {/* Line diveder */}
          <View style={styles.lineDivider}></View>

          <CustomeDrawerItem
            label={constants.screens.track_order}
            icon={icons.location}
            isFocused={selectedDrawerTab === constants.screens.track_order}
            onPress={() => {
              dispatch(changeDrawerTab(constants.screens.track_order));
              navigation.navigate('MainLayout');
            }}
          />
          <CustomeDrawerItem
            label={constants.screens.settings}
            icon={icons.setting}
            isFocused={selectedDrawerTab === constants.screens.settings}
            onPress={() => {
              dispatch(changeDrawerTab(constants.screens.settings));
              navigation.navigate('MainLayout');
            }}
          />
          <CustomeDrawerItem
            label={constants.screens.invite_friend}
            icon={icons.profile}
            isFocused={selectedDrawerTab === constants.screens.invite_friend}
            onPress={() => {
              dispatch(changeDrawerTab(constants.screens.invite_friend));
              navigation.navigate('MainLayout');
            }}
          />
          <CustomeDrawerItem
            label={constants.screens.help_center}
            icon={icons.help}
            isFocused={selectedDrawerTab === constants.screens.help_center}
            onPress={() => {
              dispatch(changeDrawerTab(constants.screens.help_center));
              navigation.navigate('MainLayout');
            }}
          />
        </View>
        <View style={{marginBottom: SIZES.padding}}>
          <CustomeDrawerItem
            label={'Logout'}
            icon={icons.logout}
            onPress={() => navigation.navigate('SignIn')}
          />
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomeDrawerContent;
const styles = StyleSheet.create({
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
