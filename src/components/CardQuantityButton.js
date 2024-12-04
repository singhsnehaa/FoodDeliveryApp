import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import {COLORS, FONTS, SIZES, icons, constants, dummyData} from '../constants';

const CardQuantityButton = ({containerStyle, quanty, iconStyle, onPress}) => {
  return (
    <TouchableOpacity
      style={{...styles.container, ...containerStyle}}
      onPress={onPress}>
      <Image
        source={icons.cart}
        style={{
          width: 20,
          height: 20,
          tintColor: COLORS.black,
          ...iconStyle,
        }}
      />
      <View style={styles.quantyWrap}>
        <Text style={styles.quantyStyle}>{quanty}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CardQuantityButton;
const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.lightOrange2,
  },
  quantyWrap: {
    position: 'absolute',
    top: 5,
    right: 5,
    height: 15,
    width: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.primary,
  },
  quantyStyle: {
    lineHeight: 0,
    fontSize: 10,
    color: COLORS.white,
    position: 'absolute',
    ...FONTS.body5,
  },
});
