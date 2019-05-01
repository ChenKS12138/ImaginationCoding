import React,{Component} from 'react';
import {StyleSheet,Text,View,StatusBar,ScrollView} from 'react-native';
import {FAB} from 'react-native-paper';

const styles = StyleSheet.create({
  container:{
    paddingTop:60,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  fab:{
    position:'absolute',
    margin: 16,
    right:0,
    top:520,
    backgroundColor:'teal'
  }
})

const fakeData= [
  {
    text:'lalala'
  },
  {
    text:'hahah'
  }
]

export default class Whisper extends Component{
  render(){
    return(
      <View style={styles.container}>
        <StatusBar style ={styles.statusBar} translucent={true} backgroundColor='#1874CD' />
        <Text>Whisper</Text>
        {fakeData.map((item,index) => <Text key = {index}>{item.text}</Text>)}
        <FAB
          style={styles.fab}
          icon='add'
        ></FAB>
      </View>
    )
  }
}