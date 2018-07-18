import React from 'react';
import { Text, View, Button } from 'react-native';

const Feed = (props) => {
return(
  <View>
  <Text>Feed Screen</Text>
  <Button
  title='go to messages'
  onPress={() => props.navigation.navigate('Messages')}
  ></Button>
  </View>
);
}

export default Feed;