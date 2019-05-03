import React,{Component} from 'react';
import {createAppContainer,createStackNavigator} from 'react-navigation';

import WhisperHome from './WhisperHome';
import WhisperDetail from './WhisperDetail';
import WhisperCreate from './WhisperCreate';
import HeaderBarMenu from '../../components/HeaderBarMenu';
import NavigationService from '../../utils/NavigationService';


const stackContent = createStackNavigator(
  {
    WhisperHome:{
      path:'/whisper',
      screen:WhisperHome,
      navigationOptions:() => ({
        title:`Whisper`,
        headerLeft: () => {
          return(<HeaderBarMenu iconType='menu' onPress={() => NavigationService.toggleDrawer()}/>)
        }
      })
    },
    WhisperCreate:{
      path:'/whisper/create',
      screen:WhisperCreate,
      navigationOptions:{
        title:`AlbumCreate`,
        headerLeft: handle => {
          return(<HeaderBarMenu iconType='back' onPress={() => handle.scene.descriptor.navigation.goBack()}/>)
        }
      }
    },
    WhisperDetail:{
      path:'/whisper/detail',
      screen:WhisperDetail,
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
        backgroundColor:'#1874CD',
      },
      headerTitleStyle:{
        color:'white'
      }
    }
  }
)

const AppContent = createAppContainer(stackContent)

export default class Whisper extends Component{
  render(){
    return(
      <AppContent />
    )
  }
}