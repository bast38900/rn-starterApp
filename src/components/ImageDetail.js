import React from "react";
import {StyleSheet, Text, View, Image } from "react-native";

const ImageDetail = props => {
    return <View>
            <Text style={styles.textStyle}>{props.title}</Text>
            <Text>Photographer: {props.photographer}</Text>
            <Image source={props.image}/>
        </View>
}

const styles = StyleSheet.create({
    textStyle: {
        fontWeight: 'bold'
    },
});

export default ImageDetail;