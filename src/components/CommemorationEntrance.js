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
    const {onPress} = this.props;
    return(
      <Card style ={styles.card} onPress={onPress}>
        <Card.Title title="纪念日" left={(props) => <Avatar.Icon {...props} icon="event" color="white" />} />
        <Card.Content>
          <Paragraph>纪念日的subtitle</Paragraph>
        </Card.Content>
      </Card>
    )
  }
}
