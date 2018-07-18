import { StackNavigator } from "react-navigation";

import FirstScreen from "../components/FirstScreen";
import SecondScreen from "../components/SecondScreen";

const Router = StackNavigator(
  {
    FirstScreen: {
      screen: FirstScreen
    },
    SecondScreen: {
      screen: SecondScreen
    }
  },

  {
    initialRouteName: "FirstScreen"
  }
);

export default Router;