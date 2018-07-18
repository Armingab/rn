import React, { Component } from 'react';
import { TextInput, View, StyleSheet, Button, Text } from 'react-native';

export default class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      username: 'Enter username',
      password: 'Enter password',
      error: '',
    };
  }

  validateLogin = (state) => {
    if (state === ''){
    this.setState({error: 'Please enter at least one character'});
    }
  }

  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.error}>{this.state.error}</Text>
      <TextInput
        style={styles.username}
        onChangeText={(username) => this.setState({username})}
        onSubmitEditing={this.validateLogin(this.state.password)}
        value={this.state.username}
      />
        <TextInput
        style={styles.password}
        onChangeText={(password) => this.setState({password})}
        value={this.state.password}
      />
      <Button style={styles.button} title="Login"></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({

container: {
 justifyContent: 'center',
 flexDirection: 'column',
 marginTop: 200,
 marginHorizontal: 50,
},

username: {
  height: 50
},

password: {
  height: 50,
  marginBottom: 20,
},

error: {
  fontSize: 30,
  color: 'red',
},
});