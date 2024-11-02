import React, {useState, useRef} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {CustomeSwitch, FormInput, TextButton} from '../../components';

import {COLORS, FONTS, SIZES, constants, icons, images} from '../../constants';
import AuthLayout from './AuthLayout';
import {utils} from '../../utils';

const SignIn = navigation => {
  const [email, setEmail] = useState('');
  const [passeord, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [saveMe, setSaveMe] = useState(false);
  return (
    <AuthLayout
      title={'Lets Sign you in'}
      subTitle="Welcome back, you have been missed">
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

        <FormInput
          label={'Password'}
          secureTextEntry={!showPass}
          autoCompleteType="password"
          containerStyle={{marginTop: SIZES.radius}}
          onChange={value => {
            // validate email
            setPassword(value);
          }}
          errorMsg={emailError}
          appendComponent={
            <TouchableOpacity
              style={styles.appendPassword}
              onPress={() => setShowPass(!showPass)}>
              <Image
                source={showPass ? icons.eye_close : icons.eye}
                style={styles.passEyeIcon}
              />
            </TouchableOpacity>
          }
        />

        {/* Save me & forgot passeord section */}
        <View style={styles.saveForgotPasswordWrap}>
          <CustomeSwitch value={saveMe} onChange={value => setSaveMe(value)} />
          <TextButton
            label="Forgot Password"
            labelStyle={{color: COLORS.gray, ...FONTS.body3}}
            buttonContainerStyle={{backgroundColor: null}}
            onPress={() => navigation.navigate('ForgotPassword')}
          />
        </View>

        {/* sign in */}

        {/* sign UP */}
      </View>
    </AuthLayout>
  );
};

export default SignIn;
const styles = StyleSheet.create({
  emailCorrecrIcon: {
    height: 20,
    width: 20,
  },
  passEyeIcon: {
    height: 20,
    width: 20,
    tintColor: COLORS.gray,
  },
  appendPassword: {
    width: 40,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  saveForgotPasswordWrap: {
    flexDirection: 'row',
    marginTop: SIZES.radius,
    justifyContent: 'space-between',
  },
});
