import React,{Component} from 'react';
import {createAppContainer,createStackNavigator} from 'react-navigation';

import PlanHome from './PlanHome';
import PlanDetail from './planDetail';

const stackContent = createStackNavigator(
  {
    PlanHome:{
      path:'/plan',
      screen:PlanHome
    },
    PlanDetail:{
      path:'/plan/detail',
      screen:PlanDetail
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

const AppContent = createAppContainer(stackContent);

export default class Plan extends Component{
  render(){
    return(
      <AppContent />
    )
  }
}