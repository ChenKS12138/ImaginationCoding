import React,{Component} from 'react';
import {View,Text} from 'react-native';
import {createAppContainer,createStackNavigator} from 'react-navigation';
import { DrawerActions } from 'react-navigation-drawer';

import AlbumHome from './AlbumHome';
import AlbumCreate from './AlbumCreate';
import AlbumDetail from './AlbumDetail';
import HeaderBarMenu from '../../components/HeaderBarMenu.js';
import NavigationService from '../../utils/NavigationService';

const stackContent = createStackNavigator(
  {
    AlbumHome:{
      screen:AlbumHome,
      path:'/album',
      navigationOptions:{
        title:`Album`,
        headerLeft: () => {
          return(<HeaderBarMenu iconType='menu' onPress={() => NavigationService.toggleDrawer()}/>)
        }
      }
    },
    AlbumCreate:{
      screen:AlbumCreate,
      path:'/album/create',
      navigationOptions:{
        title:`AlbumCreate`,
        headerLeft: handle => {
          return(<HeaderBarMenu iconType='back' onPress={() => handle.scene.descriptor.navigation.goBack()}/>)
        }
      }
    },
    AlbumDetail:{
      screen:AlbumDetail,
      path:'/album/detail',
      navigationOptions:{
        title:`AlbumDetail`,
        headerLeft: handle => {
          return(<HeaderBarMenu iconType='back' onPress={() => handle.scene.descriptor.navigation.goBack()}/>)
        }
      }
    }
  },
  {
    defaultNavigationOptions:{
      headerStyle:{
        backgroundColor:'#1874CD'
      },
      headerTitleStyle:{
        color:'white'
      }
    }
  }
)

const AppContainer = createAppContainer(stackContent);

export default class Album extends Component{
  render(){
    return(
      <AppContainer />
    )
  }
}