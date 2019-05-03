import React,{Component} from 'react';
import {View,Text} from 'react-native';
import {createAppContainer,createStackNavigator} from 'react-navigation';

import SchemeHome from './SchemeHome';
import SchemeCreate from './SchemeCreate';
import SchemeDetail from './SchemeDetail';

const stackContent = createStackNavigator(
  {
    SchemeHome:{
      screen:SchemeHome,
      path:'/scheme'
    },
    SchemeCreate:{
      screen:SchemeCreate,
      path:'/scheme/create'
    },
    SchemeDetail:{
      screen:SchemeDetail,
      path:'/scheme/detail'
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

export default class Scheme extends Component{
  render(){
    return(
      <AppContainer />
    )
  }
}