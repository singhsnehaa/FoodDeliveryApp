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

const MyCard = () => {
  return (
    <View>
      <Text>My card</Text>
    </View>
  );
};

export default MyCard;
