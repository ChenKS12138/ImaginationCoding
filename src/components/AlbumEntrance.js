import React,{Component} from 'react';
import {StyleSheet,Text,View} from 'react-native';
import {Avatar,Button,Card,Paragraph,TouchableRipple} from 'react-native-paper';

import moment from 'moment';
import RNFS from 'react-native-fs';

const styles = StyleSheet.create({
  card:{
    marginTop:5,
    marginBottom:5
  }
})

export default class AlbumEntrance extends Component{
  state={
    image:null
  }
  render(){
    const {onPress,preview={}} = this.props;
    const time = preview.time === undefined ? moment():preview.time;
    return(
      <Card style={styles.card} onPress={onPress}>
        <Card.Title title={`[照片] ${preview.description}`} left={(props) => <Avatar.Icon {...props} icon="photo" color="white"/>} />
        <Card.Cover source={this.state.image} />
        <Card.Content>
          <Paragraph>照片时光机</Paragraph>
          <Paragraph>{moment(time).format('YYYY-MM-DD')}</Paragraph>
        </Card.Content>
      </Card>
    )
  }
  async componentWillMount(){
    const {preview = {}} =this.props;
    const image = await RNFS.readFile(RNFS.DocumentDirectoryPath+`/${preview.fileName}.jpg`);
    this.setState({image:{uri:`data:image/jpg;base64,${image}`}})
  }
}