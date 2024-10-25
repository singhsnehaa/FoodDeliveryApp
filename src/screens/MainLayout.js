import React, {useEffect, useRef} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  Platform,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useDerivedValue,
  interpolate,
  withTiming,
} from 'react-native-reanimated';
import {useDrawerStatus} from '@react-navigation/drawer';
import LinearGradient from 'react-native-linear-gradient';
import {reset, changeDrawerTab} from '../redux/features/tabsSlice';
import {useDispatch, useSelector} from 'react-redux';
import {COLORS, FONTS, SIZES, icons, constants, dummyData} from '../constants';
import {Home, Search, CartTab, Favourite, Notification} from '../screens';
import {Header, TabButton} from '../components';

const MainLayout = ({navigation}) => {
  const {selectedDrawerTab} = useSelector(state => state.tabs);
  const dispatch = useDispatch();
  const flatListRef = useRef();

  // Animation drawer start
  const status = useDrawerStatus();
  const progress = useSharedValue(0);
  const scaleAnimation = useDerivedValue(() =>
    interpolate(progress.value, [0, 1], [1, 0.8]),
  );
  const borderRadiusAnimation = useDerivedValue(() =>
    interpolate(progress.value, [0, 1], [0, 26]),
  );
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{scale: scaleAnimation.value}],
    borderRadius: borderRadiusAnimation.value,
  }));

  if (status === 'open') {
    progress.value = withTiming(1, {duration: 400});
  } else {
    progress.value = withTiming(0, {duration: 400});
  }
  // Animation drawer end

  // tab animation start
  const homeTabFlex = useSharedValue(1);
  const homeTabColor = useSharedValue(COLORS.white);

  const searchTabFlex = useSharedValue(1);
  const searchTabColor = useSharedValue(COLORS.white);

  const cartTabFlex = useSharedValue(1);
  const cartTabColor = useSharedValue(COLORS.white);

  const favouriteTabFlex = useSharedValue(1);
  const favouriteTabColor = useSharedValue(COLORS.white);

  const notificationTabFlex = useSharedValue(1);
  const notificationTabColor = useSharedValue(COLORS.white);

  const homeFlexStyle = useAnimatedStyle(() => ({
    flex: homeTabFlex.value,
  }));

  const homeColorStyle = useAnimatedStyle(() => ({
    backgroundColor: homeTabColor.value,
  }));

  const searchFlexStyle = useAnimatedStyle(() => ({
    flex: searchTabFlex.value,
  }));

  const searchColorStyle = useAnimatedStyle(() => ({
    backgroundColor: searchTabColor.value,
  }));

  const cartFlexStyle = useAnimatedStyle(() => ({
    flex: cartTabFlex.value,
  }));

  const cartColorStyle = useAnimatedStyle(() => ({
    backgroundColor: cartTabColor.value,
  }));

  const favouriteFlexStyle = useAnimatedStyle(() => ({
    flex: favouriteTabFlex.value,
  }));

  const favouriteColorStyle = useAnimatedStyle(() => ({
    backgroundColor: favouriteTabColor.value,
  }));

  const notificationFlexStyle = useAnimatedStyle(() => ({
    flex: notificationTabFlex.value,
  }));

  const notificationColorStyle = useAnimatedStyle(() => ({
    backgroundColor: notificationTabColor.value,
  }));

  useEffect(() => {
    if (selectedDrawerTab === constants.screens.home) {
      flatListRef?.current?.scrollToIndex({
        index: 0,
        animated: false,
      });

      homeTabFlex.value = withTiming(4, {duration: 500});
      homeTabColor.value = withTiming(COLORS.primary, {duration: 500});
    } else {
      homeTabFlex.value = withTiming(1, {duration: 500});
      homeTabColor.value = withTiming(COLORS.white, {duration: 500});
    }

    if (selectedDrawerTab === constants.screens.search) {
      flatListRef?.current?.scrollToIndex({
        index: 1,
        animated: false,
      });

      searchTabFlex.value = withTiming(4, {duration: 500});
      searchTabColor.value = withTiming(COLORS.primary, {duration: 500});
    } else {
      searchTabFlex.value = withTiming(1, {duration: 500});
      searchTabColor.value = withTiming(COLORS.white, {duration: 500});
    }

    if (selectedDrawerTab === constants.screens.cart) {
      flatListRef?.current?.scrollToIndex({
        index: 2,
        animated: false,
      });

      cartTabFlex.value = withTiming(4, {duration: 500});
      cartTabColor.value = withTiming(COLORS.primary, {duration: 500});
    } else {
      cartTabFlex.value = withTiming(1, {duration: 500});
      cartTabColor.value = withTiming(COLORS.white, {duration: 500});
    }

    if (selectedDrawerTab === constants.screens.favourite) {
      flatListRef?.current?.scrollToIndex({
        index: 3,
        animated: false,
      });

      favouriteTabFlex.value = withTiming(4, {duration: 500});
      favouriteTabColor.value = withTiming(COLORS.primary, {duration: 500});
    } else {
      favouriteTabFlex.value = withTiming(1, {duration: 500});
      favouriteTabColor.value = withTiming(COLORS.white, {duration: 500});
    }

    if (selectedDrawerTab === constants.screens.notification) {
      flatListRef?.current?.scrollToIndex({
        index: 4,
        animated: false,
      });

      notificationTabFlex.value = withTiming(4, {duration: 500});
      notificationTabColor.value = withTiming(COLORS.primary, {duration: 500});
    } else {
      notificationTabFlex.value = withTiming(1, {duration: 500});
      notificationTabColor.value = withTiming(COLORS.white, {duration: 500});
    }
  }, [selectedDrawerTab]);

  // tab animation end

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      {/* Header */}

      <Header title={selectedDrawerTab.toUpperCase()} />

      {/* Contents */}
      <View style={styles.contentWrap}>
        <Text>MainLayout</Text>
        <FlatList
          ref={flatListRef}
          horizontal
          scrollEnabled={false}
          pagingEnabled
          snapToAlignment="center"
          snapToInterval={SIZES.width}
          showsHorizontalScrollIndicator={false}
          data={constants.bottom_tabs}
          keyExtractor={item => `${item.id}`}
          renderItem={({item, index}) => {
            return (
              <View style={{height: SIZES.height, width: SIZES.width}}>
                {item.label === constants.screens.home && <Home />}
                {item.label === constants.screens.search && <Search />}
                {item.label === constants.screens.cart && <CartTab />}
                {item.label === constants.screens.favourite && <Favourite />}
                {item.label === constants.screens.notification && (
                  <Notification />
                )}
              </View>
            );
          }}
        />
      </View>

      {/* Footer */}
      <View style={styles.footerWrap}>
        {/* Shadow */}
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 0, y: Platform.OS === 'ios' ? 4 : 1}}
          colors={[COLORS.transparent, COLORS.lightGray1]}
          style={styles.shadowStyle}
        />
        {/* Tabbs */}
        <View style={styles.bottomTabWrap}>
          <TabButton
            label={constants.screens.home}
            icon={icons.home}
            isFocused={selectedDrawerTab === constants.screens.home}
            outerContainerStyle={homeFlexStyle}
            innerContainerStyle={homeColorStyle}
            onPress={() => dispatch(changeDrawerTab(constants.screens.home))}
          />

          <TabButton
            label={constants.screens.search}
            icon={icons.search}
            isFocused={selectedDrawerTab === constants.screens.search}
            outerContainerStyle={searchFlexStyle}
            innerContainerStyle={searchColorStyle}
            onPress={() => dispatch(changeDrawerTab(constants.screens.search))}
          />

          <TabButton
            label={constants.screens.cart}
            icon={icons.cart}
            isFocused={selectedDrawerTab === constants.screens.cart}
            outerContainerStyle={cartFlexStyle}
            innerContainerStyle={cartColorStyle}
            onPress={() => dispatch(changeDrawerTab(constants.screens.cart))}
          />

          <TabButton
            label={constants.screens.favourite}
            icon={icons.favourite}
            isFocused={selectedDrawerTab === constants.screens.favourite}
            outerContainerStyle={favouriteFlexStyle}
            innerContainerStyle={favouriteColorStyle}
            onPress={() =>
              dispatch(changeDrawerTab(constants.screens.favourite))
            }
          />
          <TabButton
            label={constants.screens.notification}
            icon={icons.notification}
            isFocused={selectedDrawerTab === constants.screens.notification}
            outerContainerStyle={notificationFlexStyle}
            innerContainerStyle={notificationColorStyle}
            onPress={() =>
              dispatch(changeDrawerTab(constants.screens.notification))
            }
          />
        </View>
      </View>
    </Animated.View>
  );
};

export default MainLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  contentWrap: {
    flex: 1,
  },
  footerWrap: {
    height: 100,
    justifyContent: 'flex-end',
  },
  shadowStyle: {
    position: 'absolute',
    top: -20,
    left: 0,
    right: 0,
    height: 100,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  bottomTabWrap: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: SIZES.radius,
    paddingBottom: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: COLORS.white,
  },
});
