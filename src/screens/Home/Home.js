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
import {HorizontalFoodCart, Section, VerticalFoodCart} from '../../components';

const Home = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(1);
  const [selectedMenuType, setSelectedMenuType] = useState(1);
  const [menuList, setMenuList] = useState([]);
  const [recommended, setRecommend] = useState([]);
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    handleChangeCategory(selectedCategoryId, selectedMenuType);
  }, []);

  // handler ChangeCategory
  const handleChangeCategory = (categoryId, menuTypeId) => {
    // retrive the Popular menu
    let selectedPopular = dummyData.menu.find(a => a.name === 'Popular');

    // retrive the Recommended menu
    let selectedRecommend = dummyData.menu.find(a => a.name === 'Recommended');

    // Find the menu based on menu type Id
    let selectedMenu = dummyData.menu.find(a => a.id === menuTypeId);

    // set the Popular menu based on the category Id
    setPopular(
      selectedPopular?.list.filter(a => a.categories.includes(categoryId)),
    );

    // set the recommended menu based on the category Id
    setRecommend(
      selectedRecommend?.list.filter(a => a.categories.includes(categoryId)),
    );

    // set the menu bbased on the category Id
    setMenuList(
      selectedMenu?.list.filter(a => a.categories.includes(categoryId)),
    );
  };

  const renderFoodCategories = () => {
    return (
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={dummyData.categories}
        keyExtractor={item => `${item.id}`}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              style={{
                ...styles.foodCategoryContainer,
                marginLeft: index == 0 ? SIZES.padding : SIZES.radius,
                marginRight:
                  index == dummyData.categories.length - 1 ? SIZES.padding : 0,
                backgroundColor:
                  selectedCategoryId == item.id
                    ? COLORS.primary
                    : COLORS.lightGray2,
              }}
              onPress={() => {
                setSelectedCategoryId(item.id);
                handleChangeCategory(item.id, selectedMenuType);
              }}>
              <Image source={item.icon} style={styles.categoryFoodImg} />
              <Text
                style={{
                  ...FONTS.h3,
                  alignSelf: 'center',
                  marginRight: SIZES.base,
                  color:
                    selectedCategoryId == item.id
                      ? COLORS.white
                      : COLORS.darkGray,
                }}>
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    );
  };

  const renderPopularSection = () => {
    return (
      <Section
        title="Popular Near You"
        onPress={() => console.log('Show all Popular section')}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={popular}
          keyExtractor={item => `${item.id}`}
          renderItem={({item, index}) => {
            return (
              <VerticalFoodCart
                item={item}
                containerStyle={{
                  marginLeft: index == 0 ? SIZES.padding : 18,
                  marginRight:
                    index == recommended.length - 1 ? SIZES.padding : 0,
                }}
                onPress={() => console.log('Popular FoodCart')}
              />
            );
          }}
        />
      </Section>
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
            {/* Food catefories section */}
            {renderFoodCategories()}

            {/* Render Popular section */}
            {renderPopularSection()}

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
  foodCategoryContainer: {
    flexDirection: 'row',
    height: 55,
    marginTop: SIZES.padding,
    paddingHorizontal: 8,
    borderRadius: SIZES.radius,
  },
  categoryFoodImg: {
    marginTop: 5,
    height: 50,
    width: 50,
  },
});
