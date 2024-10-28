import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {COLORS, FONTS, SIZES} from '../constants';

function TextIconButton({label, icon, labelStyle, containerStyle, onPress}) {
  return (
    <TouchableOpacity
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.primary,
        flexDirection: 'row',
        ...containerStyle,
      }}
      onPress={onPress}>
      <Text style={{...FONTS.h3, ...labelStyle}}>{label}</Text>
      <Image
        source={icon}
        style={{
          width: 20,
          height: 20,
          tintColor: COLORS.white,
          marginLeft: 5,
        }}
      />
    </TouchableOpacity>
  );
}

export default TextIconButton;
