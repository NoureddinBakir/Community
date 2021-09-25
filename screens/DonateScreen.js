import React, { Component } from "react";
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles, fontWeights, fontSizes, colors } from '../components/styles';
import Group from '../components/groups/Group.js';
import NumpadGroup from '../components/groups/NumpadGroup.js';
import BarGroups from '../components/groups/BarGroups.js';
import ImageBarGroups from '../components/groups/ImageBarGroups.js';
import ScreenWrapper from '../components/groups/ScreenWrapper.js';

import {
  View,
  Text,
  StyleSheet
} from "react-native";


export default class DonateScreen extends Component {
  render() {
    return (
      <ScreenWrapper>

        <Text style={[styles.h1]}>Donate</Text>

        <Group
          title="Donate to Yaseen"
          contentProp={
            <NumpadGroup
              buttonText="Donate!" />
          }
        />

        <Group
          title="Donate To Muslim Communitie"
          contentProp={
            <ImageBarGroups
              barGroupButton="View"
              imageUri="https://firebasestorage.googleapis.com/v0/b/mosque-4ac3b.appspot.com/o/Demo%20images%2Faladdin%20gourmet.png?alt=media&token=e59c023a-2c5b-44fa-8551-058698adbe32"
              subjectText="Upcomming Membership Discussion"
              contentText="https://meet.google.com/s.." />
          } />

        <Group
          title="Donate To Local Organizations"
          contentProp={
            <ImageBarGroups
              barGroupButton="View"
              imageUri="https://firebasestorage.googleapis.com/v0/b/mosque-4ac3b.appspot.com/o/Demo%20images%2Faladdin%20gourmet.png?alt=media&token=e59c023a-2c5b-44fa-8551-058698adbe32"
              subjectText="Upcomming Membership Discussion"
              contentText="https://meet.google.com/s.." />
          } />

      </ScreenWrapper>
    );
  }
}
