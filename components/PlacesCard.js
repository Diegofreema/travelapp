import { StyleSheet, Dimensions } from 'react-native';
import { Text, Image, Icon, HStack, Pressable } from 'native-base';
import { Feather } from '@expo/vector-icons';

import { colors } from '../constants/Colors';
import Header from './Header';
import { useNavigation } from '@react-navigation/native';

const PlacesCard = ({ item }) => {
  const navigation = useNavigation();
  const imgUri = item?.images[0];
  const handleNavigation = () => {
    navigation.navigate('display', { item });
  };
  return (
    <Pressable style={styles.container} onPress={handleNavigation}>
      <Image alt="img" source={{ uri: imgUri }} style={styles.img} mb={2} />
      <Header title={item?.name} fontSize={'md'} />
      <HStack mt={2} alignItems={'center'} space={2}>
        <Icon as={Feather} name="map-pin" />
        <Text pb={1}>{item.city}</Text>
      </HStack>
    </Pressable>
  );
};

export default PlacesCard;

const styles = StyleSheet.create({
  container: {
    width: '50%',
    height: 200,
    borderWidth: 1,
    borderColor: colors.borderColor,
    borderRadius: 20,
    padding: 2,
    marginRight: 5,
    marginBottom: 10,
  },
  img: {
    width: '100%',
    height: '70%',
    borderRadius: 20,
  },
});
