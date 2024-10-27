import React, {useEffect, useState, useRef} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Animated,
  ScrollView,
  TouchableWithoutFeedback,
  Modal,
} from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import {COLORS, FONTS, SIZES} from '../constants';

const TwoPointSider = ({values, min, max, prefix, postfix, onValuesChange}) => {
  return (
    <MultiSlider
      values={values}
      sliderLength={SIZES.width - SIZES.padding * 2 - 20}
      min={min}
      max={max}
      step={1}
      markerOffsetY={20}
      selectedStyle={{
        backgroundColor: COLORS.primary,
      }}
      trackStyle={{
        height: 10,
        borderRadius: 10,
        backgroundColor: COLORS.lightGray2,
      }}
      minMarkerOverlapDistance={50}
      customMarker={e => {
        return (
          <View style={styles.markerWrap}>
            <View style={[styles.markerStyle, styles.shadow]} />

            <Text style={styles.distanceText}>
              {prefix}
              {e.currentValue} {postfix}
            </Text>
          </View>
        );
      }}
      onValuesChange={values => onValuesChange(values)}
    />
  );
};

export default TwoPointSider;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 3},
    shadowRadius: 1,
    shadowOpacity: 0.5,
    elevation: 4,
  },
  markerWrap: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  markerStyle: {
    height: 30,
    width: 30,
    borderRadius: 15,
    borderWidth: 4,
    borderColor: COLORS.white,
    backgroundColor: COLORS.primary,
  },
  distanceText: {
    marginTop: 5,
    color: COLORS.darkGray,
    ...FONTS.body3,
  },
});
