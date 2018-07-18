import React from 'react';
import { Button, Text, View } from 'react-native';

export default class SmartButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textValue: '',
    }
  }

  updateText = () => {
    console.log('clicked');
    this.setState({ textValue: 'I am clicked'});
  }

  render() {
    return (
      <View>
      <Button
      onPress={this.updateText}
      title="Click here"
      color="black"
      ></Button>
      <Text
      style={{fontSize: 40, textAlign: 'center'}}
      >
      {this.state.textValue}
      </Text>
      </View>
    );
  }
}