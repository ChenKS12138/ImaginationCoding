import React,{Component} from 'react';
import {StyleSheet,Text,View} from 'react-native';
import {Avatar,Button,Card,Title,Paragraph} from 'react-native-paper';

import Welcome from '../components/Welcome.js';

const style = StyleSheet.create({

});

export default class Home extends Component{
  render(){
    return(
      <View>
        <Welcome />
      </View>
    )
  };
  componentDidMount(){
    console.log(222)
  }
}