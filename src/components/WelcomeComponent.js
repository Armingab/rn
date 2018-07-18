import React from 'react';
import { Text } from 'react-native';

const WelcomeComponent = (props) => {
  return(
    <Text>Welcome to my app, {props.username}</Text>
  );
}

export default WelcomeComponent;