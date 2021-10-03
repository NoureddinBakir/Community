import React, { Component, useEffect } from "react";
import {ScrollView,View, Image, ImageBackground,KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Text, TextInput, Keyboard} from 'react-native';
import { SafeAreaView} from 'react-native-safe-area-context';
import {styles, fontWeights, fontSizes, colors} from '../components/styles';
import Group from '../components/groups/Group.js';
import ScreenWrapper from '../components/groups/ScreenWrapper.js';



export default class LoginScreen extends Component{
  render(){
    return (
      <ScreenWrapper>
      <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      style={[styles.screen, {flex: 1}]}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={[styles.group, {flex: 1}]}>
        <TextInput
          style={{height: 50, fontSize: 20, width: '100%', paddingLeft: 7, marginVertical: 7, borderColor: colors.lightWhite, borderBottomWidth: 1}}
          placeholderTextColor={colors.darkBlue}
          onSubmitEditing={Keyboard.dismiss}
          placeholder={"Sign Up Enter your Email"}
        />

        <TextInput
          style={{height: 50, fontSize: 20, width: '100%', paddingLeft: 7, marginVertical: 7, borderColor: colors.lightWhite, borderBottomWidth: 1}}
          placeholderTextColor={colors.darkBlue}
          onSubmitEditing={Keyboard.dismiss}
          placeholder={"Enter your Password"}
        />
      </View>
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      </ScreenWrapper>
    );
  }
}
