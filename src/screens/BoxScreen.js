import React from "react";
import {Text, View, StyleSheet} from 'react-native';

const BoxScreen = () => {
    return (
        <View>
            <View style={styles.viewMainStyle}>
                <Text style={styles.textStyle}>App</Text>
            </View>
            <View style={styles.viewSubStyle}>
                <View style={styles.viewOneStyle}></View>
                <View style={styles.viewTwoStyle}></View>
                <View style={styles.viewThreeStyle}></View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    viewMainStyle: {
        borderWidth: 5,
        borderColor: 'black',
        top: 5,
        height: 100,
        alignItems: "center",
        justifyContent: "center",
        
    },
    viewSubStyle: {
        height: 200,
        flexDirection: "row",
        justifyContent: 'space-between'
    },
    viewOneStyle: {
        backgroundColor: 'red',
        width: 100,
        height: 100,
    },
    viewTwoStyle: {
        backgroundColor: 'green',
        width: 100,
        height: 100,
        alignSelf: 'flex-end'
    },
    viewThreeStyle: {
        backgroundColor: 'purple',
        width: 100,
        height: 100,
    },
    textStyle: {
        fontSize: 24,
    },
});

export default BoxScreen;