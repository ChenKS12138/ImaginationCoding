import React,{Component} from 'react';
import {createAppContainer,createStackNavigator} from 'react-navigation';

import CommemorationHome from './CommemorationHome';
import CommemorationCreate from './CommemorationCreate';
import CommemorationDetail from './CommemorationDetail';
import HeaderBarMenu from '../../components/HeaderBarMenu';
import NavigationService from '../../utils/NavigationService';


const stackContent = createStackNavigator(
  {
    CommemorationHome:{
      screen:CommemorationHome,
      path:'/commemoration'
    },
    CommemorationCreate:{
      screen:CommemorationCreate,
      path:'/commemoration/create'
    },
    CommemorationDetail:{
      screen:CommemorationDetail,
      path:'commemoration/detail'
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

export default class Commemoration extends Component{
  render(){
    return(
      <AppContainer />
    )
  }
}