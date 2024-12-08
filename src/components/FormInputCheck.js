import React from 'react';
import {Text, View, Image} from 'react-native';
import {COLORS, FONTS, SIZES, icons, constants, dummyData} from '../constants';

const FormInputCheck = ({value, error}) => {
  return (
    <View
      style={{
        justifyContent: 'center',
      }}>
      <Image
        source={
          value == '' || (value != '' && error == '')
            ? icons?.correct
            : icons.cancel
        }
        style={{
          width: 20,
          height: 20,
          tintColor:
            value == ''
              ? COLORS.gray
              : value != '' && error == ''
              ? COLORS.green
              : COLORS.red,
        }}
      />
    </View>
  );
};

export default FormInputCheck;
