import React from 'react';
import { Text, FlatList, StyleSheet } from 'react-native';

//Component for showing flat list
export default class FlatListComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {key: 'Devin'},
        {key: 'Jackson'},
        {key: 'James'},
        {key: 'Joel'},
        {key: 'John'},
        {key: 'Jillian'},
        {key: 'Jimmy'},
        {key: 'Julie'},
        {key: 'Nick'},
        {key: 'Brou'},
        {key: 'Haris'},
        {key: 'Benjamin'},
        {key: 'Bright'},
        {key: 'Harry'},
        {key: 'David'},
        {key: 'Davids'},
        {key: 'Goos'},
      ]
    }
  }
  //We need two props: data is our state and renderItem renders each item in the list
  render() {
    return (
      <FlatList
      data={this.state.data}
      renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
    />
    );
  }
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
