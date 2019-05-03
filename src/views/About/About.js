import React,{Component} from 'react';
import {View,Text} from 'react-native';
import {createAppContainer,createStackNavigator} from 'react-navigation';

import AboutHome from './AboutHome';
import HeaderBarMenu from '../../components/HeaderBarMenu';

const stackContent = createStackNavigator(
  {
    AboutHome:{
      screen:AboutHome,
      path:'/about'
    }
  },
  {
    defaultNavigationOptions:{
      headerStyle:{
        backgroundColor:'#1874CD',
      },
      headerTitleStyle:{
        color:'white'
      },
      header:null
    }
  }
)

const AppContainer = createAppContainer(stackContent);

export default class About extends Component{
  render(){
    return(
      <AppContainer />
    )
  }
}