import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Platform
} from "react-native";
//This component is just for purpose of showing each item in the list

const FlowerItem = props => {
  //We are slicing image url so we can get exact url
  const imageUrl = props.data.profile_picture.slice(2);
  const { flowerImage, container, textContainer, latinText, sightingsText, flowerText } = styles;
  return (
    <View style={container}>
        <ImageBackground
          source={{ uri: `https://${imageUrl}` }}
          style={flowerImage}
        >
          <View style={textContainer}>
            <Text style={flowerText}>{props.data.name}</Text>
            <Text style={[flowerText, latinText]}>{props.data.latin_name}</Text>
            <Text style={[flowerText, sightingsText]}>127 sightings</Text>
          </View>
        </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20
  },

  flowerImage: {
    height: 203,
    width: 160,
    borderRadius: 1,
    marginBottom: 5
  },

  textContainer: {
    display: "flex",
    flexDirection: "column",
    marginTop: 70,
    marginBottom: 40
  },

  flowerText: {
    fontSize: 18,
    color: 'white',
    textAlign: "center",
    fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto', 
  },

  latinText: {
    fontSize: 16,
    fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto', 
  },

  sightingsText: {
    fontSize: 16,
    fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto', 
    marginTop: 25,
    borderRadius: 10
  }
});
export default FlowerItem;