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

export default class CommemorationEntrance extends Component{
  render(){
    const {onPress,preview={}} = this.props;
    const time = preview.time === undefined ? moment() : preview.time;
    return(
      <Card style ={styles.card} onPress={onPress}>
        <Card.Title title={`[${preview.text}] ` + (preview.isAnnual ===false?(moment(preview.date).diff(moment().toDate()) > 0 ? '还有' + moment().to(preview.date,true) + '诶': '已经过了' + moment().from(preview.date,true)):'还有' + moment().to(preview.date,true))} left={(props) => <Avatar.Icon {...props} icon="event" color="white" />} />
        <Card.Content>
          <Paragraph>[纪念日]{preview.text}</Paragraph>
          <Paragraph>{moment(time).format('YYYY-MM-DD')}</Paragraph>
        </Card.Content>
      </Card>
    )
  }
}
