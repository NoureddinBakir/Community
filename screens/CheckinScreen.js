import React, { Component } from "react";
import { ScrollView, Image, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles, fontWeights, fontSizes, colors } from '../components/styles';
import Group from '../components/groups/Group.js';
import BarGroups from '../components/groups/BarGroups.js';
import ImageBarGroups from '../components/groups/ImageBarGroups.js';
import QrCode from '../components/groups/QrCode.js';
import SelectionBarGroup from '../components/groups/SelectionBarGroup.js';
import ScreenWrapper from '../components/groups/ScreenWrapper.js';
import ProfileGroup from '../components/groups/ProfileGroup.js';

import {
  View,
  Text,
  StyleSheet
} from "react-native";


export default class CheckInScreen extends Component {
  render() {
    return (
      <ScreenWrapper>

        {/*Profile Picture & user settings button group*/}
        <ProfileGroup />

        <QrCode />

        <Group
          title="Manage Other Members"
          contentProp={
            <BarGroups
              barGroupButtonFontSize={14}
              barGroupButton="Manage"
              subjectText="Manage Members"
              contentText="Add or manage other members, check them in"
            />
          } />

        <Group
          title="Personal Information"
          contentProp={
            <SelectionBarGroup
              SelectionTitle="Name"
              placeholder="Abdallah Abdallah" key="1" />
          } />

        <Group
          title="Event Information"
          contentProp={
            <SelectionBarGroup
              SelectionTitle="Allergies"
              placeholder="Nuts" />
          } />


      </ScreenWrapper>
    );
  }
}
