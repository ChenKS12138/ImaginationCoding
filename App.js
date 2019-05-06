import React, {Component} from 'react';
import {StyleSheet,ScrollView,Text,View} from 'react-native';
import {createStackNavigator,createDrawerNavigator,createAppContainer,DrawerItems, SafeAreaView} from 'react-navigation';
import NavigationService from './src/utils/NavigationService'; 
import {Avatar,Button} from 'react-native-paper';

import Home from './src/views/Home';
import Whisper from './src/views/Whisper/Whisper';
import Commemoration from './src/views/Commemoration/Commemoration';
import Album from './src/views/Album/Album';
import Scheme from './src/views/Scheme/Scheme';
import Plan from './src/views/Plan/Plan';
import About from './src/views/About/About';
import {baseRed} from './src/config/color';

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
      path:'/',
      navigationOptions:{
        drawerLabel:`主页`
      }
    },
    Whisper:{
      screen:Whisper,
      path:'/whisper',
      navigationOptions:{
        drawerLabel:`悄悄话`
      }
    },
    Album:{
      screen:Album,
      path:'/album',
      navigationOptions:{
        drawerLabel:`照片时光机`
      }
    },
    Scheme:{
      screen:Scheme,
      path:'/scheme',
      navigationOptions:{
        drawerLabel:`恋爱打卡`
      }
    },
    Plan:{
      screen:Plan,
      path:'/plan',
      navigationOptions:{
        drawerLabel:`和Ta约好的事`
      }
    },
    Commemoration:{
      screen:Commemoration,
      path:'/commemoration',
      navigationOptions:{
        drawerLabel:`纪念日`
      }
    },
    About:{
      screen:About,
      path:'/about',
      navigationOptions:{
        drawerLabel:`关于`
      }
    }
  },
  {
    drawerBackgroundColor:'white',
    contentComponent:DrawerContent,
    initialRouteName:'Home',
    edgeWidth:80,
    drawerWidth:250,
    useNativeAnimations:false,
    contentOptions:{
      activeTintColor:baseRed
    }
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
