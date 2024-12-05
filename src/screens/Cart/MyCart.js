import React, {useState, useRef} from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';

import {COLORS, FONTS, SIZES, icons, images, dummyData} from '../../constants';
import {CardQuantityButton, Header, IconButton} from '../../components';

const MyCart = ({navigation}) => {
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
});
