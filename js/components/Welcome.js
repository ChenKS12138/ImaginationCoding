import React,{Component} from 'react';
import {StyleSheet,Text,View} from 'react-native';

const style = StyleSheet.create({
  title:{
    fontSize:30
  }
})

export default class Welcome extends Component{
  render(){
    return(
      <Text style={style.title}>欢迎</Text>
    )
  }
}
