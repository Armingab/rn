import React from 'react'
import { View, Text } from 'react-native'

class FetchExample extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      data: ''
    }
  }

  //We' re fetching data when component is mounted and setting data state when promise is resolved
  componentDidMount(){
    return fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          data: responseJson,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }
  //We are showing our data as state inside Text component bellow
   render() {
      return (
         <View>
            <Text>
               {this.state.data.body}
            </Text>
         </View>
      )
   }
}
export default FetchExample;