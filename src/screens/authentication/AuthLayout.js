import React, {useState, useRef} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {COLORS, FONTS, images, SIZES} from '../../constants';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const AuthLayout = ({title, subTitle, titleContainerStyle, children}) => {
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        keyboardDismissMode="on-drag"
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: SIZES.padding,
        }}>
        {/* App Icon */}

        <View style={{alignItems: 'center'}}>
          <Image
            source={images.logo_02}
            resizeMode="contain"
            style={styles.logoStyle}
          />
        </View>

        {/* Title and SubTitle */}
        <View style={{marginTop: SIZES.padding, ...titleContainerStyle}}>
          <Text style={{textAlign: 'center', ...FONTS.h2}}>{title}</Text>
          <Text style={styles.subTitle}>{subTitle}</Text>
        </View>

        {/* Content children */}
        {children}
      </KeyboardAwareScrollView>
    </View>
  );
};

export default AuthLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: SIZES.padding,
    backgroundColor: COLORS.white,
  },
  logoStyle: {
    marginTop: 10,
    height: 100,
    width: 200,
  },
  subTitle: {
    textAlign: 'center',
    color: COLORS.darkGray,
    marginTop: SIZES.base,
    ...FONTS.body3,
  },
});
