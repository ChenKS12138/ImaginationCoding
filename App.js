import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,StatusBar} from 'react-native';
import {Button as PaperButton,Drawer,Provider as PaperProvider,DefaultTheme} from 'react-native-paper';
import SideMenu from 'react-native-side-menu';

import Home from './js/views/Home.js';

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
  container: {
    flex: 1,
    paddingTop: 80,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  drawer:{
    paddingTop:60
  }
});

export default class App extends Component{
  state={
    active:'first'
  }
  render() {
    const {acitve} = this.state;
    const menu = (
      <Drawer.Section title="功能菜单" style={styles.drawer}>
        <Drawer.Item
          label="First Item"
          active={this.active === 'first'}
          onPress={() => { this.setState({ active: 'first' }); }}
        />
        <Drawer.Item
          label="Second Item"
          active={this.active === 'second'}
          onPress={() => { this.setState({ active: 'second' }); }}
        />
      </Drawer.Section>
    );
    
    return (
        <PaperProvider theme={theme}>
          <SideMenu 
            menu={menu}
            openMenuOffset={160}
            edgeHitWidth={140}

          >
            <StatusBar translucent={true} backgroundColor='#1874CD' />
            <View style={styles.container}>
              <Home />
            </View>
          </SideMenu>
        </PaperProvider>
    );
  }
}
