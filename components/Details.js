import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Text, HStack, Icon } from 'native-base';
import { Feather } from '@expo/vector-icons';

import Header from './Header';

const Details = ({ item }) => {
  console.log(item);
  return (
    <View style={{ marginVertical: 20 }}>
      <HStack justifyContent={'space-between'} mb={4}>
        <View>
          <Header title={item?.name} />
          <Text mt={'2'} fontSize={'md'} fontWeight={'semibold'}>
            {item?.city}
          </Text>
        </View>
        <Text fontSize={'3xl'} fontWeight={'bold'}>
          {item?.entry_price}
        </Text>
      </HStack>
      <View>
        <HStack alignItems={'center'} space={2} mb={3}>
          <Icon size={25} color={'black'} as={Feather} name="map-pin" />
          <Text fontWeight={'semibold'} color={'black'}>
            {item?.address}
          </Text>
        </HStack>
        <HStack alignItems={'center'} space={2}>
          <Icon size={25} color={'black'} as={Feather} name="clock" />
          <Text fontWeight={'semibold'} color={'black'}>
            {item?.opening_time} - {item?.closing_time}
          </Text>
        </HStack>
      </View>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({});
