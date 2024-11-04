import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {TextButton} from '../../components';

import {COLORS, FONTS, SIZES, constants, icons, images} from '../../constants';
import AuthLayout from './AuthLayout';

const Otp = ({navigation}) => {
  const [timer, setTimer] = useState(60);
  const [otp, setOtp] = useState('');

  useEffect(() => {
    let interval = setInterval(() => {
      setTimer(prevTimer => {
        if (prevTimer > 0) {
          return prevTimer - 1;
        } else {
          return prevTimer;
        }
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AuthLayout
      title={'Otp Authentication'}
      subTitle="An Authentication code has been sent to bysneha@gmail.com">
      <View style={{flex: 1, marginTop: SIZES.padding * 2}}>
        {/* OTP Input Section */}

        <OTPInputView
          style={{width: '100%', height: 50}}
          pinCount={4}
          code={otp} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
          onCodeChanged={code => setOtp(code)}
          autoFocusOnLoad
          codeInputFieldStyle={styles.underlineStyleBase}
          codeInputHighlightStyle={styles.underlineStyleHighLighted}
          onCodeFilled={code => {
            console.log(`OTP Code is ${code}, you are good to go!`);
          }}
        />

        {/* count down timer section */}
        <View style={styles.timerWrap}>
          <Text style={{color: COLORS.darkGray, ...FONTS.body3}}>
            Didn't received code?
          </Text>
          <TextButton
            label={`Resend (${timer})s`}
            disabled={timer == 0 ? false : true}
            labelStyle={{color: COLORS.primary, ...FONTS.h3}}
            buttonContainerStyle={{
              backgroundColor: null,
              marginLeft: SIZES.base,
            }}
            onPress={() => setTimer(60)}
          />
        </View>
      </View>

      {/* footer section */}

      <TextButton
        label="Continue"
        buttonContainerStyle={styles.continueBtn}
        onPress={() => console.log('Continue OTP Btn clicked')}
      />

      <View style={styles.innerFooterWrap}>
        <Text style={{color: COLORS.darkGray, ...FONTS.body3}}>
          Bby Signing up, you agree to our.
        </Text>
        <TextButton
          label={'Terms and condition'}
          disabled={timer == 0 ? false : true}
          labelStyle={{color: COLORS.primary, ...FONTS.body3}}
          buttonContainerStyle={{backgroundColor: null}}
          onPress={() => console.log('Terms and condition clicked')}
        />
      </View>
    </AuthLayout>
  );
};

export default Otp;
const styles = StyleSheet.create({
  timerWrap: {
    flexDirection: 'row',
    marginTop: SIZES.padding,
    justifyContent: 'center',
  },
  borderStyleHighLighted: {
    borderColor: COLORS.transparentPrimray,
  },
  underlineStyleBase: {
    width: 65,
    height: 65,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.lightGray2,
    color: COLORS.black,
    ...FONTS.h3,
  },
  underlineStyleHighLighted: {
    borderColor: COLORS.transparentPrimray,
  },
  continueBtn: {
    height: 50,
    alignItems: 'center',
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.primary,
  },
  innerFooterWrap: {
    marginTop: SIZES.padding,
    alignItems: 'center',
  },
});
