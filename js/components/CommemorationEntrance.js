import React,{Component} from 'react';
import {StyleSheet,Text,View} from 'react-native';
import {Avatar,Button,Card,Paragraph} from 'react-native-paper';

const styles = StyleSheet.create({
  card:{
    marginTop:5,
    marginBottom:5
  }
})

export default class CommemorationEntrance extends Component{
  render(){
    return(
      <Card style ={styles.card}>
        <Card.Title title="纪念日" left={(props) => <Avatar.Icon {...props} icon="event" />} />
        <Card.Content>
          <Paragraph>纪念日的subtitle</Paragraph>
        </Card.Content>
      </Card>
    )
  }
}
