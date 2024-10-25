import React, {useEffect, useRef} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useDerivedValue,
  interpolate,
  withTiming,
} from 'react-native-reanimated';
import {useDrawerStatus} from '@react-navigation/drawer';
import {reset, changeDrawerTab} from '../../redux/features/tabsSlice';
import {useDispatch, useSelector} from 'react-redux';
import {COLORS, FONTS, SIZES, icons, constants, dummyData} from '../constants';
import {Home, Search, CartTab, Favourite, Notification} from '../screens';
import {Header} from '../components';

const MainLayout = ({navigation}) => {
  const {selectedDrawerTab} = useSelector(state => state.tabs);

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
    </Animated.View>
  );
};

export default MainLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
  },

  contentWrap: {
    flex: 1,
  },
});
