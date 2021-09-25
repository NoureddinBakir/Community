import React, {useState} from 'react';
import { Text, View, Image, ScrollView, Pressable, TextInput, Keyboard} from 'react-native';
import {styles, fontWeights, fontSizes, colors} from '../styles.js';

const InputGroup = (props) => {
    return (
      <View style={[styles.group, {}]}>
      {/*Title of group*/}
      <View style={[styles.barGroup,{backgroundColor: 'rgba(255,255,255,0)'}]}>
        <TextInput
          style={{height: 150, fontSize: 20, width: '100%', paddingLeft: 7}}
          placeholderTextColor={colors.grey}
          multiline={true}
          returnKeyType={'send'}
          onSubmitEditing={Keyboard.dismiss}
          placeholder={props.placeholder}
        />
      </View>
      <Pressable style={[styles.buttonView,{}]}>
          <Text style={[styles.buttonTextH2, {}]}>{props.buttonText}</Text>
      </Pressable>
      </View>
    );
}

export default InputGroup;
