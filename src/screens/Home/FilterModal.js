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
import {IconButton} from '../../components';

const FilterModal = ({isVisible, onClose}) => {
  const [showFilterModal, setShowFilterModal] = useState(isVisible);
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
});
