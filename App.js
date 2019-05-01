/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Button as PaperButton,Drawer} from 'react-native-paper';
import SideMenu from 'react-native-side-menu';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component{
  state={
    active:'first'
  }
  render() {
    const {acitve} = this.state;
    // const menu = (<Text>234</Text>);
    const menu = (<Drawer.Section title="Some title">
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
  </Drawer.Section>);
    return (
        <SideMenu menu={menu}>
          <View style={styles.container}>
            <PaperButton icon="add-a-photo" mode="contained" onPress={() => console.log('Pressed')}>
              Press me
            </PaperButton>
            <Text style={styles.welcome}>Welcome to React Native!</Text>
            <Text style={styles.instructions}>To get started, edit App.js</Text>
            <Text style={styles.instructions}>{instructions}</Text>
          </View>
        </SideMenu>
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
