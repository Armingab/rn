import React from 'react';
import { Text, View, Button } from 'react-native';

const Home = (props) => {
return(
  <View>
  <Text>Home Screen</Text>
  <Button
  title='go to feed'
  onPress={() => props.navigation.navigate('Feed')}
  ></Button>
  </View>
);
}

export default Home;