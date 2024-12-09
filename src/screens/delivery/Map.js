import React, {useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import LinearGradient from 'react-native-linear-gradient';
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
  IconButton,
  LineDivider,
  TextButton,
  TextIconButton,
} from '../../components';

const Map = ({navigation}) => {
  const mapView = React.useRef();
  const [region, setRegion] = useState(null);
  const [toLoc, setToLoc] = useState(null);
  const [fromLoc, setFromLoc] = useState(null);
  const [angle, setAngle] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [duration, setDuration] = useState('');

  useEffect(() => {
    const initialRegion = {
      latitude: 1.5496614931250685,
      longitude: 110.36381866919922,
      latitudeDelta: 0.02,
      longitudeDelta: 0.02,
    };

    const destination = {
      latitude: 1.5496614931250685,
      longitude: 110.36381866919922,
    };
    setToLoc(destination);
    setFromLoc(dummyData.fromLocs[1]);
    setRegion(initialRegion);
  }, []);

  const renderHeader = () => {
    return (
      <>
        <IconButton
          icon={icons.back}
          containerStyle={{
            ...styles.backButtonContainer,
            ...styles.buttonStyle,
          }}
          iconStyle={{...styles.backIconStyle}}
          onPress={() => navigation.goBack()}
        />

        <View style={styles.rightButonsContainer}>
          <IconButton
            icon={icons.globe}
            containerStyle={{...styles.buttonStyle}}
            iconStyle={{...styles.backIconStyle}}
          />
          <IconButton
            icon={icons.focus}
            containerStyle={{...styles.buttonStyle, marginTop: SIZES.radius}}
            iconStyle={{...styles.backIconStyle}}
          />
        </View>
      </>
    );
  };

  const renderMap = () => {
    return (
      //   <Text>Sneha</Text>
      <MapView
        style={{flex: 1}}
        ref={mapView}
        provider={PROVIDER_GOOGLE}
        initialRegion={region}>
        {fromLoc && (
          <Marker
            key={'FromLoc'}
            coordinate={fromLoc}
            tracksViewChanges={false}
            icon={icons.navigator1}
            rotation={angle}
            anchor={{x: 0.5, y: 0.5}}
            title={'title'}
            description={'description'}
          />
        )}

        {toLoc && (
          <Marker
            key={'ToLoc'}
            coordinate={toLoc}
            tracksViewChanges={false}
            icon={icons.location1}
            rotation={angle}
            anchor={{x: 0.5, y: 0.5}}
            title={'title'}
            description={'description'}
          />
        )}

        <MapViewDirections
          origin={fromLoc}
          destination={toLoc}
          apikey={constants.GOOGLE_MAP_API_KEY}
          strokeWidth={5}
          strokeColors={COLORS.primary}
          optimizeWaypoints={true}
          onReady={result => {
            setDuration(Math.ceil(result.duration));
            if (!isReady) {
              // fit the map based on the route;
              mapView.current.fitToCoordinates(result.coordinates, {
                edgePadding: {
                  right: SIZES.width * 0.1,
                  bottom: 400,
                  left: SIZES.width * 0.1,
                  top: SIZES.height * 0.1,
                },
              });

              // re-position the navigator
              if (result.coordinates.length >= 2) {
                const angle = utils.calculateAngle(result.coordinates);
                setAngle(angle);
              }
              setIsReady(true);
            }
          }}
        />
      </MapView>
    );
  };

  const renderInfo = () => (
    <View style={styles.infoWrap}>
      {/* Linear Gradient  */}
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        colors={[COLORS.transparent, COLORS.lightGray1]}
        style={{
          position: 'absolute',
          top: -20,
          left: 0,
          right: 0,
          height: Platform.OS === 'ios' ? 200 : 50,
        }}
      />

      {/* Info Container  */}
      <View style={styles.infoContainerWrap}>
        {/* Delivery Time  */}
        <View style={styles.deliveryTimeWrap}>
          <Image source={icons.clock} style={styles.clockStyle} />

          <View style={{marginLeft: SIZES.padding}}>
            <Text style={{color: COLORS.gray, ...FONTS.body4}}>
              Your delivery time
            </Text>
            {duration ? (
              <Text style={{...FONTS.h3}}>`${duration}`</Text>
            ) : (
              <Text style={{...FONTS.h3}}>8 minutes</Text>
            )}
          </View>
        </View>

        {/* Address  */}
        <View style={styles.addressWrap}>
          <Image source={icons.focus} style={styles.clockStyle} />

          <View style={{marginLeft: SIZES.padding}}>
            <Text style={{color: COLORS.gray, ...FONTS.body4}}>
              Your delivery time
            </Text>
            <Text style={{...FONTS.h3}}>HHC, Ranchi, Jharkhand-18</Text>
          </View>
        </View>

        {/* Delivery Man Details  */}
        <TouchableOpacity style={styles.deliveryManContainer}>
          <Image source={images.profile} style={styles.deliveryManImg} />

          <View style={{flex: 1, marginLeft: SIZES.radius}}>
            <Text style={{...FONTS.h3, color: COLORS.white}}>
              MOZILA FIREFOX
            </Text>
            <Text style={{...FONTS.body4, color: COLORS.white}}>
              Delivery Man
            </Text>
          </View>

          <View style={styles.contactImgContainer}>
            <Image source={icons.call} style={{width: 30, height: 30}} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={{flex: 1}}>
      {/* Map */}
      {renderMap()}

      {/* Header Bbutton */}
      {renderHeader()}

      {/* Footer */}
      {renderInfo()}
    </View>
  );
};
export default Map;

const styles = StyleSheet.create({
  backButtonContainer: {
    position: 'absolute',
    top: SIZES.padding * 2,
    left: SIZES.padding,
  },
  buttonStyle: {
    width: 40,
    height: 40,
    borderRadius: SIZES.radius,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: COLORS.gray2,
    backgroundColor: COLORS.white,
  },
  backIconStyle: {
    width: 20,
    height: 20,
    tintColor: COLORS.gray2,
  },
  rightButonsContainer: {
    position: 'absolute',
    top: SIZES.padding * 2,
    right: SIZES.padding,
  },
  infoWrap: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  infoContainerWrap: {
    padding: SIZES.padding,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: COLORS.white,
  },
  deliveryTimeWrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  clockStyle: {
    width: 40,
    height: 40,
    tintColor: COLORS.black,
  },
  addressWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: SIZES.padding,
  },
  deliveryManContainer: {
    flexDirection: 'row',
    height: 70,
    marginTop: SIZES.padding,
    borderRadius: SIZES.radius,
    paddingHorizontal: SIZES.radius,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
  },
  deliveryManImg: {
    width: 40,
    height: 40,
    borderRadius: 5,
  },
  contactImgContainer: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: COLORS.white,
    backgroundColor: COLORS.transparentWhite1,
  },
});
