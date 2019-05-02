import React,{Component} from 'react';
import {createAppContainer,createStackNavigator} from 'react-navigation';

import WhisperHome from './WhisperHome';
import WhisperDetail from './WhisperDetail';
import WhisperCreate from "./WhisperCreate";

const stackContent = createStackNavigator(
  {
    WhisperHome:{
      path:'/whisper',
      screen:WhisperHome
    },
    WhisperCreate:{
      path:'/whisper/create',
      screen:WhisperCreate
    },
    WhisperDetail:{
      path:'/whisper/detail',
      screen:WhisperDetail
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