import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const CustomButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>Click Here</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({

  container: {
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 2,
    width: 200,
  },

  text: {
    fontSize: 20,
    color: 'blue',
    textAlign: 'center',
  }

});

export default CustomButton;