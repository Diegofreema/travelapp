import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import React from 'react';
import { Box, View } from 'native-base';

const MapComponent = () => {
  return (
    <MapView
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      style={styles.map}
    />
  );
};

export default MapComponent;

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%',
  },
});
