import React from 'react';
import { Text, View, Image } from 'react-native';
import {styles, fontWeights, fontSizes, colors} from '../styles.js';

const QrCode = (props) => {
    return (
      <View style={[{width: 200, height: 200, backgroundColor: 'white', alignSelf: 'center', borderRadius: 7, marginVertical: 7}]}>
      {/*conent props*/}
        <Image style={[{width: 'auto', height: '100%', resizeMode: 'contain'}]} source={{uri:'https://firebasestorage.googleapis.com/v0/b/mosque-4ac3b.appspot.com/o/Demo%20images%2Fcarbon_qr-code.png?alt=media&token=c364e094-8ae7-49ed-9665-df4d858d47d6'}}/>
      </View>
    );
}

export default QrCode;
