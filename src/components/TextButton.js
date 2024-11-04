import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {COLORS, FONTS, SIZES} from '../constants';

function TextButton({
  label,
  labelStyle,
  buttonContainerStyle,
  onPress,
  disabled,
}) {
  return (
    <TouchableOpacity
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.primary,
        ...buttonContainerStyle,
      }}
      disabled={disabled}
      onPress={onPress}>
      <Text style={{color: COLORS.white, ...FONTS.h3, ...labelStyle}}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

export default TextButton;
