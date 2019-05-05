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
    const {onPress} = this.props;
    return(
      <Card style={styles.card} onPress={onPress}>
        <Card.Title title="照片时光机" left={(props) => <Avatar.Icon {...props} icon="photo" color="white"/>} />
        <Card.Content>
          <Paragraph>和Ta之间的美好时光</Paragraph>
        </Card.Content>
      </Card>
    )
  }
}