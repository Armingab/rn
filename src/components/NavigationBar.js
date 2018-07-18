import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NavigationBar = () => {
return (
<View style={styles.navbar}>
  <Text style={styles.leftText}>Back</Text>
  <Text style={styles.titleText}>Title</Text>
  <Text style={styles.rightText}>Forward</Text>
</View>
);
};

const styles = StyleSheet.create({
  navbar: {
    paddingTop: 20,
    height: 64,
    backgroundColor: '#F4F4F4',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#DDDDDD',
    paddingHorizontal: 12,
    flexDirection: 'row', // step 1
    justifyContent: 'space-between', // step 2
    alignItems: 'center', // step 3
  },

  leftText: {
    color: '#089de3',
  },
  titleText: {
    fontWeight: '600',
  },
  rightText: {
    color: '#089de3',
  },
  
});

export default NavigationBar;