import React from 'react';
import {ScrollView, Image, ImageBackground, Text, View, Dimensions} from 'react-native';
import {styles, fontWeights, fontSizes, colors} from '../styles.js';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HorizontalShowCase = (props) => {
    return (
      <View style={[styles.group, {justifyContent: 'center',alignSelf: 'center', width: windowWidth, maxWidth: 575}]}>
      {/*Title of group*/}
      <ScrollView
      showsHorizontalScrollIndicator={'false'}
      horizontal
      contentContainerStyle={[{flexDirection:'row', height: 320, width: windowWidth, maxWidth:575,  alignItems: 'center', justifyContent: 'center', paddingHorizontal: '10%'}]}>
        <Image style={{backgroundColor: '#ffff',}}source={{uri: 'https://firebasestorage.googleapis.com/v0/b/mosque-4ac3b.appspot.com/o/Demo%20images%2FYaseen%20Hackathon%20Post.png?alt=media&token=c362c6b3-1858-4589-9ee6-a1327449cc82'}} style={[{height: '100%', width: 215, resizeMode: 'contain', marginHorizontal: 3,}]}/>
        <Image style={{backgroundColor: '#ffff',}}source={{uri: 'https://firebasestorage.googleapis.com/v0/b/mosque-4ac3b.appspot.com/o/Demo%20images%2Fyaseen%20mobile%20clinic.jpg?alt=media&token=6d200248-2ff6-49a0-b9ce-7d585a558037'}} style={[{height: '100%', width: 215, resizeMode: 'contain', marginHorizontal: 3,}]}/>
        <Image style={{backgroundColor: '#ffff',}}source={{uri: 'https://firebasestorage.googleapis.com/v0/b/mosque-4ac3b.appspot.com/o/Demo%20images%2Feid%20poster.png?alt=media&token=e0a6e303-8995-4e7e-8f6e-aab1d068db1c'}} style={[{height: '100%', width: 215, resizeMode: 'contain', marginHorizontal: 3,}]}/>
        </ScrollView>
      </View>
    );
}

export default HorizontalShowCase;
