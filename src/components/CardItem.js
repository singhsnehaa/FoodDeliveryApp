import React from 'react';
import {Text, TouchableOpacity, View, Image, StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES, icons, constants, dummyData} from '../constants';

const CardItem = ({item, isSelected, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.container,
        borderColor: isSelected ? COLORS.primary : COLORS.lightGray2,
      }}
      onPress={() => onPress()}>
      {/* Card Image */}
      <View>
        <Image
          source={item.icon}
          resizeMode="center"
          style={{width: 35, height: 35}}
        />
      </View>

      {/* card Name */}
      <Text style={{flex: 1, marginLeft: SIZES.radius, ...FONTS.h3}}>
        {item.name}
      </Text>

      {/* radio bbutton */}
      <Image
        source={isSelected ? icons.check_on : icons.check_off}
        style={{width: 25, height: 25}}
      />
    </TouchableOpacity>
  );
};

export default CardItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 100,
    alignItems: 'center',
    marginTop: SIZES.radius,
    paddingHorizontal: SIZES.padding,
    borderWidth: 2,
    borderRadius: SIZES.radius,
  },
  cardImg: {
    width: 60,
    height: 45,
    alignItems: 'center',
    borderWidth: 2,
    justifyContent: 'center',
    borderColor: COLORS.lightGray2,
    borderRadius: SIZES.radius,
  },
});
