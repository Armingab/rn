import React from "react";
import { Text, View, Button, FlatList } from "react-native";

import data from "../config/data";
import WorkoutItem from "./WorkoutItem";

class WorkoutList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data.workouts
    };
  }

  keyExtractor = (item, index) => item.id;

  renderWorkout = ({ item, index }) => {
    return (
      <WorkoutItem  
        itemTitle={item.title}
        itemUrl={item.imageUrl}
        data={this.state.data}
      />
    );
  };

  render() {
    return (
      <FlatList
        data={this.state.data}
        renderItem={this.renderWorkout}
        keyExtractor={this.keyExtractor}
      />
    );
  }
}

export default WorkoutList;