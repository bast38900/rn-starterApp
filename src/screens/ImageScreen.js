import React from "react";
import {StyleSheet, Text, View, Image} from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail 
            title="Forest" 
            image={require('../../assets/forest.jpg')}
            photographer="Peter"
            />
            <ImageDetail 
            title="Beach" 
            image={require('../../assets/beach.jpg')}
            photographer="Ulla"
            />
            <ImageDetail 
            title="Mountain" 
            image={require('../../assets/mountain.jpg')}
            photographer="Jens"
            />
        </View>
    );
}

const styles = StyleSheet.create({});

export default ImageScreen;