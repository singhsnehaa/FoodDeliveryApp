import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import {COLORS, FONTS, SIZES, icons, constants, dummyData} from '../constants';

const VerticalFoodCart = ({item, containerStyle, onPress}) => {
  return (
    <TouchableOpacity
      style={[styles.foodCartContainer, containerStyle]}
      onPress={onPress}>
      {/* Calories & faavourite */}

      <View style={{flexDirection: 'row'}}>
        {/* callories */}
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Image source={icons.calories} style={{height: 30, width: 30}} />
          <Text style={{...FONTS.body5, color: COLORS.darkGray2}}>
            {item.calories} Calories
          </Text>
        </View>

        {/* Favourite */}
        <Image
          source={icons.love}
          style={{
            ...styles.favouriteIcon,
            tintColor: item?.isFavourite ? COLORS.primary : COLORS.gray,
          }}
        />
      </View>

      {/* Image */}
      <View style={styles.foodImgBox}>
        <Image source={item.image} style={styles.foodImg} />
      </View>

      {/* Info */}
      <View style={styles.infoBox}>
        <Text style={{...FONTS.h3}}>{item.name}</Text>
        <Text
          style={{
            ...FONTS.body4,
            textAlign: 'center',
            color: COLORS.darkGray2,
          }}>
          {item.description}
        </Text>
        <Text
          style={{...FONTS.h2, marginTop: SIZES.radius, fontWeight: 'bold'}}>
          ${item.price}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default VerticalFoodCart;
const styles = StyleSheet.create({
  foodCartContainer: {
    width: 200,
    padding: SIZES.radius,
    alignItems: 'center',
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.lightGray2,
  },
  foodImgBox: {
    height: 150,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },

  foodImg: {
    height: '100%',
    width: '100%',
  },
  favouriteIcon: {height: 20, width: 20},
  infoBox: {
    alignItems: 'center',
    marginTop: -20,
  },
});
