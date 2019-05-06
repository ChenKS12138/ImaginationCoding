import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  paddingView:{
    height:80
  }
})

export default class PaddingView extends Component{
  render(){
    return(
      <View style={styles.paddingView} />
    )
  }
}
