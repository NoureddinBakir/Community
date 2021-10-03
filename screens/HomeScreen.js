import React, { Component, useState } from "react";
import { ScrollView, Image, View, Text, StyleSheet, ImageBackground, TextInput, Dimensions, Keyboard, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles, fontWeights, fontSizes, colors } from '../components/styles';
import Group from '../components/groups/Group.js';
import GroupView from '../components/groups/GroupView.js';
import BarGroups from '../components/groups/BarGroups.js';
import ImageBarGroups from '../components/groups/ImageBarGroups.js';
import PrayerTimes from '../components/groups/PrayerTimes.js';
import InputGroup from '../components/groups/InputGroup.js';
import ScreenWrapper from '../components/groups/ScreenWrapper.js';
import ProfileGroup from '../components/groups/ProfileGroup.js';

export const HomeScreen = () => {

    return (
      <ScreenWrapper>

        <ProfileGroup />
        
        <Group
          title="Your Membership"
          contentProp={<BarGroups
              subjectText="Upcomming Membership Discussion"
              barGroupButton="Join"
              contentText="https://meet.google.com/s.." />
        } /> 


        <Group
          title="Prayer Times"
          contentProp={
            <PrayerTimes />
          }
        />

        <Group
          title="Today's Events"
          contentProp={
            <ImageBarGroups
              barGroupButton = "Join"
              imageUri="https://firebasestorage.googleapis.com/v0/b/mosque-4ac3b.appspot.com/o/Demo%20images%2Faladdin%20gourmet.png?alt=media&token=e59c023a-2c5b-44fa-8551-058698adbe32"
              subjectText="Upcomming Membership Discussion"
              contentText="https://meet.google.com/s.." />
          } />

        <Group
          title="Contact Us"
          contentProp={
            <InputGroup
              placeholder="Let us know how we're doing!"
              buttonText="Send" />
          } />

      </ScreenWrapper>
    );
}
