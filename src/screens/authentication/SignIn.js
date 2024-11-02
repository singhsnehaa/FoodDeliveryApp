import React, {useState, useRef} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {FormInput} from '../../components';

import {COLORS, FONTS, SIZES, constants, icons, images} from '../../constants';
import AuthLayout from './AuthLayout';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [passeord, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
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
            setEmail(value);
          }}
          errorMsg={emailError}
          appendComponent={
            <View style={{justifyContent: 'center'}}>
              <Image source={icons.correct} style={styles.emailCorrecrIcon} />
            </View>
          }
        />
        {/* Save me & forgot passeord section */}

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
    tintColor: COLORS.green,
  },
});
