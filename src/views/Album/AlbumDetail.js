import React,{Component} from 'react';
import {View,Text,ScrollView,StyleSheet,DeviceEventEmitter} from 'react-native';
import {FAB,Avatar,Button,Card,Title,Paragraph,Drawer,Provider as PaperProvider,DefaultTheme} from 'react-native-paper';
import moment from 'moment';

import Welcome from '../../components/Welcome';
import ColorBar from '../../components/ColorBar';
import HeaderBar from '../../components/HeaderBar';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  fab:{
    position:'absolute',
    margin: 16,
    right:0,
    top:420,
    backgroundColor:'red'
  },
  album:{
    width:300
  },
  card:{
    marginTop:5,
    marginBottom:5
  }
})

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  }
};

export default class AlbumDetail extends Component{
  render(){
    const {image=null,time='刚刚',description='这是照片',fileName=null} = this.props.navigation.state.params;
    const {goBack} = this.props.navigation;
    return(
      <PaperProvider theme={theme}>
        <ColorBar />
        <HeaderBar 
          iconType="back"
          text="照片详情"
          onPress={() => goBack()}
        />
        <View style={styles.container}>
            <View style={styles.album}>
              <Welcome text="照片详情" />
              <ScrollView>
                <Card
                  style={styles.card}
                >
                  <Card.Title title={description}/>
                  <Card.Cover 
                    source={image}
                  />
                  <Card.Content>
                    <Paragraph>{description}</Paragraph>
                    <Paragraph>{moment(time).format('YYYY-MM-DD')}</Paragraph>
                  </Card.Content>
                </Card>
              </ScrollView>
          </View>
          <FAB
            style={styles.fab}
            icon='delete'
            onPress={() => {
              DeviceEventEmitter.emit('handleAlbumDelete',fileName);
              goBack();
            }}
          ></FAB>
        </View>
      </PaperProvider>
    )
  }
}