import React, { useState } from 'react';
import { Text, View, Image, ScrollView, Pressable, TextInput } from 'react-native';
import { styles, fontWeights, fontSizes, colors } from '../styles.js';

const NumpadGroup = (props) => {

  const numRowStyle = {flexDirection: 'row', justifyContent: 'space-around', width: '100%', backgroundColor: colors.lightWhite, borderRadius: 3,}
  const numButtonStyle = {justifyContent: 'center', width: 50,margin: 7,  }

  return (
    <View style={[styles.group, { borderRadius: 7, height: 'auto' }]}>
      {/*Title of group*/}
      <View style={[{ alignItems: 'center', }]}>
        <Text style={[styles.h1, {marginBottom: 7}]}>$150</Text>
      </View>
      <View style={[styles.barGroup, { flexDirection: 'column', backgroundColor: 'rgbba(0,0,0,0)' }]}>

        <View style={[{ ...numRowStyle }]}>
          <Pressable style={[{}]}>
            <View style={[{ ...numButtonStyle }]}>
              <Text style={[styles.numPadButton]}>1</Text>
            </View>
          </Pressable>
          <Pressable style={[{}]}>
            <View style={[{ ...numButtonStyle }]}>
              <Text style={[styles.numPadButton]}>2</Text>
            </View>
          </Pressable>
          <Pressable style={[{}]}>
            <View style={[{ ...numButtonStyle }]}>
              <Text style={[styles.numPadButton]}>3</Text>
            </View>
          </Pressable>
        </View>

        <View style={[{ ...numRowStyle }]}>
          <Pressable style={[{}]}>
            <View style={[{ ...numButtonStyle }]}>
              <Text style={[styles.numPadButton]}>4</Text>
            </View>
          </Pressable>
          <Pressable style={[{}]}>
            <View style={[{ ...numButtonStyle }]}>
              <Text style={[styles.numPadButton]}>5</Text>
            </View>
          </Pressable>
          <Pressable style={[{}]}>
            <View style={[{ ...numButtonStyle }]}>
              <Text style={[styles.numPadButton]}>6</Text>
            </View>
          </Pressable>
        </View>

        <View style={[{ ...numRowStyle }]}>
          <Pressable style={[{}]}>
            <View style={[{ ...numButtonStyle }]}>
              <Text style={[styles.numPadButton]}>7</Text>
            </View>
          </Pressable>
          <Pressable style={[{}]}>
            <View style={[{ ...numButtonStyle }]}>
              <Text style={[styles.numPadButton]}>8</Text>
            </View>
          </Pressable>
          <Pressable style={[{}]}>
            <View style={[{ ...numButtonStyle }]}>
              <Text style={[styles.numPadButton]}>9</Text>
            </View>
          </Pressable>
        </View>

        <View style={[{ ...numRowStyle }]}>
          <Pressable style={[{}]}>
            <View style={[{ ...numButtonStyle }]}>
              <Text style={[styles.numPadButton]}>C</Text>
            </View>
          </Pressable>
          <Pressable style={[{}]}>
            <View style={[{ ...numButtonStyle }]}>
              <Text style={[styles.numPadButton]}>0</Text>
            </View>
          </Pressable>
          <Pressable style={[{}]}>
            <View style={[{ ...numButtonStyle }]}>
              <Text style={[styles.numPadButton]}>.</Text>
            </View>
          </Pressable>
        </View>

      </View>
      <Pressable style={[styles.buttonView,{}]}>
          <Text style={[styles.buttonTextH2, {}]}>{props.buttonText}</Text>
      </Pressable>
    </View>
  );
}

export default NumpadGroup;
