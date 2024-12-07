import React, {useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';

import {COLORS, FONTS, SIZES, icons, images, dummyData} from '../../constants';
import {
  CardQuantityButton,
  FooterTotal,
  Header,
  IconButton,
  StepperInput,
} from '../../components';

const MyCart = ({navigation}) => {
  const [myCartList, setMyCartList] = useState(dummyData.myCart);

  const renderCartList = () => {
    const deleteHandler = id => {
      let newMyCartList = [...myCartList];

      let index = newMyCartList.findIndex(cart => cart.id == id);
      newMyCartList.splice(index, 1);
      setMyCartList(newMyCartList);
    };

    const updateQtyHandler = (newQty, id) => {
      let newMyCartList = myCartList.map(cl =>
        cl.id === id ? {...cl, qty: newQty} : cl,
      );
      setMyCartList(newMyCartList);
    };
    return (
      <SwipeListView
        data={myCartList}
        keyExtractor={item => `${item.id}`}
        contentContainerStyle={{
          marginTop: SIZES.radius,
          paddingHorizontal: SIZES.padding,
          paddingBottom: SIZES.padding * 2,
        }}
        disableRightSwipe={true}
        rightOpenValue={-75}
        renderItem={(data, rowMap) => (
          <View style={{...styles.rowFront, ...styles.cardItemContainer}}>
            {/* Food image */}
            <View style={styles.foodImageBox}>
              <Image
                source={data.item.image}
                resizeMode="contain"
                style={styles.foodImg}
              />
            </View>

            {/* food info */}
            <View style={{flex: 1}}>
              <Text style={{...FONTS.body3}}>{data.item.name}</Text>
              <Text style={{color: COLORS.primary, ...FONTS.h3}}>
                ${data.item.price}
              </Text>
            </View>

            {/* Quantity */}
            <StepperInput
              value={data.item.qty}
              containerStyles={styles.stepperStyle}
              onMinus={() => {
                if (data.item.qty > 1) {
                  updateQtyHandler(data.item.qty - 1, data.item.id);
                }
              }}
              onAdd={() => updateQtyHandler(data.item.qty + 1, data.item.id)}
            />
          </View>
        )}
        renderHiddenItem={(data, rowMap) => (
          <IconButton
            containerStyle={{
              ...styles.iconButtonContainer,
              ...styles.cardItemContainer,
            }}
            icon={icons.delete_icon}
            iconStyle={{marginRight: 10}}
            onPress={() => deleteHandler(data.item.id)}
          />
        )}
        // leftOpenValue={75}
      />
    );
  };

  const renderHeader = () => {
    return (
      <Header
        title={'My Cart'}
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

  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      {/* Header */}
      {renderHeader()}

      {/* Cart List */}
      {renderCartList()}

      {/* Foter tatal */}
      <FooterTotal
        subbTotal={37.97}
        shippingFee={0.0}
        total={37.97}
        onPress={() => console.log('Place ypur order')}
      />
    </View>
  );
};

export default MyCart;

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
  rowFront: {
    height: 100,
    backgroundColor: COLORS.lightGray2,
  },
  cardItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: SIZES.radius,
    paddingHorizontal: SIZES.radius,
    borderRadius: SIZES.radius,
  },
  foodImageBox: {
    width: 90,
    height: 100,
    marginLeft: -10,
  },
  foodImg: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: 10,
  },
  stepperStyle: {
    height: 50,
    width: 150,
    backgroundColor: COLORS.white,
  },
  iconButtonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: COLORS.primary,
  },
});
