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

const OnBoarding = ({navigation}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef();

  const onViewChangeRef = useRef(({viewableItems, changed}) => {
    setCurrentIndex(viewableItems[0].index);
  });

  const Dots = () => {
    const dotPosition = Animated.divide(scrollX, SIZES.width);

    return (
      <View style={styles.dotsWrap}>
        {constants.onboarding_screens.map((item, index) => {
          const dotColor = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [
              COLORS.lightOrange,
              COLORS.primary,
              COLORS.lightOrange,
            ],
            extrapolate: 'clamp',
          });

          const dotWidth = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [10, 30, 10],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              key={`dot-${index}`}
              style={[
                styles.dotItem,
                {width: dotWidth, backgroundColor: dotColor},
              ]}
            />
          );
        })}
      </View>
    );
  };

  const renderHeaderLogo = () => (
    <View style={styles.logoWrap}>
      <Image
        source={images.logo_02}
        resizeMode="contain"
        style={styles.logoImg}
      />
    </View>
  );

  const renderItem = ({item, index}) => (
    <View style={styles.itemWap}>
      {/* Header  */}
      <View style={{flex: 3}}>
        <ImageBackground
          source={item.backgroundImage}
          style={[styles.bgImageStyle, {height: index === 1 ? '92%' : '100%'}]}>
          <Image
            source={item.bannerImage}
            resizeMode="contain"
            style={styles.bannerStyle}
          />
        </ImageBackground>
      </View>

      {/* Detail  */}
      <View style={styles.detailWrap}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );

  const renderFooter = () => (
    <View style={styles.footerWrap}>
      {/* Pagination / Dots  */}
      <View style={styles.paginationWrap}>
        <Dots />
      </View>

      {/* Button  */}
      {currentIndex < constants.onboarding_screens.length - 1 && (
        <View style={styles.footerBtnWrap}>
          <TextButton
            label="Skip"
            buttonContainerStyle={{backgroundColor: null}}
            labelStyle={{color: COLORS.darkGray2}}
            onPress={() => navigation.replace('SignIn')}
          />
          <TextButton
            label="Next"
            buttonContainerStyle={styles.nextBtnStyle}
            onPress={() => {
              // const index = Math.ceil(Number(scrollX._value / SIZES.width));

              flatListRef?.current?.scrollToIndex({
                index: currentIndex + 1,
                animated: true,
              });
            }}
          />
        </View>
      )}

      {currentIndex === constants.onboarding_screens.length - 1 && (
        <View style={styles.lastScreenButtonWrap}>
          <TextButton
            label="Let's Get Started"
            buttonContainerStyle={{height: 60, borderRadius: SIZES.radius}}
            onPress={() => navigation.replace('SignIn')}
          />
        </View>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Logo  */}
      {renderHeaderLogo()}

      <Animated.FlatList
        horizontal
        bounces={false}
        ref={flatListRef}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        data={constants.onboarding_screens}
        scrollEventThrottle={16}
        snapToAlignment="center"
        keyExtractor={item => `${item.id}`}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: scrollX,
                },
              },
            },
          ],
          {useNativeDriver: false},
        )}
        onViewableItemsChanged={onViewChangeRef.current} // allow us to track which screen currently visible
        renderItem={renderItem}
      />

      {/* Footer  */}
      {renderFooter()}
    </View>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  logoWrap: {
    position: 'absolute',
    top: SIZES.height > 800 ? 50 : 25,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoImg: {
    width: SIZES.width * 0.5,
    height: 100,
  },
  itemWap: {
    width: SIZES.width,
  },
  bgImageStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
  },
  bannerStyle: {
    width: SIZES.width * 0.8,
    height: SIZES.width * 0.8,
    marginBottom: -SIZES.padding,
  },
  detailWrap: {
    flex: 1,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: SIZES.radius,
  },
  title: {
    ...FONTS.h1,
    fontSize: 25,
  },
  description: {
    marginTop: SIZES.radius,
    textAlign: 'center',
    color: COLORS.darkGray,
    paddingHorizontal: SIZES.padding,
    ...FONTS.body3,
  },
  footerWrap: {
    height: 160,
  },
  paginationWrap: {
    flex: 1,
    justifyContent: 'center',
  },
  dotsWrap: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dotItem: {
    borderRadius: 5,
    marginHorizontal: 6,
    height: 10,
  },
  footerBtnWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: SIZES.padding,
    marginVertical: SIZES.padding,
  },
  nextBtnStyle: {
    height: 60,
    width: 200,
    borderRadius: SIZES.radius,
  },
  lastScreenButtonWrap: {
    paddingHorizontal: SIZES.padding,
    marginVertical: SIZES.padding,
  },
});
