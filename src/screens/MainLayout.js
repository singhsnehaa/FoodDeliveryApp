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

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      {/* Header */}

      <Header title={selectedDrawerTab.toUpperCase()} />

      {/* Contents */}
      <View style={styles.contentWrap}>
        <Text>MainLayout</Text>
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
            onPress={() => dispatch(changeDrawerTab(constants.screens.home))}
          />

          <TabButton
            label={constants.screens.search}
            icon={icons.search}
            isFocused={selectedDrawerTab === constants.screens.search}
            onPress={() => dispatch(changeDrawerTab(constants.screens.search))}
          />

          <TabButton
            label={constants.screens.cart}
            icon={icons.cart}
            isFocused={selectedDrawerTab === constants.screens.cart}
            onPress={() => dispatch(changeDrawerTab(constants.screens.cart))}
          />

          <TabButton
            label={constants.screens.favourite}
            icon={icons.favourite}
            isFocused={selectedDrawerTab === constants.screens.favourite}
            onPress={() =>
              dispatch(changeDrawerTab(constants.screens.favourite))
            }
          />
          <TabButton
            label={constants.screens.notification}
            icon={icons.notification}
            isFocused={selectedDrawerTab === constants.screens.notification}
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
