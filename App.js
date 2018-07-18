import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import Router from './src/components/Router';
import Navigation from './src/components/Navigation';
import LifecycleComponent from './src/components/LifecycleComponent';

export default class App extends React.Component {
  render() {
    return (   
      <Navigation />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
