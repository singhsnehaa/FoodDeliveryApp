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
import {HorizontalFoodCart, Section} from '../../components';

const Home = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(1);
  const [selectedMenuType, setSelectedMenuType] = useState(1);
  const [menuList, setMenuList] = useState([]);
  const [recommended, setRecommend] = useState([]);

  useEffect(() => {
    handleChangeCategory(selectedCategoryId, selectedMenuType);
  }, []);

  // handler ChangeCategory
  const handleChangeCategory = (categoryId, menuTypeId) => {
    // retrive the Recommended menu
    let selectedRecommend = dummyData.menu.find(a => a.name === 'Recommended');

    // Find the menu based on menu type Id
    let selectedMenu = dummyData.menu.find(a => a.id === menuTypeId);

    // set the recommended menu based on the category Id
    setRecommend(
      selectedRecommend?.list.filter(a => a.categories.includes(categoryId)),
    );

    // set the menu bbased on the category Id
    setMenuList(
      selectedMenu?.list.filter(a => a.categories.includes(categoryId)),
    );
  };

  const renderRecommendedSection = () => {
    return (
      <Section
        title="Recommended"
        onPress={() => console.log('Show all recommended')}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={recommended}
          keyExtractor={item => `${item.id}`}
          renderItem={({item, index}) => {
            return (
              <HorizontalFoodCart
                item={item}
                containerStyle={{
                  height: 180,
                  width: SIZES.width * 0.85,
                  marginLeft: index == 0 ? SIZES.padding : 18,
                  marginRight:
                    index == recommended.length - 1 ? SIZES.padding : 0,
                  paddingRight: SIZES.radius,
                  alignItems: 'center',
                }}
                imageStyle={styles.recommendFoodImageStyle}
                onPress={() => console.log('Recommended FoodCart')}
              />
            );
          }}
        />
      </Section>
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
            {/* Recomanded Section */}
            {renderRecommendedSection()}
            {/* menu Type */}
            {renderMenuType()}
          </View>
        }
        renderItem={({item, index}) => {
          return (
            <HorizontalFoodCart
              item={item}
              containerStyle={styles.foodCartContainer}
              imageStyle={styles.foodImageStyle}
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
  foodCartContainer: {
    height: 130,
    alignItems: 'center',
    marginHorizontal: SIZES.padding,
    marginBottom: SIZES.radius,
  },
  foodImageStyle: {
    marginTop: 20,
    height: 110,
    width: 110,
  },
  recommendFoodImageStyle: {
    marginTop: 35,
    height: 150,
    width: 150,
  },
});
