import React from 'react';
import { Text, View } from 'react-native';
import {styles, fontWeights, fontSizes, colors} from '../styles.js';


const Group = (props) => {
    return (
      <View>

      {/*Title of group*/}
        <Text style={[styles.h3, {textAlign: 'left', left: 7}]}>{props.title}</Text>
      {/*conent props*/}
        <View style={[{...props.groupContentStyleOverride}]}>{props.contentProp}</View>

      </View>
    );
}

export default Group;
