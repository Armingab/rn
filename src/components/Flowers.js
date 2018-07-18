import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import { GET_FLOWERS, AUTHORIZATION } from "../config/common";
import FlowerItem from "./FlowerItem";

class Flowers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flowers: [],
      error: ""
    };
  }

  //This method is fetching flowers and setting json as state
  getFlowers = () => {
    return fetch(GET_FLOWERS, { AUTHORIZATION })
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          flowers: responseJson
        });
      })
      .catch(error => {
        this.setState({
          error
        });
      });
  };

  //Lifecycle hook when component is mounted, fetch data
  componentDidMount() {
    this.getFlowers();
  }
 
  //Method that is returning each item
  renderFlower = ({ item, index }) => {
    return <FlowerItem data={item} />;
  };

  render() {
    const { flowers } = this.state.flowers;
    return (
      <View style={styles.container}>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          renderItem={this.renderFlower}
          data={flowers}
          numColumns={2}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center"
  }
});

export default Flowers;