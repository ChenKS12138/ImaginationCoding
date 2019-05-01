import React, {Component} from 'react';
import {StyleSheet,ScrollView} from 'react-native';
import {createStackNavigator,createDrawerNavigator,createAppContainer,DrawerItems, SafeAreaView} from 'react-navigation';

import Home from './js/views/Home';
import Whisper from './js/views/Whisper';

const styles = StyleSheet.create({
  container:{
    paddingTop:50
  }
})

const DrawerContent = props => (
  <ScrollView>
    <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
)

const DrawerNavigatior = createDrawerNavigator(
  {
    Home:{
      screen:Home,
      path:'/'
    },
    Whisper:{
      screen:Whisper,
      path:'/whisper'
    }
  },
  {
    drawerBackgroundColor:'white',
    contentComponent:DrawerContent,
    initialRouteName:'Whisper'
  }
)

const AppContainer = createAppContainer(DrawerNavigatior);

export default class App extends Component{
  render(){
    return(
      <AppContainer />
    )
  }
}
