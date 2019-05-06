import React,{Component} from 'react';
import {View,Text,ScrollView,StyleSheet,DeviceEventEmitter} from 'react-native';
import {Portal,Dialog,FAB,Avatar,Button,Card,Title,Paragraph,Drawer,Provider as PaperProvider,DefaultTheme} from 'react-native-paper';
import moment from 'moment';

import Welcome from '../../components/Welcome';
import ColorBar from '../../components/ColorBar';
import HeaderBar from '../../components/HeaderBar';
import theme from '../../config/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFFAFA',
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

export default class AlbumDetail extends Component{
  state={
    visible:false
  }
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
            <Portal>
              <Dialog
                visible={this.state.visible}
                onDismiss={() => this.setState({visible:!this.state.visible})}>
                <Dialog.Title>确认要删除吗?</Dialog.Title>
                <Dialog.Content>
                  <Paragraph>一旦删除就，无法在找回</Paragraph>
                </Dialog.Content>
                <Dialog.Actions>
                  <Button color="grey" style={{marginRight:20}} onPress={() => this.setState({visible:!this.state.visible})}>取消</Button>
                  <Button color="red" onPress={() => {
                    this.setState({visible:!this.state.visible});
                    DeviceEventEmitter.emit('handleAlbumDelete',fileName);
                    goBack();
                  }}>是的</Button>
                </Dialog.Actions>
              </Dialog>
            </Portal>
          </View>
          <FAB
            style={styles.fab}
            icon='delete'
            onPress={() => {
              this.setState({visible:!this.state.visible});
            }}
          ></FAB>
        </View>
      </PaperProvider>
    )
  }
}