import React from 'react';
import {Text, StyleSheet, View, Image, TextInput} from 'react-native';
import {COLORS, dummyData, FONTS, icons, SIZES} from '../constants';

const FormInput = ({
  containerStyle,
  inputContainerStyle,
  label,
  placeholder,
  inputSyle,
  prependComponent,
  appendComponent,
  onChange,
  secureTextEntry,
  keyboardType = 'Default',
  autoCompleteType = 'off',
  autoCapitalize = 'none',
  errorMsg = '',
  maxLength,
}) => {
  return (
    <View style={{...containerStyle}}>
      {/* label & error msg */}
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{color: COLORS.gray, ...FONTS.body4}}>{label}</Text>
        <Text style={{color: COLORS.red, ...FONTS.body4}}>{errorMsg}</Text>
      </View>

      {/* Text Input Section */}
      <View style={{...styles.textInputWraper, ...inputContainerStyle}}>
        {prependComponent}
        <TextInput
          style={{flex: 1, ...inputSyle}}
          placeholder={placeholder}
          placeholderTextColor={COLORS.gray}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoCompleteType={autoCompleteType}
          autoCapitalize={autoCapitalize}
          maxLength={maxLength}
          onChangeText={text => onChange(text)}
        />
        {appendComponent}
      </View>
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  textInputWraper: {
    flexDirection: 'row',
    height: SIZES.height > 800 ? 55 : 45,
    paddingHorizontal: SIZES.padding,
    marginTop: SIZES.height > 800 ? SIZES.base : 0,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.lightGray2,
  },
});
