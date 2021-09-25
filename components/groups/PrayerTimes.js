import React from 'react';
import { ScrollView, Image, ImageBackground, Text, View } from 'react-native';
import { styles, fontWeights, fontSizes, colors } from '../styles.js';

const textStyleLeft = [styles.h3, {fontSize: 18,marginBottom:7, flex: 1, textAlign: 'left'}];
const textStyleRight = [styles.h3, {fontSize: 18,marginBottom:7, flex: 1, textAlign: 'right'}];
const textStyleCenter = [styles.h3, {fontSize: 18,marginBottom:7, flex: 1, textAlign: 'center'}]

const PrayerTimes = (props) => {
  return (
    <View style={[styles.group, {flex: 1}]}>

      <View style={[styles.prayerTimeStyle,{}]}>
        <View style={[{ flexDirection: 'row', justifyContent: 'space-between',}]}>
          <Text style={[textStyleLeft, {color: colors.primary}]}>Prayer</Text>
          <Text style={[textStyleCenter, {color: colors.primary}]}>Athan</Text>
          <Text style={[textStyleRight, {color: colors.primary}]}>Iqamah</Text>
        </View>
        <View style={[{ flexDirection: 'row', justifyContent: 'space-between',}]}>
          <Text style={[textStyleLeft]}>Fajr</Text>
          <Text style={[textStyleCenter]}>5:00 AM</Text>
          <Text style={[textStyleRight]}>5:30 AM</Text>
        </View>
        <View style={[{ flexDirection: 'row', justifyContent: 'space-between', }]}>
          <Text style={[textStyleLeft]}>Sunrise</Text>
          <Text style={[textStyleCenter]}>6:00 PM</Text>
          <Text style={[textStyleRight]}>6:30AM</Text>
        </View>
        <View style={[{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: colors.lightWhite, borderRadius: 3, borderWidth: 3, borderColor: colors.lightWhite, borderStartColor: colors.primary }]}>
          <Text style={[textStyleLeft, {}]}>Dhur</Text>
          <Text style={[textStyleCenter, {}]}>1:00 PM</Text>
          <Text style={[textStyleRight, {}]}>1:30 PM</Text>
        </View>
        <View style={[{ flexDirection: 'row', justifyContent: 'space-between', }]}>
          <Text style={[textStyleLeft]}>Asr</Text>
          <Text style={[textStyleCenter]}>5:00 PM</Text>
          <Text style={[textStyleRight]}>5:30 PM</Text>
        </View>
        <View style={[{ flexDirection: 'row', justifyContent: 'space-between', }]}>
          <Text style={[textStyleLeft]}>Maghreb</Text>
          <Text style={[textStyleCenter]}>8:00 PM</Text>
          <Text style={[textStyleRight]}>8:30 PM</Text>
        </View>
        <View style={[{ flexDirection: 'row', justifyContent: 'space-between', }]}>
          <Text style={[textStyleLeft]}>Isha</Text>
          <Text style={[textStyleCenter]}>9:00 PM</Text>
          <Text style={[textStyleRight]}>9:30 PM</Text>
        </View>
      </View>
   
    </View>
  );
}

export default PrayerTimes;
