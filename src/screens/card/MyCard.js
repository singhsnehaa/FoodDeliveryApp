import React, {useState} from 'react';
import {View, Text, ScrollView, Image, StyleSheet} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';

import {COLORS, FONTS, SIZES, icons, images, dummyData} from '../../constants';
import {
  CardItem,
  CardQuantityButton,
  FooterTotal,
  Header,
  IconButton,
  StepperInput,
  TextButton,
} from '../../components';
import SignIn from '../authentication/SignIn';

const MyCard = ({navigation}) => {
  const [selectedCard, setSelectedCard] = useState(null);

  const renderHeader = () => {
    return (
      <Header
        title={'My Card'}
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
        {dummyData.myCards.map((item, index) => {
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

  function renderAddNewCard() {
    return (
      <View style={{marginTop: SIZES.padding}}>
        <Text style={{...FONTS.h3}}>Add New Card</Text>
        {dummyData.allCards.map((item, index) => {
          return (
            <CardItem
              key={`NewCard-${item.id}`}
              isSelected={
                `${selectedCard?.key}-${selectedCard?.id}` ==
                `NewCard-${item.id}`
              }
              item={item}
              onPress={() => setSelectedCard({...item, key: 'NewCard'})}
            />
          );
        })}
      </View>
    );
  }

  function renderFooter() {
    const handleSubmit = () => {
      if (selectedCard?.key == 'NewCard') {
        navigation.navigate('AddCard', {selectedCard: selectedCard});
      } else {
        navigation.navigate('Checkout', {selectedCard: selectedCard});
      }
    };
    return (
      <View style={styles.footerContainer}>
        <TextButton
          label={selectedCard?.key == 'NewCard' ? 'Add' : 'Place your Order'}
          disabled={selectedCard == null}
          buttonContainerStyle={{
            ...styles.saveCardBtn,
            backgroundColor:
              selectedCard == null ? COLORS.gray : COLORS.primary,
          }}
          onPress={() => handleSubmit()}
        />
      </View>
    );
  }

  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      {/* Header */}
      {renderHeader()}

      {/* Card List */}
      <ScrollView contentContainerStyle={styles.cardContainer}>
        {/* my card */}
        {renderMyCard()}

        {/* add new card */}
        {renderAddNewCard()}
      </ScrollView>

      {/* Footer */}
      {renderFooter()}
    </View>
  );
};

export default MyCard;
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
  cardContainer: {
    flexGrow: 1,
    marginTop: SIZES.radius,
    paddingHorizontal: SIZES.padding,
    paddingBottom: SIZES.radius,
  },
  footerContainer: {
    paddingTop: SIZES.radius,
    paddingBottom: SIZES.padding,
    paddingHorizontal: SIZES.padding,
  },
  saveCardBtn: {
    height: 60,
    borderRadius: SIZES.radius,
  },
});
