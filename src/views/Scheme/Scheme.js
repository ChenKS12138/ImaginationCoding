import React,{Component} from 'react';
import {View,Text} from 'react-native';
import {createAppContainer,createStackNavigator} from 'react-navigation';

import SchemeHome from './SchemeHome';
import SchemeCreate from './SchemeCreate';
import SchemeDetail from './SchemeDetail';
import HeaderBarMenu from '../../components/HeaderBarMenu';
import NavigationService from '../../utils/NavigationService';

const stackContent = createStackNavigator(
  {
    SchemeHome:{
      screen:SchemeHome,
      path:'/scheme',
      navigationOptions:() => ({
        title:`Scheme`,
        headerLeft: () => {
          return(<HeaderBarMenu iconType='menu' onPress={() => NavigationService.toggleDrawer()}/>)
        }
      })
    },
    SchemeCreate:{
      screen:SchemeCreate,
      path:'/scheme/create',
      navigationOptions:{
        title:`SchemeCreate`,
        headerLeft: handle => {
          return(<HeaderBarMenu iconType='back' onPress={() => handle.scene.descriptor.navigation.goBack()}/>)
        }
      }
    },
    SchemeDetail:{
      screen:SchemeDetail,
      path:'/scheme/detail',
      navigationOptions:{
        title:`SchemeDetail`,
        headerLeft: handle => {
          return(<HeaderBarMenu iconType='back' onPress={() => handle.scene.descriptor.navigation.goBack()}/>)
        }
      }
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
      headerLeft:() => (<HeaderBarMenu />)
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