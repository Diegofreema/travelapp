import { NativeBaseProvider } from 'native-base';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Icon } from 'native-base';
import { Feather } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

const Stack = createNativeStackNavigator();

import Home from './screens/Home';
import DisplayScreen from './screens/DisplayScreen';
import Gallery from './screens/Gallery';
import MapScreen from './screens/MapScreen';
import { StatusBar } from 'expo-status-bar';
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    backgroundColor: '#ffffff',
  },
};
const Main = () => {
  return (
    <NativeBaseProvider>
      <StatusBar style="dark" />
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="display" component={DisplayScreen} />
          <Stack.Screen name="gallery" component={Gallery} />
          <Stack.Screen name="map" component={MapScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default Main;
