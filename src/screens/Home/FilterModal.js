import React, {useEffect, useState, useRef} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Animated,
  ScrollView,
  TouchableWithoutFeedback,
  Modal,
} from 'react-native';
import {
  COLORS,
  FONTS,
  SIZES,
  icons,
  constants,
  dummyData,
} from '../../constants';
import {
  IconButton,
  TextButton,
  TextIconButton,
  TwoPointSider,
} from '../../components';

const Section = ({containerStyle, title, children}) => {
  return (
    <View style={{marginTop: SIZES.padding, ...containerStyle}}>
      <Text style={{...FONTS.h3}}>{title}</Text>

      {children}
    </View>
  );
};

const FilterModal = ({isVisible, onClose}) => {
  const [showFilterModal, setShowFilterModal] = useState(isVisible);
  const [deliveryTime, setDeliveryTime] = useState('');
  const [ratings, setRatings] = useState('');
  const [tags, setTags] = useState('');

  const modalAnimatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (showFilterModal) {
      Animated.timing(modalAnimatedValue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(modalAnimatedValue, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start(() => onClose());
    }
  }, [showFilterModal]);

  const modalY = modalAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [SIZES.height, SIZES.height - 680],
  });

  const renderDistance = () => {
    return (
      <Section title={'Distance'}>
        <View style={{alignItems: 'center'}}>
          <TwoPointSider
            values={[3, 10]}
            min={1}
            max={20}
            postFix="km"
            prefix="km"
            onValuesChange={values => console.log(values)}
          />
        </View>
      </Section>
    );
  };

  const renderDeliveryTime = () => {
    return (
      <Section title={'Delivery Time'} containerStyle={{marginTop: 40}}>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginTop: SIZES.radius,
          }}>
          {constants.delivery_time.map((item, index) => {
            return (
              <TextButton
                key={`deliver_time-${index}`}
                label={item.label}
                labelStyle={{
                  color: item.id == deliveryTime ? COLORS.white : COLORS.gray,
                  ...FONTS.body3,
                }}
                buttonContainerStyle={{
                  ...styles.buttonContainerSty,
                  backgroundColor:
                    item.id == deliveryTime
                      ? COLORS.primary
                      : COLORS.lightGray2,
                }}
                onPress={() => setDeliveryTime(item.id)}
              />
            );
          })}
        </View>
      </Section>
    );
  };

  const renderPricingRange = () => {
    return (
      <Section title={'Pricing Range'}>
        <View style={{alignItems: 'center'}}>
          <TwoPointSider
            values={[10, 50]}
            min={1}
            max={100}
            postFix=""
            prefix="$"
            onValuesChange={values => console.log(values)}
          />
        </View>
      </Section>
    );
  };

  const renderRatings = () => {
    return (
      <Section title={'Ratings'} containerStyle={{marginTop: 40}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          {constants.ratings.map((item, index) => {
            return (
              <TextIconButton
                key={`Ratings-${index}`}
                label={item.label}
                labelStyle={{
                  color: item.id == ratings ? COLORS.white : COLORS.gray,
                  ...FONTS.body3,
                }}
                icon={icons.star}
                containerStyle={{
                  ...styles.ratingContainerStyle,
                  backgroundColor:
                    item.id == ratings ? COLORS.primary : COLORS.lightGray2,
                }}
                onPress={() => setRatings(item.id)}
              />
            );
          })}
        </View>
      </Section>
    );
  };

  return (
    <Modal animationType="fade" transparent={true} visible={isVisible}>
      <View style={styles.filterContainer}>
        <TouchableWithoutFeedback onPress={() => setShowFilterModal(false)}>
          <View style={styles.innerContainer}></View>
        </TouchableWithoutFeedback>

        <Animated.View style={{...styles.mainContainer, top: modalY}}>
          {/* Header */}
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{...FONTS.h3, fontSize: 18, flex: 1}}>
              Filter Your Search
            </Text>
            <IconButton
              containerStyle={styles.headerIconContainer}
              icon={icons.cross}
              iconStyle={{tintColor: COLORS.gray2}}
              onPress={() => setShowFilterModal(false)}
            />
          </View>

          {/*  */}
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: 250}}>
            {/* Distance */}
            {renderDistance()}

            {/* Delivery Timer */}
            {renderDeliveryTime()}

            {/* Pricing range section */}
            {renderPricingRange()}

            {/* Rating Section */}
            {renderRatings()}
          </ScrollView>
        </Animated.View>
      </View>
    </Modal>
  );
};

export default FilterModal;
const styles = StyleSheet.create({
  filterContainer: {
    flex: 1,
    backgroundColor: COLORS.transparentBlack7,
  },
  innerContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
  mainContainer: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '100%',
    padding: SIZES.padding,
    borderTopRightRadius: SIZES.padding,
    borderTopLeftRadius: SIZES.padding,
    backgroundColor: COLORS.white,
  },
  headerIconContainer: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: COLORS.gray2,
  },
  buttonContainerSty: {
    width: '30%',
    height: 50,
    margin: 5,
    alignItems: 'center',
    borderRadius: SIZES.base,
  },
  ratingContainerStyle: {
    flex: 1,
    height: 50,
    margin: 5,
    alignItems: 'center',
    borderRadius: SIZES.base,
  },
});
