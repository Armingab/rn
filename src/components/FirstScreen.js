import React from 'react';
import { Text, Button, View } from 'react-native';

const FirstScreen = (props) => {
return(
  <View>
    <Text>First Screen</Text>
    <Button 
    title="Navigate me"
    onPress={() => props.navigation.navigate('SecondScreen')}></Button>
  </View>
);
}

export default FirstScreen;