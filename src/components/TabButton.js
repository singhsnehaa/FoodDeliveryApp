import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {COLORS, dummyData, FONTS, icons, SIZES} from '../constants';
import Animated from 'react-native-reanimated';

const TabButton = ({label, icon, isFocused, onPress}) => {
  return (
    <TouchableWithoutFeedback
      style={[
        styles.drawerMenuBox,
        {backgroundColor: isFocused ? COLORS.transparentBlack1 : null},
      ]}
      onPress={onPress}>
      <Animated.View style={styles.outerTabContainer}>
        <Animated.View style={styles.innerTabContainer}>
          <Image source={icon} style={styles.tabIconStyle} />
          {isFocused && (
            <Text
              style={{color: COLORS.gray, ...FONTS.h3, marginLeft: SIZES.base}}
              numberOfLines={1}>
              {label}
            </Text>
          )}
        </Animated.View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default TabButton;
const styles = StyleSheet.create({
  outerTabContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerTabContainer: {
    flexDirection: 'row',
    width: '80%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
  tabIconStyle: {
    width: 20,
    height: 20,
    tintColor: COLORS.gray,
  },
  tabTextStyle: {
    marginLeft: SIZES.base,
    color: COLORS.white,
    ...FONTS.h3,
  },
  itemWrap: {
    height: SIZES.height,
    width: SIZES.width,
  },
});
