import React, {useState, useEffect} from 'react';
import {View, Text, Image, BackHandler, StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES, icons, images, dummyData} from '../../constants';
import {TextButton} from '../../components';

const Success = ({navigation}) => {
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        return true;
      },
    );
    return () => backHandler.remove();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image
          source={images.success}
          resizeMode="contain"
          style={{width: 150, height: 150}}
        />
        <Text style={{marginTop: SIZES.padding, ...FONTS.h1}}>
          Congratulation
        </Text>
        <Text style={styles.successText}>Payment was successfuly made!</Text>
      </View>

      <TextButton
        label="Done"
        buttonContainerStyle={styles.saveCardBtn}
        onPress={() => navigation.navigate('DeliveryStatus')}
      />
    </View>
  );
};

export default Success;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: SIZES.padding,
    backgroundColor: COLORS.white,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  successText: {
    textAlign: 'center',
    marginTop: SIZES.base,
    color: COLORS.darkGray,
    ...FONTS.body3,
  },
  saveCardBtn: {
    height: 55,
    marginBottom: SIZES.padding,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.primary,
  },
});
