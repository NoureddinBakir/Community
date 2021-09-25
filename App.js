import React, {useEffect, useState} from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {FileSystem} from 'expo';

//import local files
import {colors, styles, fontSizes, fontWeights} from './components/styles.js';
import backgroundImage from './images';
import {getCachedUri} from './GetCachedUri';

// import Screen files
import {HomeScreen} from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import DonateScreen from './screens/DonateScreen';
import CheckinScreen from './screens/CheckinScreen';

const Tab = createBottomTabNavigator();

export default function App() {

  const [imageUri, setImageUri] = useState(null);
  
    useEffect(()=>{
      setImageUri('https://reactjs.org/logo-og.png');
      getCachedUri(imageUri)
      .then(res => setImageUri(res))
      .catch(err => console.log(err));
    }, []);

  return (
    <ImageBackground source={imageUri === null ? require('./assets/default.png'): {uri: imageUri}} resizeMode='cover' style={{flex:1}}>
      <SafeAreaView style={{flex:1}}>
      <NavigationContainer>
        <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Checkin') {
              iconName = focused ? 'qr-code' : 'qr-code-outline';
            }else if(route.name === 'Donate') {
              iconName = focused ? 'heart-circle': 'heart-circle-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
          tabBarColor: 'red',
          shifting: true,
        })}
        >
          <Tab.Screen name="Home" component={HomeScreen}/>
          <Tab.Screen name="Checkin" component={CheckinScreen}/>
          <Tab.Screen name="Donate" component={DonateScreen}/>
        </Tab.Navigator>
      </NavigationContainer>
      </SafeAreaView>
    </ImageBackground>
  );
}