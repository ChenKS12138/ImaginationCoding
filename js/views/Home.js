import React,{Component} from 'react';
import {StyleSheet,Text,View} from 'react-native';
import {Avatar,Button,Card,Title,Paragraph} from 'react-native-paper';

import Welcome from '../components/Welcome.js';
import Whisper from '../components/Whisper.js';
import Album from '../components/Album.js';
import Scheme from '../components/Scheme.js';
import Commemoration from '../components/Commemoration.js';

const styles = StyleSheet.create({
  home:{
    width:300
  }
});

export default class Home extends Component{
  render(){
    return(
      <View style={styles.home}>
        <Welcome />
        <Whisper />
        <Album />
        <Scheme />
        <Commemoration />
      </View>
    )
  }
}