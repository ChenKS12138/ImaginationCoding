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
      path:'/commemoration',
      navigationOptions:() => ({
        title:`Commemoration`,
        headerLeft: () => {
          return(<HeaderBarMenu iconType='menu' onPress={() => NavigationService.toggleDrawer()}/>)
        }
      })
    },
    CommemorationCreate:{
      screen:CommemorationCreate,
      path:'/commemoration/create',
      navigationOptions:{
        title:`CommemorationCreate`,
        headerLeft: handle => {
          return(<HeaderBarMenu iconType='back' onPress={() => handle.scene.descriptor.navigation.goBack()}/>)
        }
      }
    },
    CommemorationDetail:{
      screen:CommemorationDetail,
      path:'commemoration/detail',
      navigationOptions:{
        title:`CommemorationDetail`,
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

const AppContainer = createAppContainer(stackContent);

export default class Commemoration extends Component{
  render(){
    return(
      <AppContainer />
    )
  }
}