import React,{Component} from 'react';
import {StyleSheet,Text,View} from 'react-native';
import {Avatar,Button,Card,Paragraph} from 'react-native-paper';

const styles = StyleSheet.create({
  card:{
    marginTop:5,
    marginBottom:5
  }
})

export default class WhisperEntrance extends Component{
  render(){
    const {onPress} = this.props;
    return(
      <Card style ={styles.card} onPress={onPress}>
        <Card.Title title="悄悄话" left={(props) => <Avatar.Icon {...props} icon="book" />} />
        <Card.Content>
          <Paragraph>悄悄话的subtitle</Paragraph>
        </Card.Content>
      </Card>
    )
  }
}
