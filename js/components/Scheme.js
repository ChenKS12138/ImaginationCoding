import React,{Component} from 'react';
import {StyleSheet,Text,View} from 'react-native';
import {Avatar,Button,Card,Paragraph} from 'react-native-paper';

const styles = StyleSheet.create({
  card:{
    marginTop:5,
    marginBottom:5
  }
})

export default class Album extends Component{
  render(){
    return(
      <Card style={styles.card}>
        <Card.Title title="恋爱打卡" left={(props) => <Avatar.Icon {...props} icon="check" />} />
        <Card.Content>
          <Paragraph>恋爱打卡的subtitle</Paragraph>
        </Card.Content>
      </Card>
    )
  }
}