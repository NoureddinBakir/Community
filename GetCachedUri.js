import React, {useState} from 'react';
import { Image } from 'react-native';
import shortHash from 'shorthash2';
import * as FileSystem from 'expo-file-system';

export const getCachedUri = async (sourceUri) => {
    const {uri}  = sourceUri;
    const name = shortHash(uri);
    const path = `${FileSystem.cacheDirectory}${name}`;
    const image = await FileSystem.getInfoAsync(path);
    if (image.exists) {
        console.log('read image from cache');
        return image.uri;       
    };
    console.log('downloading image to cache');
    const newImage = await FileSystem.downloadAsync(uri, path);
    return newImage.uri;
}