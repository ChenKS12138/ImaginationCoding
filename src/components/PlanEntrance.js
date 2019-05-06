import React,{Component} from 'react';
import {StyleSheet,Text,View} from 'react-native';
import {Avatar,Button,Card,Paragraph} from 'react-native-paper';

import moment from 'moment';

const styles = StyleSheet.create({
  card:{
    marginTop:5,
    marginBottom:5
  }
})

export default class WhisperEntrance extends Component{
  render(){
    const {onPress,preview={}} = this.props;
    const time = preview.time === undefined ? moment() : preview.time;
    return(
      <Card style ={styles.card} onPress={onPress}>
        <Card.Title title={'[约好] '+preview.text} left={(props) => <Avatar.Icon {...props} icon="mood" color="white" />} />
        <Card.Content>
          <Paragraph>和Ta约好的事</Paragraph>
          <Paragraph>{moment(time).format('YYYY-MM-DD')}</Paragraph>
        </Card.Content>
      </Card>
    )
  }
}
