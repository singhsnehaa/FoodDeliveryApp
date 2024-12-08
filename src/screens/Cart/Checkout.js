import React, {useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {COLORS, FONTS, SIZES, icons, images, dummyData} from '../../constants';
import {
  CardItem,
  FooterTotal,
  FormInput,
  Header,
  IconButton,
} from '../../components';

const Checkout = ({navigation, route}) => {
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    const {selectedCard} = route?.params;
    setSelectedCard(selectedCard);
  }, []);

  const renderHeader = () => {
    return (
      <Header
        title={'Checkout'}
        containerStyle={styles.headerContainer}
        leftComponent={
          <IconButton
            containerStyle={styles.headerIconContainer}
            icon={icons.back}
            iconStyle={styles.headerIconStyle}
            onPress={() => navigation.goBack()}
          />
        }
        rightComponent={<View style={{width: 40}} />}
      />
    );
  };

  const renderMyCard = () => {
    return (
      <View>
        {selectedCard &&
          dummyData.myCards.map((item, index) => {
            return (
              <CardItem
                key={`MyCard-${item.id}`}
                isSelected={
                  `${selectedCard?.key}-${selectedCard?.id}` ==
                  `MyCard-${item.id}`
                }
                item={item}
                onPress={() => setSelectedCard({...item, key: 'MyCard'})}
              />
            );
          })}
      </View>
    );
  };

  const renderDeliveryAddress = () => {
    return (
      <View style={{marginTop: SIZES.padding}}>
        <Text style={{...FONTS.h3}}>Delivery Address</Text>
        <View style={styles.deliveryContainer}>
          <Image
            source={icons.location}
            style={{width: 40, height: 40, tintColor: COLORS.darkGray2}}
          />
          <Text
            style={{marginLeft: SIZES.radius, width: '85%', ...FONTS.body3}}>
            300 Post Street San Farmcisco,CA
          </Text>
        </View>
      </View>
    );
  };

  const renderCoupon = () => {
    return (
      <View style={{marginTop: SIZES.padding}}>
        <Text style={{...FONTS.h3}}>Add Coupon</Text>

        {/* Card Number  */}
        <FormInput
          inputContainerStyle={styles.formInputStyle}
          placeholder={'Coupon code'}
          appendComponent={
            <View style={styles.couponImgBbox}>
              <Image source={icons.discount} style={{width: 40, height: 40}} />
            </View>
          }
        />
      </View>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      {/* Header */}
      {renderHeader()}

      {/* body */}
      <KeyboardAwareScrollView
        keyboardDismissMode="on-drag"
        extraScrollHeight={-200}
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: SIZES.padding,
          paddingBottom: 20,
        }}>
        {/* My Card section */}
        {renderMyCard()}

        {/* Delivery section */}
        {renderDeliveryAddress()}

        {/* Coupon section */}
        {renderCoupon()}
      </KeyboardAwareScrollView>

      {/* footer */}
      <FooterTotal
        subbTotal={37.97}
        shippingFee={0.0}
        total={37.97}
        onPress={() => navigation.replace('Success')}
      />
    </View>
  );
};

export default Checkout;
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

  deliveryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: SIZES.radius,
    paddingVertical: SIZES.radius,
    paddingHorizontal: SIZES.padding,
    bborderW: 2,
    borderRadius: SIZES.radius,
    borderColor: COLORS.lightGray2,
  },
  formInputStyle: {
    marginTop: 0,
    paddingLeft: SIZES.padding,
    paddingRight: 0,
    borderWidth: 2,
    borderColor: COLORS.lightGray2,
    backgroundColor: COLORS.white,
    overflow: 'hidden',
  },
  couponImgBbox: {
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
  },
});
