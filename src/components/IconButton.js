import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import {COLORS, FONTS, SIZES, icons, constants, dummyData} from '../constants';

const IconButton = ({containerStyle, icon, iconStyle, onPress}) => {
  return (
    <TouchableOpacity style={{...containerStyle}} onPress={onPress}>
      <Image
        source={icon}
        style={{
          width: 30,
          height: 30,
          tintColor: COLORS.white,
          ...iconStyle,
        }}
      />
    </TouchableOpacity>
  );
};

export default IconButton;
