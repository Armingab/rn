import React from 'React';
import { View } from 'react-native';

//This is useless component, we're just showing lifecycle hooks
export default class LifecycleComponent extends React.Component {
  constructor(props){
    super(props);
    console.log('CONSTRUCTOR CALLED');
  }

  componentDidMount() {
    console.log('COMPONENT DID MOUNT CALLED');
  }

  render(){
    console.log('RENDER CALLED');
    return(
    <View />
    );
  }
}