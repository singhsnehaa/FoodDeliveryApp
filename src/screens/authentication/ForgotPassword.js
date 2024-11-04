import React, {useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {FormInput, TextButton} from '../../components';

import {COLORS, FONTS, SIZES, constants, icons, images} from '../../constants';
import AuthLayout from './AuthLayout';
import {utils} from '../../utils';

const ForgotPassword = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const isEnableSignIn = () => email != '' && emailError == '';

  const handleSubmit = () => {
    console.log('Send Email Btn');
    navigation?.goBack();
  };

  return (
    <AuthLayout
      title={'Password Recovery'}
      subTitle="Please enter your email address to recover your password">
      <View style={{flex: 1, marginTop: SIZES.padding * 2}}>
        {/* Form Input Section */}
        <FormInput
          label={'Email'}
          keyboardType="email-address"
          autoCompleteType="email"
          onChange={value => {
            // validate email
            utils?.validateEmail(value, setEmailError);
            setEmail(value);
          }}
          errorMsg={emailError}
          appendComponent={
            <View style={{justifyContent: 'center'}}>
              <Image
                source={
                  email == '' || (email != '' && emailError == '')
                    ? icons.correct
                    : icons.cancel
                }
                style={{
                  ...styles.emailCorrecrIcon,
                  tintColor:
                    email == ''
                      ? COLORS.gray
                      : email != '' && emailError == ''
                      ? COLORS.green
                      : COLORS.red,
                }}
              />
            </View>
          }
        />
      </View>

      {/* Bbutton section */}

      <TextButton
        label="Send Email"
        disabled={isEnableSignIn() ? false : true}
        buttonContainerStyle={{
          ...styles.sendEmailBtn,
          backgroundColor: isEnableSignIn()
            ? COLORS.primary
            : COLORS.transparentPrimray,
        }}
        onPress={() => handleSubmit()}
      />
    </AuthLayout>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  emailCorrecrIcon: {
    height: 20,
    width: 20,
  },
  sendEmailBtn: {
    height: 55,
    alignItems: 'center',
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.primary,
    marginTop: SIZES.padding,
  },
});
