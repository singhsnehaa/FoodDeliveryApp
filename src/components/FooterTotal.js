import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS, FONTS, icons, SIZES} from '../constants';
import IconButton from './IconButton';
import LineDivider from './LineDivider';
import TextButton from './TextButton';

const FooterTotal = ({subbTotal, shippingFee, total, onPress}) => {
  return (
    <View style={styles.container}>
      {/* shodow */}

      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        colors={[COLORS.transparent, COLORS.lightGray1]}
        style={styles.shadowStyle}
      />
      {/* order details */}
      <View style={styles.orderContainer}>
        {/* SubTotal */}
        <View style={{flexDirection: 'row'}}>
          <Text style={{flex: 1, ...FONTS.body3}}>SubTotal</Text>
          <Text style={{fontWeight: 800, ...FONTS.h3}}>
            ${subbTotal.toFixed(2)}
          </Text>
        </View>

        {/* shipping fee */}
        <View style={styles.shippingContainer}>
          <Text style={{flex: 1, ...FONTS.body3}}>Sheeping Fee</Text>
          <Text style={{fontWeight: 800, ...FONTS.h3}}>
            ${shippingFee.toFixed(2)}
          </Text>
        </View>

        {/* Line*/}
        <LineDivider />

        {/* Total */}
        <View style={{flexDirection: 'row', marginTop: SIZES.padding}}>
          <Text style={{flex: 1, fontWeight: 800, ...FONTS.body3}}>
            Total :
          </Text>
          <Text style={{fontWeight: 800, ...FONTS.h3}}>
            ${total.toFixed(2)}
          </Text>
        </View>

        {/* button */}

        <TextButton
          label={'Place your Order'}
          buttonContainerStyle={styles.buttonContainer}
          onPress={() => onPress}
        />
      </View>
    </View>
  );
};

export default FooterTotal;
const styles = StyleSheet.create({
  shippingContainer: {
    flexDirection: 'row',
    marginTop: SIZES.base,
    marginBottom: SIZES.padding,
  },
  shadowStyle: {
    position: 'absolute',
    top: -15,
    left: 0,
    right: 0,
    height: Platform.OS === 'ios' ? 200 : 50,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  orderContainer: {
    padding: SIZES.padding,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: COLORS.white,
  },
  sunTotalConatiner: {
    flexDirection: 'row',
  },
  buttonContainer: {
    height: 60,
    marginTop: SIZES.padding,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.primary,
  },
});
