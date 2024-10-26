import React, {useEffect, useRef} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  TextInput,
} from 'react-native';
import {
  COLORS,
  FONTS,
  SIZES,
  icons,
  constants,
  dummyData,
} from '../../constants';

const Home = () => {
  const renderSearch = () => {
    return (
      <View style={styles.searchWrap}>
        {/* icon */}
        <Image
          source={icons.search}
          style={{height: 20, width: 20, tintColor: COLORS.black}}
        />

        {/* Text Input */}
        <TextInput
          style={{flex: 1, marginLeft: SIZES.radius, ...FONTS.body3}}
          placeholder="Search Food"
        />
        {/* Filter bbutton */}
        <TouchableOpacity onPress={() => null}>
          <Image
            source={icons.filter}
            style={{height: 20, width: 20, tintColor: COLORS.black}}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      {/* Search section */}

      {renderSearch()}
      {/* List section */}
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  searchWrap: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    marginHorizontal: SIZES.padding,
    marginVertical: SIZES.base,
    paddingHorizontal: SIZES.radius,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.lightGray2,
  },
});
