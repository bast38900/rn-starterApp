import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const NameScreen = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    return <View>
        <Text>Type your name: {name}</Text>
        <TextInput 
        style={styles.input} 
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText = {(newValue) => setName(newValue)}
        />
        <Text></Text>
        <Text>Please do type your social number:</Text>
        <TextInput 
        style={styles.input} 
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText = {(newValue) => setPassword(newValue)}
        />
        {
        password.length === 13 ? null : 
            <Text 
                style={{
                    fontStyle: "italic",
                    fontSize: 12,
                }}>
                Social number must be 12 characters long (xxxxxxxx-xxxx)
            </Text>
        }
    </View>
};

const styles = StyleSheet.create ({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5, 
    }
});

export default NameScreen;