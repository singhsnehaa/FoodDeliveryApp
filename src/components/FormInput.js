import React from 'react';
import {Text, StyleSheet, View, Image, TextInput} from 'react-native';
import {COLORS, dummyData, FONTS, icons, SIZES} from '../constants';

const FormInput = ({
  containerStyle,
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
}) => {
  return (
    <View style={{...containerStyle}}>
      {/* label & error msg */}
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{color: COLORS.gray, ...FONTS.body4}}>{label}</Text>
        <Text style={{color: COLORS.red, ...FONTS.body4}}>{errorMsg}</Text>
      </View>

      {/* Text Input Section */}
      <View style={styles.textInputWraper}>
        {prependComponent}
        <TextInput
          style={{flex: 1, ...inputSyle}}
          placeholder={placeholder}
          placeholderTextColor={COLORS.gray}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoCompleteType={autoCompleteType}
          autoCapitalize={autoCapitalize}
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
    height: 55,
    paddingHorizontal: SIZES.padding,
    marginTop: SIZES.base,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.lightGray2,
  },
});
