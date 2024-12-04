import React from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {COLORS} from '../constants';

const LineDivider = ({lineStyle}) => {
  return <View style={{...styles.container, ...lineStyle}}></View>;
};

export default LineDivider;
const styles = StyleSheet.create({
  container: {
    height: 2,
    width: '100%',
    backgroundColor: COLORS.lightGray2,
  },
});
