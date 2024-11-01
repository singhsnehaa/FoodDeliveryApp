import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Animated,
  Image,
  StyleSheet,
} from 'react-native';
import {TextButton} from '../../components';

import {COLORS, FONTS, SIZES, constants, images} from '../../constants';
import AuthLayout from './AuthLayout';

const SignIn = () => {
  return (
    <AuthLayout
      title={'Lets Sign you in'}
      subTitle="Welcome back, you have been missed"></AuthLayout>
  );
};

export default SignIn;
