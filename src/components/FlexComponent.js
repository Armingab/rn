import React from 'react';
import { View, StyleSheet } from 'react-native';

//Simple component for purpose of showing flex
const FlexComponent = () => {
return(
<View style={styles.container}>
  <View style={styles.red}/>
  <View style={styles.black}/>
  <View style={styles.blue}/>
</View>
);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },

  red: {
    backgroundColor: 'red',
    width: 100,
    height: 100,
  },

  black: {
    backgroundColor: 'black',
    width: 100,
    height: 100,
  },

  blue: {
    backgroundColor: 'blue',
    width: 100,
    height: 100,
  },
});
export default FlexComponent;