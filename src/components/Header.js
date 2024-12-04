import React from 'react';
import {Text, StyleSheet, View, Platform} from 'react-native';
import {COLORS, dummyData, FONTS, icons, SIZES} from '../constants';

const Header = ({
  title,
  titleStyle,
  leftComponent,
  rightComponent,
  containerStyle,
}) => {
  return (
    <View style={{...styles.headerWrap, ...containerStyle}}>
      {/* Left Part */}
      {leftComponent}

      {/* Title */}
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{...FONTS.h3, ...titleStyle}}>{title}</Text>
      </View>

      {/* Right part */}

      {rightComponent}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerWrap: {
    flexDirection: 'row',
    height: 50,
    paddingHorizontal: SIZES.radius,
    marginTop: Platform.OS === 'ios' ? 60 : 20,
  },
});
