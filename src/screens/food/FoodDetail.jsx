import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Platform,
  ScrollView,
} from 'react-native';
import {
  CardQuantityButton,
  Header,
  IconButton,
  IconLabel,
  TabButton,
  TextButton,
} from '../../components';

import {
  COLORS,
  FONTS,
  SIZES,
  constants,
  icons,
  images,
  dummyData,
} from '../../constants';

const FoodDetail = ({navigation}) => {
  const [foodItem, setFoodItem] = useState(dummyData.vegBiryani);

  const renderHeader = () => {
    return (
      <Header
        title={'Details'}
        containerStyle={styles.headerContainer}
        leftComponent={
          <IconButton
            containerStyle={styles.headerIconContainer}
            icon={icons.back}
            iconStyle={styles.headerIconStyle}
            onPress={() => navigation.goBack()}
          />
        }
        rightComponent={<CardQuantityButton quanty={3} />}
      />
    );
  };

  const renderDetails = () => {
    return (
      <View style={styles.foodDetailContainer}>
        {/* FoodCart */}
        <View style={styles.foodCart}>
          {/* callories & favourite */}
          <View style={styles.innetFoodCart}>
            {/* callories */}
            <View style={{flexDirection: 'row'}}>
              <Image source={icons.calories} style={{height: 30, width: 30}} />
              <Text styles={{color: COLORS.darkGray2, ...FONTS.body4}}>
                {foodItem?.calories} callories
              </Text>
            </View>
            {/* Favourite */}
            <Image
              source={icons.love}
              style={{
                height: 20,
                width: 20,
                tintColor: foodItem?.isFavourite ? COLORS.primary : COLORS.gray,
              }}
            />
          </View>

          {/* Food Images */}
          <Image
            source={foodItem?.image}
            style={{height: 170, width: '100%'}}
            resizeMode="contain"
          />
        </View>

        {/* Food info section */}
        <View style={{marginTop: SIZES.padding}}>
          <Text style={{...FONTS.h1}}>{foodItem?.name}</Text>
          <Text style={styles.foodInfoDesciption}>{foodItem?.description}</Text>

          {/* rating, shipping,& duration */}
          <View style={{flexDirection: 'row', marginTop: SIZES.padding}}>
            {/* ratting */}
            <IconLabel
              label="4.5"
              icon={icons.star}
              containerStyle={{backgroundColor: COLORS.primary}}
              labelStyle={{color: COLORS.white}}
            />
            {/* Duuration */}
            <IconLabel
              label="30 Mins"
              icon={icons.clock}
              iconStyle={{tintColor: COLORS.black}}
              containerStyle={{marginLeft: SIZES.radius, paddingHorizontal: 0}}
            />
            {/* shipping */}
            <IconLabel
              label="Free Shipping"
              icon={icons.dollar}
              iconStyle={{tintColor: COLORS.black}}
              containerStyle={{marginLeft: SIZES.radius, paddingHorizontal: 0}}
            />
          </View>

          {/* Sizes section */}
          <View style={styles.sizeContainer}>
            <Text style={{...FONTS.h3}}> Sizes:</Text>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                marginLeft: SIZES.padding,
              }}>
              {dummyData.sizes.map((item, index) => {
                return (
                  <TextButton
                    key={`Sizes-${index}`}
                    label={item.label}
                    labelStyle={{
                      color: COLORS.gray2,
                      ...FONTS.body3,
                    }}
                    buttonContainerStyle={styles.sizeButtonContainerSty}
                    onPress={() => setDeliveryTime(item.id)}
                  />
                );
              })}
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      {/* Header */}
      {renderHeader()}

      {/* Body */}
      <ScrollView>
        {/* foodDetails sectiom */}
        {renderDetails()}
        {/* restaurent sectiom */}
      </ScrollView>
      {/* Footer */}
    </View>
  );
};

export default FoodDetail;

const styles = StyleSheet.create({
  headerContainer: {
    height: 50,
  },
  headerIconContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: SIZES.radius,
    borderColor: COLORS.gray2,
  },
  headerIconStyle: {
    tintColor: COLORS.gray2,
    width: 20,
    height: 20,
  },
  foodDetailContainer: {
    marginTop: SIZES.radius,
    marginBottom: SIZES.padding,
    paddingHorizontal: SIZES.padding,
  },
  foodCart: {
    height: 190,
    borderRadius: 15,
    backgroundColor: COLORS.lightGray2,
  },
  innetFoodCart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: SIZES.base,
    paddingHorizontal: SIZES.radius,
  },
  foodInfoDesciption: {
    marginTop: SIZES.base,
    color: COLORS.darkGray,
    textAlign: 'justify',
    ...FONTS.body3,
  },
  sizeContainer: {
    flexDirection: 'row',
    marginTop: SIZES.padding,
    alignItems: 'center',
  },
  sizeButtonContainerSty: {
    width: 55,
    height: 55,
    margin: SIZES.base,
    borderWidth: 1,
    borderRadius: SIZES.radius,
    borderColor: COLORS.gray2,
    backgroundColor: null,
  },
});
