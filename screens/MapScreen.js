import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

import { Icon, Pressable } from 'native-base';
import { Feather } from '@expo/vector-icons';

const MapScreen = ({ route, navigation }) => {
  const { coords, city, name } = route?.params;
  const handleNavigation = () => {
    navigation.goBack();
  };
  return (
    <View style={{ height: '100%', width: '100%' }}>
      <View
        style={styles.container}
        position={'absolute'}
        top={50}
        zIndex={2}
        w="full"
      >
        <Pressable
          onPress={handleNavigation}
          w={10}
          h={10}
          justifyContent={'center'}
          alignItems={'center'}
          rounded={'full'}
          mr={4}
        >
          <Icon as={Feather} name="arrow-left" size={30} color="black" />
        </Pressable>
        <Text style={{ fontSize: 20, color: 'black' }}>
          {name}, {city}
        </Text>
      </View>
      <MapView
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: coords?.lat,
          longitude: coords?.lon,
          latitudeDelta: 0.09,
          longitudeDelta: 0.09,
        }}
        style={styles.map}
      >
        <Marker
          coordinate={{
            latitude: coords?.lat,
            longitude: coords?.lon,
          }}
          title={city}
        />
      </MapView>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%',
  },
  container: {
    flexDirection: 'row',

    alignItems: 'center',
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 10,
    width: '90%',
    marginHorizontal: 20,
  },
});
