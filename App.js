import React, {Component} from 'react';
import {StyleSheet,ScrollView,Text,View} from 'react-native';
import {createStackNavigator,createDrawerNavigator,createAppContainer,DrawerItems, SafeAreaView} from 'react-navigation';
import NavigationService from './src/utils/NavigationService'; 

import Home from './src/views/Home';
import Whisper from './src/views/Whisper/Whisper';
import Commemoration from './src/views/Commemoration/Commemoration';
import Album from './src/views/Album/Album';
import Scheme from './src/views/Scheme/Scheme';
import About from './src/views/About/About';

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
    Album:{
      screen:Album,
      path:'/album'
    },
    Scheme:{
      screen:Scheme,
      path:'/scheme'
    },
    Commemoration:{
      screen:Commemoration,
      path:'/commemoration'
    },
    About:{
      screen:About,
      path:'/about'
    }
  },
  {
    drawerBackgroundColor:'white',
    contentComponent:DrawerContent,
    initialRouteName:'Home',
    edgeWidth:80,
    drawerWidth:250,
    useNativeAnimations:false
  }
)

const AppContainer = createAppContainer(DrawerNavigatior);

export default class App extends Component{
  render(){
    return(
      <AppContainer
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    )
  }
}
