import React from 'react';
import { View, StyleSheet } from 'react-native';

//Simple function based component for showing fixed width and height
const FixedComponent = () => {
 return(
   <View>
     <View style={styles.red}/>
     <View style={styles.black}/>
     <View style={styles.blue}/>
   </View>
 );
};

const styles = StyleSheet.create({
 red: {
   width: 200,
   height: 150,
   backgroundColor: 'red',
 },

 black: {
   width: 200,
   height: 100,
   backgroundColor: 'black',
 },

 blue: {
   width: 200,
   height: 150,
   backgroundColor: 'blue',
 },
});


export default FixedComponent;