import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {COLORS, FONTS, icons, SIZES} from '../constants';
import IconButton from './IconButton';

const StepperInput = ({value = 1, containerStyles, onAdd, onMinus}) => {
  return (
    <View style={{...styles.container, ...containerStyles}}>
      {/* minus button */}
      <IconButton
        containerStyle={styles.minusContainer}
        icon={icons.minus}
        iconStyle={{
          ...styles.minusIconStyle,
          tintColor: value >= 1 ? COLORS.orange : COLORS.gray,
        }}
        onPress={() => onMinus()}
      />

      <View style={styles.vlaueArea}>
        <Text style={{...FONTS.h2}}>{value}</Text>
      </View>

      {/* add button */}
      <IconButton
        containerStyle={styles.minusContainer}
        icon={icons.plus}
        iconStyle={{...styles.minusIconStyle, tintColor: COLORS.orange}}
        onPress={() => onAdd()}
      />
    </View>
  );
};

export default StepperInput;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 60,
    width: 130,
    backgroundColor: COLORS.lightGray2,
    borderRadius: SIZES.radius,
  },
  minusContainer: {
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  vlaueArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  minusIconStyle: {
    width: 25,
    height: 25,
  },
});
