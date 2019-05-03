import React,{Component} from 'react';
import {StyleSheet,Text,View} from 'react-native';
import {Avatar,Button,Card,Paragraph} from 'react-native-paper';

const styles = StyleSheet.create({
  card:{
    marginTop:5,
    marginBottom:5
  }
})

export default class SchemeEntrance extends Component{
  render(){
    const {onPress} = this.props;
    return(
      <Card style={styles.card} onPress={onPress}>
        <Card.Title title="恋爱打卡" left={(props) => <Avatar.Icon {...props} icon="check" />} />
        <Card.Content>
          <Paragraph>恋爱打卡的subtitle</Paragraph>
        </Card.Content>
      </Card>
    )
  }
}