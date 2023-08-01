import {
  ImageBackground,
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  Share,
} from 'react-native';
import { HStack, Pressable, Icon, Image, Text, Button } from 'native-base';
import { Feather } from '@expo/vector-icons';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import Details from '../components/Details';
const { height } = Dimensions.get('window');
const DisplayScreen = ({ route, navigation }) => {
  const { item } = route?.params;
  const mainImage = item?.images[0];
  const slicedImages = item?.images.slice(0, 5);
  const difference = item?.images.length - slicedImages.length;
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `Check out this wonderful place i found ${mainImage}`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log('shared with activity type of: ', result.activityType);
        } else {
          console.log('shared');
        }
      } else if (result.action === Share.dismissedAction) {
        console.log('dismissed');
      }
    } catch (err) {
      console.log(err.message);
    }
  };
  const handleNavigation = () => {
    navigation.goBack();
  };
  const gotoGallery = () => {
    navigation.navigate('gallery', { images: item?.images });
  };
  const gotoMap = () => {
    navigation.navigate('map', {
      coords: item?.coordinates,
      city: item?.city,
      name: item?.name,
    });
  };
  return (
    <ScrollView
      style={{ marginHorizontal: 20, marginTop: 50, paddingBottom: 50 }}
      showsVerticalScrollIndicator={false}
    >
      <Pressable
        onPress={gotoGallery}
        style={{ overflow: 'hidden', borderRadius: 20 }}
      >
        <ImageBackground source={{ uri: mainImage }} style={styles.img}>
          <HStack mt={4} mx={4} w={'full'} justifyContent={'space-between'}>
            <Pressable
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
            <Pressable
              onPress={onShare}
              backgroundColor={'white'}
              w={10}
              h={10}
              justifyContent={'center'}
              alignItems={'center'}
              rounded={'full'}
              mr={4}
            >
              <Icon as={Feather} name="share" size={25} color="black" />
            </Pressable>
          </HStack>
          <HStack
            justifyContent={'center'}
            mb={5}
            backgroundColor={'rgba(256,256,256, 0.7)'}
            px={5}
            py={3}
            rounded={'lg'}
            space={3}
          >
            {slicedImages?.map((image, index) => (
              <View key={image}>
                <Image
                  alt="img"
                  source={{ uri: image }}
                  w={'50px'}
                  h={'50px'}
                  rounded={'sm'}
                />
                {difference > 0 && index === slicedImages?.length - 1 && (
                  <Text
                    position={'absolute'}
                    left={'10%'}
                    top={'10%'}
                    color={'white'}
                    fontSize={'2xl'}
                    textAlign={'center'}
                    fontWeight={'bold'}
                  >
                    + {difference}
                  </Text>
                )}
              </View>
            ))}
          </HStack>
        </ImageBackground>
      </Pressable>
      <Details item={item} />

      <MapView
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: item?.coordinates.lat,
          longitude: item?.coordinates.lon,
          latitudeDelta: 0.09,
          longitudeDelta: 0.09,
        }}
        style={styles.map}
      >
        <Marker
          coordinate={{
            latitude: item?.coordinates.lat,
            longitude: item?.coordinates.lon,
          }}
          title={item?.city}
        />
      </MapView>

      <Button onPress={gotoMap} mb={4}>
        View map on full Screen
      </Button>
    </ScrollView>
  );
};

export default DisplayScreen;

const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: height / 2,
    resizeMode: 'contain',

    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imgCon: {
    borderRadius: 20,
    overflow: 'hidden',
    height: '60%',
  },
  miniImg: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },

  map: {
    width: '100%',

    height: 200,
    borderRadius: 20,
    marginBottom: 10,
  },
});
