import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import {COLORS, FONTS, SIZES, icons, constants, dummyData} from '../constants';

const HorizontalFoodCart = ({item}) => {
  return (
    <TouchableOpacity style={styles.foodCartContainer}>
      {/* Image */}
      <Image source={item.image} style={styles.itemStyle} />

      {/* Info */}
      <View style={{flex: 1}}>
        <Text style={{...FONTS.h3, fontSize: 17, fontWeight: 'bold'}}>
          {item.name}
        </Text>
        <Text style={{...FONTS.body4, color: COLORS.darkGray2}}>
          {item.description}
        </Text>
        <Text style={{...FONTS.h2, marginTop: SIZES.base, fontWeight: 'bold'}}>
          ${item.price}
        </Text>
      </View>

      {/* calories */}
      <View style={styles.caloriesBox}>
        <Image source={icons.calories} style={styles.caloriesImg} />
        <Text style={{...FONTS.body5, color: COLORS.darkGray2}}>
          {item.calories} Calories
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default HorizontalFoodCart;
const styles = StyleSheet.create({
  foodCartContainer: {
    flexDirection: 'row',
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.lightGray2,
    height: 130,
    alignItems: 'center',
    marginHorizontal: SIZES.padding,
    marginBottom: SIZES.radius,
  },
  itemStyle: {
    marginTop: 20,
    height: 110,
    width: 110,
  },
  caloriesBox: {
    flexDirection: 'row',
    position: 'absolute',
    top: 5,
    right: SIZES.radius,
  },
  caloriesImg: {
    height: 30,
    width: 30,
  },
});
