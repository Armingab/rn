import React from 'react';
import { View, StyleSheet,ScrollView } from 'react-native';

//Everything we wrap inside ScrollView is going to become scrollable
const ScrollComponent = () => {
return (
<ScrollView>
  <View style={styles.darkBlue}/>
  <View style={styles.black}/>
  <View style={styles.red}/>
  <View style={styles.green}/>
  <View style={styles.orange}/>
  <View style={styles.yellow}/>
  <View style={styles.gray}/>
</ScrollView>
);
};

const styles = StyleSheet.create({

  darkBlue: {
    width: '100%',
    height: 250,
    backgroundColor: 'blue',
  },

  black: {
    width: '100%',
    height: 150,
    backgroundColor: 'black',
  },
  
  red: {
    width: '100%',
    height: 300,
    backgroundColor: 'red',
  },

  green: {
    width: '100%',
    height: 200,
    backgroundColor: 'green',
  },

  gray: {
    width: '100%',
    height: 150,
    backgroundColor: 'gray',
  },

  orange: {
    width: '100%',
    height: 200,
    backgroundColor: 'orange',
  },

  yellow: {
    width: '100%',
    height: 200,
    backgroundColor: 'yellow',
  }
});

export default ScrollComponent;