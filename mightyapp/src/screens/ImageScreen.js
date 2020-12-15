import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import ImageDetail from "../components/ImageDetail";


const ImageScreen = () => {
    return (
    <View>
        <ImageDetail title="Forest" imageSource={require('../../assets/forest.jpg')} rate='9'/>
        <ImageDetail title="Star" imageSource={require('../../assets/star.jpg')} rate='10'/>
        <ImageDetail title="Beach" imageSource={require('../../assets/beach.jpg')} rate='3'/>
        <ImageDetail title="Mountain" imageSource={require('../../assets/mountain.jpg')} rate='4'/>

    </View>
    );
};

const styles = StyleSheet.create({});

export default ImageScreen;