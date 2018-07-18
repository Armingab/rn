import React from 'react';
import { Text, View, Button } from 'react-native';

const Messages = (props) => {
return(
  <View>
  <Text>Messages Screen</Text>
  <Button
  title='go back'
  onPress={() => props.navigation.goBack()}
  ></Button>
  </View>
);
}

export default Messages;