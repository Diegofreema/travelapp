import { StyleSheet, Dimensions, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import React from 'react';
import { Box, Icon, Image, Pressable, ScrollView } from 'native-base';
const { height } = Dimensions.get('window');
const Gallery = ({ route, navigation }) => {
  const { images } = route?.params;
  const handleNavigation = () => {
    navigation.goBack();
  };
  return (
    <Box safeAreaX={5} safeAreaTop={10} pb={10}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Pressable
          position={'absolute'}
          top={4}
          zIndex={2}
          onPress={handleNavigation}
          backgroundColor={'white'}
          w={10}
          h={10}
          justifyContent={'center'}
          alignItems={'center'}
          rounded={'full'}
          ml={4}
        >
          <Icon as={Feather} name="arrow-left" size={25} color="black" />
        </Pressable>
        {images?.map((image) => (
          <View key={image} style={styles.container}>
            <Image
              alt="img"
              source={{ uri: image }}
              style={{ height: '100%', width: '100%' }}
            />
          </View>
        ))}
      </ScrollView>
    </Box>
  );
};

export default Gallery;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: height / 2,
    borderRadius: 20,
    marginBottom: 10,
    overflow: 'hidden',
  },
});
