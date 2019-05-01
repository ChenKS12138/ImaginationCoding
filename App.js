/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

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

export default class App extends Component{
  state={
    active:'first'
  }
  render() {
    const {acitve} = this.state;
    const menu = (
      <Drawer.Section title="Some title">
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
          <SideMenu menu={menu}>
            <StatusBar translucent={true} backgroundColor='#1874CD' />
            <View style={styles.container}>
              <Home />
            </View>
          </SideMenu>
        </PaperProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
