import React from 'react';
import { View, Text, StyleSheet, Image, Button} from 'react-native';

const StyledComponent = () => {
  return (
    <View>
      <Text style={styles.textStyle}>Home Screen</Text>
      <Image style={styles.imageStyle} source={{uri: 'https://media.wired.com/photos/5a74f8de3b11122906cc24fe/master/w_1164,c_limit/TakeBackNewsfeed.jpg'}} />
      <Button style={styles.buttonStyles} title="Load more"></Button>
    </View>
  );
}

const styles = StyleSheet.create({

textStyle: {
  textAlign: 'center',
  fontFamily: 'Roboto',
  fontSize: 20,
  color: 'blue',
},

imageStyle: {
  width: 300,
  height: 300,
  marginTop: 50,
},

buttonStyles: {
  color: 'blue',
},

});

export default StyledComponent;