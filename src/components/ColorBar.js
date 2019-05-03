import React,{Component} from 'react';
import {StatusBar,View} from 'react-native';

export default class ColorBar extends Component{
  render(){
    return(
      <View style={{
        height:StatusBar.currentHeight
      }}>
        <StatusBar 
          translucent={true}
          backgroundColor='#1874CD'
          animated={true}
        />
      </View>
    )
  }
}