import React, { Component, useState, useEffect } from 'react';
import { ScrollView, SafeAreaView, Image, View, Text, StyleSheet, ImageBackground, Dimensions, TextInput, Keyboard, KeyboardAvoidingView, Platform } from 'react-native';
import { colors, fontSizes, styles } from '../styles';
import backgroundImage from '../../images';
import shortHash from 'shorthash2';

// import local files
import { getCachedUri } from "../../GetCachedUri";

const ScreenWrapper = ({ children }) => {

  const [imageUri, setImageUri] = useState('../../assets/default.png');
  
    useEffect(()=>{
      setImageUri('https://firebasestorage.googleapis.com/v0/b/mosque-4ac3b.appspot.com/o/app%20images%2FScreen%20Shot%202021-08-09%20at%2010.16.52%20PM.png?alt=media&token=63af053b-8bea-4fbf-acc8-3176caf1d71a');
      async function getCI() {await getCachedUri(imageUri)
      .then(res => setImageUri(res))
      .catch(err => console.log(err));}
      getCI();
    }, []);


  return (
      <ImageBackground source={{uri: imageUri}} resizeMode='contain' style={{flex:1}}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <ScrollView style={[styles.screen, {}]} showsVerticalScrollIndicator={false}>
          <SafeAreaView>
            <View style={[styles.container, {} ]}>
              {children}
            </View>
          </SafeAreaView>
        </ScrollView>
      </KeyboardAvoidingView>
      </ImageBackground>
  );
}

export default ScreenWrapper;
