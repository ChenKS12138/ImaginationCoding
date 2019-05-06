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

export default class SchemeEntrance extends Component{
  render(){
    const {onPress,preview={}} = this.props;
    const time = preview.time === undefined ? moment():preview.time;
    return(
      <Card style={styles.card} onPress={onPress}>
        <Card.Title title={`[打卡] ${preview.text}`} left={(props) => <Avatar.Icon {...props} icon="check" color="white" />} />
        <Card.Content>
          <Paragraph>恋爱打卡</Paragraph>
          <Paragraph>{moment(time).format('YYYY-MM-DD')}</Paragraph>
        </Card.Content>
      </Card>
    )
  }
}