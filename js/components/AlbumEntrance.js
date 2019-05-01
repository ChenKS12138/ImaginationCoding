import React,{Component} from 'react';
import {StyleSheet,Text,View} from 'react-native';
import {Avatar,Button,Card,Paragraph,TouchableRipple} from 'react-native-paper';

const styles = StyleSheet.create({
  card:{
    marginTop:5,
    marginBottom:5
  }
})

export default class AlbumEntrance extends Component{
  render(){
    return(
      <Card style={styles.card}>
        <Card.Title title="照片时光机" left={(props) => <Avatar.Icon {...props} icon="photo" />} />
        <Card.Content>
          <Paragraph>照片时光机的subtitle</Paragraph>
        </Card.Content>
      </Card>
    )
  }
}