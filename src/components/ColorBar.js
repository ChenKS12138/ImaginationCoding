import React,{Component} from 'react';
import {StatusBar,View} from 'react-native';

import {statusBarColor} from '../config/color';

export default class ColorBar extends Component{
  render(){
    return(
      <View style={{
        height:StatusBar.currentHeight
      }}>
        <StatusBar 
          translucent={true}
          backgroundColor={statusBarColor}
          // backgroundColor='#1874CD'
          animated={true}
        />
      </View>
    )
  }
}