import React from 'react';
import { Text, View, Button } from 'react-native';

const SecondScreen = (props) => {
return(
  <View>
  <Text>Second Screen</Text>
  <Button
  title='go back'
  onPress={() => props.navigation.goBack()}
  ></Button>
  </View>
);
}

export default SecondScreen;