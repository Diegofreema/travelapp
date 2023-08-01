import { StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Box, View, ScrollView, Text, Pressable, Container } from 'native-base';
import Header from '../components/Header';
import { colors } from '../constants/Colors';
import { categories } from '../data/categories';
import { FlatList } from 'react-native';
import { attractions } from '../data/attractions';
import PlacesCard from '../components/PlacesCard';

const Home = ({ navigation }) => {
  const [categoryList, setCategoryList] = useState(['All', ...categories]);
  const [selectedCat, setSelectedCat] = useState('All');
  const [places, setPlaces] = useState(attractions);
  const handleNavigation = () => {
    navigation.navigate('display');
  };

  useEffect(() => {
    if (selectedCat === 'All') {
      setPlaces(attractions);
    } else {
      const filteredPlaces = attractions.filter((place) =>
        place.categories.includes(selectedCat)
      );
      setPlaces(filteredPlaces);
    }
  }, [selectedCat]);

  return (
    <Box safeAreaX={5} safeAreaTop={12} flex={1}>
      <Header
        title={'Where do'}
        color={colors.titleColor}
        fontSize={'3xl'}
        fontWeight={'light'}
      />
      <Header
        title={'you want to go?'}
        color={colors.titleColor}
        fontSize={'3xl'}
      />
      <View mt={10}>
        <Header title={'Explore Attractions'} fontSize={'xl'} />
        <ScrollView mt={5} horizontal showsHorizontalScrollIndicator={false}>
          {categoryList.map((item) => (
            <Pressable
              key={item}
              onPress={() => setSelectedCat(item)}
              style={selectedCat === item && styles.pressable}
              mr={3}
              px={2}
            >
              <Text fontSize={15} style={selectedCat === item && styles.text}>
                {item}
              </Text>
            </Pressable>
          ))}
        </ScrollView>
        <View mt={4}>
          <FlatList
            ListEmptyComponent={
              <Box flex={1} justifyContent={'center'} alignItems={'center'}>
                <Text fontSize={'lg'}>Nothing to show</Text>
              </Box>
            }
            data={places}
            renderItem={({ item }) => <PlacesCard item={item} />}
            keyExtractor={(item) => item.id}
            numColumns={2}
          />
        </View>
      </View>
    </Box>
  );
};

export default Home;

const styles = StyleSheet.create({
  pressable: {
    borderBottomColor: 'black',
    borderBottomWidth: 2,
  },
  text: {
    fontWeight: '800',
  },
});
