import React, {useEffect, useRef, useState} from 'react';
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
import {HorizontalFoodCart} from '../../components';

const Home = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(1);
  const [selectedMenuType, setSelectedMenuType] = useState(1);
  const [menuList, setMenuList] = useState([]);

  useEffect(() => {
    handleChangeCategory(selectedCategoryId, selectedMenuType);
  }, []);

  // handler ChangeCategory
  const handleChangeCategory = (categoryId, menuTypeId) => {
    // Find the menu based on menu type
    let selectedMenu = dummyData.menu.find(a => a.id === menuTypeId);
    setMenuList(
      selectedMenu.list.filter(a => a.categories.includes(categoryId)),
    );
  };

  const renderMenuType = () => {
    return (
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={dummyData.menu}
        keyExtractor={item => `${item.id}`}
        contentContainerStyle={{marginTop: 30, marginBottom: 20}}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                setSelectedMenuType(item.id);
                handleChangeCategory(selectedCategoryId, item.id);
              }}
              style={{
                marginLeft: SIZES.padding,
                marginRight:
                  index == dummyData.menu.length - 1 ? SIZES.padding : 0,
              }}>
              <Text
                style={{
                  ...FONTS.h3,
                  color:
                    selectedMenuType == item.id ? COLORS.primary : COLORS.black,
                }}>
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    );
  };

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
      <FlatList
        showsVerticalScrollIndicator={false}
        data={menuList}
        keyExtractor={item => `${item.id}`}
        ListHeaderComponent={
          <View>
            {/* menu Type */}
            {renderMenuType()}
          </View>
        }
        renderItem={({item, index}) => {
          return (
            <HorizontalFoodCart
              item={item}
              onPress={() => console.log('HorizontalFoodCart')}
            />
          );
        }}
      />
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
