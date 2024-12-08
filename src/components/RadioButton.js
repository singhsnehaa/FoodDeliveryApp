import React from 'react';
import {Text, TouchableOpacity, View, Image} from 'react-native';
import {COLORS, FONTS, SIZES, icons, constants, dummyData} from '../constants';

const RadioButton = ({
  containerStyle,
  label,
  labelStyle,
  iconStyle,
  isSelected,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        ...containerStyle,
      }}
      onPress={onPress}>
      <Image
        source={isSelected ? icons.check_on : icons.check_off}
        style={{
          marginLeft: 5,
          height: 20,
          width: 20,
          ...iconStyle,
        }}
      />
      <Text
        style={{
          marginLeft: SIZES.radius,
          color: COLORS.gray,
          ...FONTS.body3,
          ...labelStyle,
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default RadioButton;
