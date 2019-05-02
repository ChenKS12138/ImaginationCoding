import React,{Component} from 'react';
import {StyleSheet,Text,View} from 'react-native';

const style = StyleSheet.create({
  title:{
    fontSize:30
  }
})

// export default Welcome = () => (
//   <Text style={style.title}>欢迎</Text>
// )

export default class Welcome extends Component{
  render(){
    const {text="空"} = this.props;
    return(
      <View>
        <Text style={style.title}>{text}</Text>
      </View>
    )
  }
}