import { StackNavigator } from 'react-navigation';

import Home from './Home';
import Messages from './Messages';
import Feed from './Feed';

const Navigation = StackNavigator(
{
 Home: {
   screen: Home
 },
 Feed: {
   screen: Feed
 },
 Messages: {
   screen: Messages
 }
},

 {
   initialRouteName: 'Home',
 
});

export default Navigation;