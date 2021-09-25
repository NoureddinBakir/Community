import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { styles, fontWeights, fontSizes, colors } from '../styles.js';


const ImageBarGroups = (props) => {

  return (

    <ScrollView style={[styles.scrollGroup, {}]}>
      <View style={[styles.barGroup]}>
        <Image source={{ uri: props.imageUri }} style={[styles.barGroupImage, {}]} />
        {/*Two texts, vertical alignment*/}
        <View style={[styles.barGroupTextView]}>
          <Text style={[styles.barGroupSubjectTextStyle]}>{props.subjectText}</Text>
          <Text style={[styles.barGroupContentTextStyle]}>{props.contentText}</Text>
        </View>
        <View style={[styles.barGroupButtonView, { flex: props.barGroupButton.length > 6 ? 1 : 2 }]}>
          <Text style={[styles.barGroupButtonText, { fontSize: props.barGroupButtonFontSize, }]}>{props.barGroupButton}</Text>
        </View>
      </View>
      <View>{props.secondGroup}</View>
    </ScrollView>
  );
}

export default ImageBarGroups;
