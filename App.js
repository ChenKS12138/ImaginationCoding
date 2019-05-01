import React, {Component} from 'react';
import {createStackNavigator,createDrawerNavigator,createAppContainer} from 'react-navigation';

import Home from './js/views/Home';
import Whisper from './js/views/Whisper';

const DrawerNavigatior = createDrawerNavigator(
  {
    Home:{
      screen:Home,
      path:'/'
    },
    Whisper:{
      screen:Whisper,
    }
  },
  {
    drawerBackgroundColor:'white'
  }
)

const AppContainer = createAppContainer(DrawerNavigatior);

export default class App extends Component{
  render(){
    return(
      <AppContainer />
    )
  }
}
