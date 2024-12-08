import React, {useState, useEffect} from 'react';
import {View, Text, ImageBackground, Image, StyleSheet} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {COLORS, FONTS, SIZES, icons, images, dummyData} from '../../constants';
import {
  FormInput,
  FormInputCheck,
  Header,
  IconButton,
  RadioButton,
  TextButton,
} from '../../components';

const AddCard = ({navigation, route}) => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [formData, setFormData] = useState({
    cardNumber: '',
    cardNumberError: '',
    cardHolderName: '',
    cardHolderNameError: '',
    cardExpiryDate: '',
    cardExpiryDateError: '',
    cardCvv: '',
    cardCvvError: '',
  });
  const [isRemember, setIsRemember] = useState(false);

  const {
    cardNumber,
    cardNumberError,
    cardHolderName,
    cardHolderNameError,
    cardExpiryDate,
    cardExpiryDateError,
    cardCvv,
    cardCvvError,
  } = formData;

  useEffect(() => {
    const {selectedCard} = route?.params;
    setSelectedCard(selectedCard);
  }, []);

  const isEnabledAddCard = () => {
    return (
      !!cardNumber &&
      !!cardHolderName &&
      !!cardExpiryDate &&
      !!cardCvv &&
      !!!cardNumber &&
      !!!cardHolderNameError &&
      !!!cardExpiryDateError &&
      !!!cardCvv
    );
  };

  const handleForm = (type, value) => {
    switch (type) {
      case 'cardNumber': {
        const withSpaceAfterFourDigit = value
          .replace(/\s/g, '')
          .replace(/(\d{4})/g, '$1 ')
          .trim();

        if (withSpaceAfterFourDigit.length < 19) {
          setFormData({
            ...formData,
            cardNumber: withSpaceAfterFourDigit,
            cardNumberError: 'Invalid Input',
          });
        } else {
          setFormData({
            ...formData,
            cardNumber: withSpaceAfterFourDigit,
            cardNumberError: '',
          });
        }
        break;
      }

      case 'cardHolderName': {
        if (cardHolderName.length < 1) {
          setFormData({
            ...formData,
            cardHolderName: value,
            cardHolderNameError: 'Invalid Input',
          });
        } else {
          setFormData({
            ...formData,
            cardHolderName: value,
            cardHolderNameError: '',
          });
        }
        break;
      }

      case 'cardExpiryDate': {
        if (cardExpiryDate.length < 4) {
          setFormData({
            ...formData,
            cardExpiryDate: value,
            cardExpiryDateError: 'Invalid Input',
          });
        } else {
          setFormData({
            ...formData,
            cardExpiryDate: value,
            cardExpiryDateError: '',
          });
        }
        break;
      }

      case 'cardCvv': {
        if (cardCvv.length < 2) {
          setFormData({
            ...formData,
            cardCvv: value,
            cardCvvError: 'Invalid Input',
          });
        } else {
          setFormData({
            ...formData,
            cardCvv: value,
            cardCvvError: '',
          });
        }
      }
    }
  };

  const renderHeader = () => {
    return (
      <Header
        title={'Add Card'}
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

  const renderCard = () => {
    return (
      <ImageBackground source={images.card} style={styles.bgImageStyle}>
        {/* Logo */}
        <Image
          source={selectedCard?.icon}
          style={styles.logoStyle}
          resizeMode="contain"
        />

        {/* Details */}
        <View style={styles.detailContainer}>
          <Text style={{...FONTS.h3, color: COLORS.white}}>
            {cardHolderName}
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={{...FONTS.body3, flex: 1, color: COLORS.white}}>
              {cardNumber}
            </Text>
            <Text style={{...FONTS.body3, color: COLORS.white}}>
              {cardExpiryDate}
            </Text>
          </View>
        </View>
      </ImageBackground>
    );
  };

  const renderForm = () => {
    return (
      <View style={{marginTop: SIZES.padding * 2}}>
        {/* Card Number  */}
        <FormInput
          label="Card Number"
          keyboardType="number-pad"
          value={cardNumber}
          maxLength={19}
          onChange={cardNumber => handleForm('cardNumber', cardNumber)}
          errorMsg={!!cardNumber && cardNumberError}
          appendComponent={
            !!cardNumber && (
              <FormInputCheck value={cardNumber} error={cardNumberError} />
            )
          }
        />

        {/* Card holder name   */}
        <FormInput
          label="Card Holder Name"
          value={cardHolderName}
          containerStyle={{marginTop: SIZES.radius}}
          onChange={cardHolderName =>
            handleForm('cardHolderName', cardHolderName)
          }
          errorMsg={!!cardHolderName && cardHolderNameError}
          appendComponent={
            !!cardHolderName && (
              <FormInputCheck
                value={cardHolderName}
                error={cardHolderNameError}
              />
            )
          }
        />

        <View style={{flexDirection: 'row', marginTop: SIZES.radius}}>
          {/* Expire Date   */}
          <FormInput
            label="Card Expire Date"
            value={cardExpiryDate}
            containerStyle={{flex: 1}}
            onChange={cardExpiryDate =>
              handleForm('cardExpiryDate', cardExpiryDate)
            }
            errorMsg={!!cardExpiryDate && cardExpiryDateError}
            appendComponent={
              !!cardExpiryDate && (
                <FormInputCheck
                  value={cardExpiryDate}
                  error={cardExpiryDateError}
                />
              )
            }
          />

          {/* Cvv */}
          <FormInput
            label="CVV"
            value={cardCvv}
            containerStyle={{flex: 1, marginLeft: SIZES.radius}}
            onChange={cardCvv => handleForm('cardCvv', cardCvv)}
            errorMsg={!!cardCvv && cardCvvError}
            appendComponent={
              !!cardCvv && (
                <FormInputCheck value={cardCvv} error={cardCvvError} />
              )
            }
          />
        </View>

        {/* radio section */}
        <View style={{alignItems: 'flex-start', marginTop: SIZES.padding}}>
          <RadioButton
            label="Remember this card Detail"
            isSelected={isRemember}
            onPress={() => setIsRemember(!isRemember)}
          />
        </View>
      </View>
    );
  };

  const renderFooter = () => {
    return (
      <View style={styles.footerContainer}>
        <TextButton
          label={'Add Card'}
          buttonContainerStyle={{
            ...styles.saveCardBtn,
            backgroundColor: isEnabledAddCard()
              ? COLORS.primary
              : COLORS.transparentPrimray,
          }}
          disabled={!isEnabledAddCard()}
          onPress={() => navigation.goBack()}
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
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: SIZES.padding,
        }}>
        {/* Card section */}
        {renderCard()}

        {/* Form section */}
        {renderForm()}
      </KeyboardAwareScrollView>

      {/* footer */}
      {renderFooter()}
    </View>
  );
};

export default AddCard;
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
  bgImageStyle: {
    width: '100%',
    height: 200,
    marginTop: SIZES.radius,
    overflow: 'hidden',
    borderRadius: SIZES.radius,
  },
  logoStyle: {
    position: 'absolute',
    top: 20,
    right: 20,
    height: 40,
    width: 80,
  },
  detailContainer: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    paddingHorizontal: SIZES.padding,
  },
  footerContainer: {
    paddingTop: SIZES.radius,
    paddingBottom: SIZES.padding,
    paddingHorizontal: SIZES.padding,
  },
  saveCardBtn: {
    height: 60,
    borderRadius: SIZES.radius,
    // backgroundColor: COLORS.primary,
  },
});
