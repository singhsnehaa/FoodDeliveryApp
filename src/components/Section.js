import React, {Children} from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import {COLORS, FONTS, SIZES, icons, constants, dummyData} from '../constants';

const Section = ({title, onPress, children}) => {
  return (
    <View>
      {/* Header */}
      <View style={styles.headerContainer}>
        <Text style={{flex: 1, ...FONTS.h3}}>{title}</Text>
        <TouchableOpacity onPress={onPress}>
          <Text style={{color: COLORS.primary, ...FONTS.body3}}>Show All</Text>
        </TouchableOpacity>
      </View>
      {/* Content */}
      {children}
    </View>
  );
};

export default Section;
const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    marginHorizontal: SIZES.padding,
    marginTop: 30,
    marginBottom: 20,
  },
});
