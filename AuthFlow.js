import React, {useEffect, useState} from 'react';
import App from './App';

export const AuthFlow = () => {
    const [imageUri, setImageUri] = useState(null);

    const getData = async () => {
        try {
        const value = await AsyncStorage.getItem('authStatusKey');
        if(value !== null) {
        }
        } catch(e) {
        // error reading value
        }
    }


    useEffect(()=>{
        setImageUri('https://reactjs.org/logo-og.png');
        getCachedUri(imageUri)
        .then(res => setImageUri(res))
        .catch(err => console.log(err));

        getData();
        App();
    });
};