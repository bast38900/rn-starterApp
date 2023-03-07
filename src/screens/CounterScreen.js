//import React from "react";
import { useReducer } from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import { useState } from 'react';

const NUMBER_INCREMENT = 1;

const reducer = (state, action) => {
    switch (action.type) {
        case 'Increase':
            return {...state, counter: state.counter + action.payload};
        case 'Decrease':
            return {...state, counter: state.counter - action.payload};
        default:
            return state;
    }
};

const CounterScreen = () => {
    //const [counter, setCounter] = useState(0);

    const [state, runReducer] = useReducer( reducer, { counter: 0 });
    const { counter } = state;

    return (
        <View>
            {/* <Button 
            title="Increase" onPress={() => {
                setCounter(counter + 1);
            }} />
            <Button title="Decrease" onPress={() => {
                setCounter(counter - 1);
            }} /> */}
            <Button 
            title="Increase" 
            onPress={() => 
            runReducer({ type: 'Increase', payload: NUMBER_INCREMENT })} 
            />
            <Button title="Decrease" 
            onPress={() => 
            runReducer({ type: 'Decrease', payload: NUMBER_INCREMENT })} 
            />
            <Text>Current Count: {counter}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default CounterScreen;