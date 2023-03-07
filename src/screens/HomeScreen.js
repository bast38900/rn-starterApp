import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  return <View>
      <Text></Text>
      <Text style={styles.headline}>Welcome</Text>
      <Text></Text>
      <TouchableOpacity onPress={() => navigation.navigate('Components')}>
        <Text style={styles.text}>Components</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('List')}>
        <Text style={styles.text}>List of friends</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Image')}>
        <Text style={styles.text}>Images</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Counter')}>
        <Text style={styles.text}>Counter</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Color')}>
        <Text style={styles.text}>List of colors</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Square')}>
        <Text style={styles.text}>Color picker</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Name')}>
        <Text style={styles.text}>Name</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Box')}>
        <Text style={styles.text}>Box</Text>
      </TouchableOpacity>
      <Button 
      onPress={() => navigation.navigate('About')}
      title="About" 
      />
    </View>
    
};

const styles = StyleSheet.create({
  headline: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
  },
  text: {
    fontSize: 15,
    color: 'red',
    textAlign: "center",
  },
});

export default HomeScreen;
