import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';

import HeaderBarMenu from './HeaderBarMenu';

const styles = StyleSheet.create({
  header:{
    margin:0,
    width:'100%',
    height:57,
    backgroundColor:'#1874CD',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  title:{
    fontSize:25,
    lineHeight:60,
    color:'white',
    marginLeft:10,
    fontWeight:'bold'
  }
})

export default class HeaderBar extends Component{
  render(){
    const {onPress,iconType,text='Home'} = this.props;
    return(
      <View style={styles.header}>
        <HeaderBarMenu onPress={onPress} iconType={iconType}/>
        <Text style={styles.title}>{text}</Text>
      </View>
    )
  }
}