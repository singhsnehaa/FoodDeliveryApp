import React from 'react';
import {Text, View, Image} from 'react-native';
import {COLORS, FONTS, SIZES, icons, constants, dummyData} from '../constants';

const IconLabel = ({containerStyle, icon, iconStyle, labelStyle, label}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingVertical: SIZES.base,
        paddingHorizontal: SIZES.radius,
        borderRadius: SIZES.radius,
        ...containerStyle,
      }}>
      <Image
        source={icon}
        style={{
          width: 20,
          height: 20,
          ...iconStyle,
        }}
      />
      <Text style={{marginLeft: SIZES.base, ...FONTS.body3, ...labelStyle}}>
        {label}
      </Text>
    </View>
  );
};

export default IconLabel;
