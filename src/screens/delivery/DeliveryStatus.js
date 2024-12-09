import React, {useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import {
  COLORS,
  FONTS,
  SIZES,
  icons,
  images,
  dummyData,
  constants,
} from '../../constants';
import {
  Header,
  LineDivider,
  TextButton,
  TextIconButton,
} from '../../components';

const DeliveryStatus = ({navigation, route}) => {
  const [currentStep, setCurrentStep] = useState(3);

  const renderHeader = () => {
    return (
      <Header
        title={'Delivery Status'}
        containerStyle={styles.headerContainer}
      />
    );
  };

  const renderInfo = () => {
    return (
      <View style={styles.infoContainer}>
        <Text style={{textAlign: 'center', color: COLORS.gray, ...FONTS.body4}}>
          Estimated delivery
        </Text>
        <Text style={{textAlign: 'center', fontWeight: 800, ...FONTS.h2}}>
          28 Nov, 2024/12:30 Pm
        </Text>
      </View>
    );
  };

  const renderTrackOrder = () => {
    return (
      <View style={styles.trackContainer}>
        {/* track order */}
        <View style={styles.innerTrackContainer}>
          <Text style={{fontWeight: 800, ...FONTS.h3}}>Track Order</Text>
          <Text style={{color: COLORS.gray, ...FONTS.body3}}>NY0123M90</Text>
        </View>
        {/* Line*/}
        <LineDivider lineStyle={{backgroundColor: COLORS.lightGray2}} />

        {/* Success */}
        <View style={styles.statusContainer}>
          {constants.track_order_status.map((item, index) => {
            return (
              <View key={`StatusList-${index}`}>
                <View style={styles.innerStatusContainer}>
                  <Image
                    source={icons.check_circle}
                    style={{
                      ...styles.checkCircleStyle,
                      tintColor:
                        index <= currentStep
                          ? COLORS.primary
                          : COLORS.lightGray1,
                    }}
                  />
                  <View style={{marginLeft: SIZES.radius}}>
                    <Text style={{fontWeight: 800, ...FONTS.h3}}>
                      {item.title}
                    </Text>
                    <Text style={styles.subTitle}> {item.sub_title} </Text>
                  </View>
                </View>

                {index < constants.track_order_status.length - 1 && (
                  <View>
                    {index < currentStep && <View style={styles.solidLine} />}
                    {index >= currentStep && (
                      <Image
                        source={icons.dotted_line}
                        style={styles.dottedLine}
                        resizeMode="cover"
                      />
                    )}
                  </View>
                )}
              </View>
            );
          })}
        </View>
      </View>
    );
  };

  const renderFooter = () => (
    <View style={styles.footerWrap}>
      {currentStep < constants.track_order_status.length - 1 && (
        <View style={styles.footerItemWrap}>
          {/* Cancel  */}
          <TextButton
            label="Cancel"
            buttonContainerStyle={styles.cancelBtnContainer}
            labelStyle={{color: COLORS.primary}}
            onPress={() => navigation.navigate('FoodDetail')}
          />

          {/* MapView  */}
          <TextIconButton
            containerStyle={styles.mapBtnContainer}
            label="Map View"
            labelStyle={{color: COLORS.white, ...FONTS.h3}}
            icon={icons.map}
            iconPosition="LEFT"
            iconStyle={styles.mapIconStyle}
            onPress={() => navigation.navigate('Map')}
          />
        </View>
      )}

      {currentStep === constants.track_order_status.length - 1 && (
        <TextButton
          label="DONE"
          buttonContainerStyle={{height: 55, borderRadius: SIZES.base}}
          onPress={() => navigation.navigate('FoodDetail')}
        />
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      {renderHeader()}

      {/* info */}
      {renderInfo()}

      {/* track order */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {renderTrackOrder()}
      </ScrollView>

      {/* footer */}
      {renderFooter()}
    </View>
  );
};

export default DeliveryStatus;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: SIZES.padding,
    backgroundColor: COLORS.white,
  },
  headerContainer: {
    height: 50,
    marginHorizontal: SIZES.padding,
    marginTop: 40,
  },
  infoContainer: {
    marginTop: SIZES.radius,
    paddingHorizontal: SIZES.padding,
  },
  trackContainer: {
    marginTop: SIZES.padding,
    paddingVertical: SIZES.padding,
    borderRadius: SIZES.radius,
    borderWidth: 2,
    borderColor: COLORS.lightGray2,
    backgroundColor: COLORS.white2,
  },
  innerTrackContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingHorizontal: SIZES.padding,
  },
  checkCircleStyle: {
    width: 40,
    height: 40,
  },
  statusContainer: {
    marginTop: SIZES.padding,
    paddingVertical: SIZES.padding,
  },
  innerStatusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: -5,
  },
  subTitle: {
    color: COLORS.gray,
    ...FONTS.body4,
  },
  solidLine: {
    height: 50,
    width: 2,
    marginLeft: 18,
    backgroundColor: COLORS.primary,
    zIndex: -1,
  },
  dottedLine: {
    width: 2,
    height: 50,
    marginLeft: 17,
  },
  footerWrap: {
    marginTop: SIZES.radius,
    marginBottom: SIZES.padding,
  },
  footerItemWrap: {
    flexDirection: 'row',
    height: 55,
  },
  cancelBtnContainer: {
    width: '40%',
    borderRadius: SIZES.base,
    backgroundColor: COLORS.lightGray2,
  },
  mapBtnContainer: {
    flex: 1,
    marginLeft: SIZES.radius,
    borderRadius: SIZES.base,
    backgroundColor: COLORS.primary,
  },
  mapIconStyle: {
    width: 25,
    height: 25,
    marginRight: SIZES.base,
    tintColor: COLORS.white,
    borderWidth: 2,
  },
});
