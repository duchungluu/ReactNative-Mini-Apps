import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

const ImageDetail = (props) => {
    return (
    <View>
        <Text>{props.title}</Text>
        <Image source={require('../../assets/star.jpg')}></Image>
    </View>
    );
};

const styles = StyleSheet.create({});

export default ImageDetail;