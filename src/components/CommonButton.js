import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';

const styles = StyleSheet.create({
  btn:{
    marginTop: 5,
    marginBottom: 5
  }
})

export default class CommonButton extends Component{
  render(){
    const {icon,text,onPress} = this.props;
    return(
      <Button
        icon={icon}
        onPress={onPress}
        mode="contained"
        style={styles.btn}
      >
        {text}
      </Button>
    )
  }
}