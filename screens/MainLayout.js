import React, {useEffect, useRef} from 'react';
import {Text, StyleSheet} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useDerivedValue,
  interpolate,
  withTiming,
} from 'react-native-reanimated';
import {useDrawerStatus} from '@react-navigation/drawer';
import {COLORS, FONTS, SIZES, icons, constants, dummyData} from '../constants';

const MainLayout = ({navigation}) => {
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

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <Text>MainLayout</Text>
    </Animated.View>
  );
};

export default MainLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});
