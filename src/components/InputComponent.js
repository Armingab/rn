import React, { Component } from 'react';
import { TextInput } from 'react-native';

export default class InputComponent extends Component {
  constructor(props) {
    super(props);
    //We're initializing initial state
    this.state = { text: 'Enter Text' };
  }

  //value is our textinput value and onChangeText is called each time user enter some text
  render() {
    return (
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 200}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
    );
  }
}