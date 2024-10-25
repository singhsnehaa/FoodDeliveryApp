import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {COLORS, dummyData, FONTS, icons, SIZES} from '../constants';

const Header = ({title}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.headerWrap}>
      {/* Left Part */}
      <TouchableOpacity
        style={styles.leftComponentWrap}
        onPress={() => navigation.openDrawer()}>
        <Image source={icons.menu} />
      </TouchableOpacity>

      {/* Title */}
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{...FONTS.h3}}>{title}</Text>
      </View>

      {/* Right part */}
      <TouchableOpacity
        style={styles.rightComponentWrap}
        onPress={() => navigation.openDrawer()}>
        <Image
          source={dummyData.myProfile?.profile_image}
          style={styles.profileImage}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerWrap: {
    flexDirection: 'row',
    height: 50,
    paddingHorizontal: SIZES.padding,
    marginTop: Platform.OS === 'ios' ? 60 : 20,
    alignItems: 'center',
  },
  leftComponentWrap: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: COLORS.gray2,
    borderRadius: SIZES.radius,
  },
  rightComponentWrap: {
    borderRadius: SIZES.radius,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: SIZES.radius,
  },
});
