import React,{Component} from 'react';
import {StyleSheet,Text,View,StatusBar} from 'react-native';
import {Avatar,Button,Card,Title,Paragraph,Drawer,Provider as PaperProvider,DefaultTheme} from 'react-native-paper';

import Welcome from '../components/Welcome';
import Whisper from '../components/WhisperEntrance';
import Album from '../components/AlbumEntrance';
import Scheme from '../components/SchemeEntrance';
import Commemoration from '../components/CommemorationEntrance';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  }
};

const styles = StyleSheet.create({
  home:{
    width:300
  },
  container: {
    flex: 1,
    paddingTop: 60,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

export default class Home extends Component{
  state={
    active:'first'
  }
  render(){
    return(
      <PaperProvider theme={theme}>
          <View style={styles.container}>
          <StatusBar style ={styles.statusBar} translucent={true} backgroundColor='#1874CD' />
          <View style={styles.home}>
          <Welcome />
          <Whisper />
          <Album />
          <Scheme />
          <Commemoration />
        </View>
          </View>
      </PaperProvider>
    )
  }
}