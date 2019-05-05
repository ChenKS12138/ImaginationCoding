import React,{Component} from 'react';
import {StyleSheet,Text,View,StatusBar,ScrollView} from 'react-native';
import {Avatar,Button,Card,Title,Paragraph,Drawer,Provider as PaperProvider,DefaultTheme} from 'react-native-paper';
import { DrawerActions } from 'react-navigation-drawer';

import Welcome from '../components/Welcome';
import Whisper from '../components/WhisperEntrance';
import Album from '../components/AlbumEntrance';
import Scheme from '../components/SchemeEntrance';
import Plan from '../components/PlanEntrance';
import Commemoration from '../components/CommemorationEntrance';
import HeaderBar from '../components/HeaderBar';
import ColorBar from '../components/ColorBar';
import PaddingView from '../components/PaddingView';

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
    backgroundColor: '#FFFAFA',
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
        text="主页"
        onPress={() => this.props.navigation.toggleDrawer()}
      />
        <View style={styles.container}>
          <View style={styles.home} >
            <ScrollView
              showsVerticalScrollIndicator={false}
            >
              <Welcome text="Home" />
              <Whisper onPress={() => navigate('Whisper')}/>
              <Album onPress={() => navigate('Album')}/>
              <Scheme onPress={() => navigate('Scheme')}/>
              <Plan onPress={() => navigate('Plan')}/>
              <Commemoration onPress={() => navigate('Commemoration')}/>
              <PaddingView />
            </ScrollView>
          </View>
        </View>
      </PaperProvider>
    )
  }
}