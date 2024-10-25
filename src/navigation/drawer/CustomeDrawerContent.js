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

const CustomeDrawerItem = ({label, icon, onPress}) => {
  return (
    <TouchableOpacity style={styles.drawerMenuBox} onPress={onPress}>
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

  console.log('selectedDrawerTab=>', selectedDrawerTab);
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
            onPress={() => {
              dispatch(changeDrawerTab(constants.screens.notification));
              navigation.navigate('MainLayout');
            }}
          />
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
