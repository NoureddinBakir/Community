import React from 'react';
import { Text, View, ScrollView,TextInput } from 'react-native';
import {styles, fontWeights, fontSizes, colors} from '../styles.js';

const SelectionBarGroup = (props) => {
    return (
      <View style={[styles.group, {marginBottom:0}]}>
      {/*Title of group*/}
      <View style={[styles.scrollGroup, {}]}>
      <ScrollView>
        {/*Adding maxHeight as 300 means scrollview will automatically shrink :)*/}
          <View style={[styles.barGroup, {}]}>
          {/*Two texts, vertical alignment*/}
            <View style={[styles.barGroupTextView]}>
              <Text style={[styles.barGroupSubjectText]}>{props.SelectionTitle}</Text>
            </View>
            <View style={[styles.barGroupTextView, {}]}>
            <TextInput
              style={[styles.h4, { width: '100%', textAlign: 'right'}]}
              placeholderTextColor={'#00607E'}
              multiline={true}
              placeholder={props.placeholder}
            />
            </View>
          </View>
          <View>{props.secondGroup}</View>
      </ScrollView>
      </View>
      </View>
    );
}

export default SelectionBarGroup;
