import React from "react";
import { View, Button, Text } from "react-native";

export default class DoubleButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedNumber: 0,
    };
  }

  handleClick = () => {
    this.setState({ clickedNumber: this.state.clickedNumber + 2 });
  };

  render() {
    return (
      <View>
        <Button title="Click me for calculation" onPress={this.handleClick} />
        <Text style={{ fontSize: 30, textAlign: 'center' }}>{this.state.clickedNumber}</Text>
      </View>
    );
  }
}
