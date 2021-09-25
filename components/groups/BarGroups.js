import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { styles, fontWeights, fontSizes, colors } from '../styles.js';

{/*ScrollGroup limits the height of the group*/ }

const BarGroup = (props) => {
  return (
    <ScrollView style={[styles.scrollGroup, {}]}>
      {/*Adding maxHeight as 300 means scrollview will automatically shrink :)*/}
      <View style={[styles.barGroup, {}]}>
        {/*Two texts, vertical alignment*/}
        <View style={[styles.barGroupTextView]}>
          <Text style={[styles.barGroupSubjectTextStyle]}>{props.subjectText}</Text>
          <Text style={[styles.barGroupContentTextStyle]}>{props.contentText}</Text>
        </View>
        <View style={[styles.barGroupButtonView, { flex: props.barGroupButton.length > 6 ? 1 : 2 }]}>
          <Text style={[styles.barGroupButtonText, { fontSize: props.barGroupButtonFontSize, }]}>{props.barGroupButton}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

export default BarGroup;
