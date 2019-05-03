import React,{Component} from 'react';
import {View,Text} from 'react-native';
import {createAppContainer,createStackNavigator} from 'react-navigation';

import AboutHome from './AboutHome';
import HeaderBarMenu from '../../components/HeaderBarMenu';
import NavigationService from '../../utils/NavigationService';

const stackContent = createStackNavigator(
  {
    AboutHome:{
      screen:AboutHome,
      path:'/about',
      navigationOptions:() => ({
        title:`关于`,
        headerLeft: () => {
          return(<HeaderBarMenu iconType='menu' onPress={() => NavigationService.toggleDrawer()}/>)
        }
      })
    }
  },
  {
    defaultNavigationOptions:{
      headerStyle:{
        backgroundColor:'#1874CD',
      },
      headerTitleStyle:{
        color:'white'
      }
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