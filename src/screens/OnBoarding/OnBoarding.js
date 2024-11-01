import React, {useEffect, useRef, useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Animated,
  ImageBackground,
} from 'react-native';
import {
  COLORS,
  FONTS,
  SIZES,
  icons,
  constants,
  dummyData,
  images,
} from '../../constants';

const OnBoarding = () => {
  const renderHeaderLogo = () => {
    return (
      <View style={styles.headerLogoBox}>
        <Image source={images.logo_02} style={styles.HeaderLogoImage} />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      {renderHeaderLogo()}

      <Animated.FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        pagingEnabled
        scrollEventThrottle={16}
        snapToAlignment={'center'}
        data={constants.onboarding_screens}
        keyExtractor={item => `${item.id}`}
        renderItem={({item, index}) => {
          return (
            <View style={{width: SIZES.width}}>
              {/* header */}
              <View
                style={{
                  flex: 3,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <ImageBackground
                  source={item.backgroundImage}
                  style={styles.onBoardingImgBack}
                />
                <Image
                  source={item.bannerImage}
                  resizeMode="contain"
                  style={styles.bannerImage}
                />
              </View>

              {/* description */}
            </View>
          );
        }}
      />
    </View>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  headerLogoBox: {
    position: 'absolute',
    top: SIZES.height > 800 ? 50 : 25,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  HeaderLogoImage: {
    width: SIZES.width * 0.8,
    height: 100,
  },
  onBoardingImgBack: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: '100%',
    width: '100%',
  },
  bannerImage: {
    width: SIZES.width * 0.8,
    height: SIZES.width * 0.8,
    marginBottom: -SIZES.padding,
  },
});
