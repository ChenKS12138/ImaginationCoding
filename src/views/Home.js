import React,{Component} from 'react';
import {StyleSheet,Text,View,StatusBar,ScrollView} from 'react-native';
import {Avatar,Button,Card,Title,Paragraph,Drawer,Provider as PaperProvider,DefaultTheme} from 'react-native-paper';
import { DrawerActions } from 'react-navigation-drawer';

import Welcome from '../components/Welcome';
import Whisper from '../components/WhisperEntrance';
import Album from '../components/AlbumEntrance';
import Scheme from '../components/SchemeEntrance';
import Commemoration from '../components/CommemorationEntrance';
import HeaderBar from '../components/HeaderBar';
import ColorBar from '../components/ColorBar';

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
    paddingTop: 5,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

export default class Home extends Component{
  render(){
    const {navigate} = this.props.navigation;
    return(
      <PaperProvider theme={theme}>
      <ColorBar />
      <HeaderBar
        iconType="menu"
        text="home"
        onPress={() => this.props.navigation.toggleDrawer()}
      />
        <View style={styles.container}>
          {/* <StatusBar style ={styles.statusBar} translucent={true} backgroundColor='#1874CD' /> */}
          <View style={styles.home} >
            <ScrollView
              showsVerticalScrollIndicator={false}
            >
              <Welcome text="欢迎" />
              <Whisper onPress={() => navigate('Whisper')}/>
              <Album onPress={() => navigate('Album')}/>
              <Scheme onPress={() => navigate('Scheme')}/>
              <Commemoration onPress={() => navigate('Commemoration')}/>
            </ScrollView>
          </View>
        </View>
      </PaperProvider>
    )
  }
}