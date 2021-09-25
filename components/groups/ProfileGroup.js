import React from 'react';
import { Text, View, Image } from 'react-native';
import { styles, fontWeights, fontSizes, colors } from '../styles.js';

const ProfileGroup = (props) => {
    return (
        <View>
            {/*Profile picture and name view*/}
            <View style={[styles.view, {}]}>
                <Image style={[styles.profilePic, {}]}
                    source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/mosque-4ac3b.appspot.com/o/Demo%20images%2Fprofile-generic.png?alt=media&token=73dc37e3-b9e8-4eae-8833-dde66b18389d' }} />
                <Text style={[styles.h3]}>Salaam, Abdallah</Text>
            </View>
        </View>
    );
}

export default ProfileGroup;
