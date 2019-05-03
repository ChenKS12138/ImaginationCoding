import React,{Component} from 'react';
import {IconButton} from 'react-native-paper';

import back from '../assets/icon/arrow_back.png';
import menu from '../assets/icon/menu.png';

export default class HeaderBarMenu extends Component{
  render(){
    const {onPress,iconType} = this.props;
    const icon = iconType !== 'menu'? back:menu;
    return(
      <IconButton
        mode="text" 
        icon={icon}
        size={28}
        color='white'
        onPress={onPress}
      />
    )
  }
}
