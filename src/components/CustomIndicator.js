import React from 'react';
import { ActivityIndicator } from 'react-native';

const CustomIndicator = (props) => {
  return (
    <ActivityIndicator 
    size={props.size}
    color={props.color}
    />
  );
}

export default CustomIndicator;