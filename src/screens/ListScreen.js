import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

 const ListScreen = () => {
    const friends = [
        { name: 'Hanne', age: '24' },
        { name: 'Martin', age: '76' }, 
        { name: 'Peter', age: '25' },
        { name: 'Jens', age: '37' },
        { name: 'Flemming', age: '58' },
        { name: 'Ulla', age: '45' },
        { name: 'Line', age: '18' },
        { name: 'Poul', age: '32' },
    ];
    
    return <View>
            <Text style={styles.headerStyle}>List of friends:</Text>
            <FlatList 
                keyExtractor={friend => friend.name}
                data={friends}
                renderItem={({ item }) => {
                    return <Text style={styles.textStyle}>- {item.name}, {item.age} years</Text>
                }}

            /> 
        </View>
 };

 const styles = StyleSheet.create({
        headerStyle: {
        fontSize: 45
    },
        textStyle: {
        fontSize: 30,
        marginVertical: 25
    },
 });

 export default ListScreen;