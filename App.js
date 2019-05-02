import React, {Component} from 'react';
import {StyleSheet,ScrollView,Text,View} from 'react-native';
import {createStackNavigator,createDrawerNavigator,createAppContainer,DrawerItems, SafeAreaView} from 'react-navigation';

import Home from './js/views/Home';
import Whisper from './js/views/Whisper/Whisper';
import About from './js/views/About';
// import Test from './Test';

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
    },
    About:{
      screen:About,
      path:'/about'
    }
  },
  {
    drawerBackgroundColor:'white',
    contentComponent:DrawerContent,
    initialRouteName:'Whisper',
    edgeWidth:80,
    drawerWidth:250
  }
)

const AppContainer = createAppContainer(DrawerNavigatior);

export default class App extends Component{
  render(){
    return(
      <AppContainer />
    )
  }
  // render(){
  //   return(
  //     <Test />
  //   )
  // }
}
