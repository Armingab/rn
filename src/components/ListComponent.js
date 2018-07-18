import React from "react";
import { StyleSheet, Text, FlatList } from "react-native";

//Functional component for showing flat list
//We need two props: data is our list data and renderItem is used for showing each item in the list
const ListComponent = () => {
    return (
      <FlatList
      data={[
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
      ]}
      renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
    />
    );
  }

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

export default ListComponent;