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
} from '../../components';

const MyCard = () => {
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
              key={`MyCard- ${item.id}`}
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

  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      {/* Header */}
      {renderHeader()}

      {/* Card List */}
      <ScrollView contentContainerStyle={styles.cardContainer}>
        {/* my card */}
        {renderMyCard()}
        {/* add new card */}
      </ScrollView>

      {/* Foter tatal */}
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
});
