import React,{Component} from 'react';
import {StyleSheet,Text,View,StatusBar,ScrollView,DeviceEventEmitter} from 'react-native';
import {FAB,Avatar,Button,Card,Title,Paragraph,Drawer,Provider as PaperProvider,DefaultTheme} from 'react-native-paper';
import moment from 'moment';
import genKey from '../../utils/randomString';
import PTRView from 'react-native-pull-to-refresh-component';

import Welcome from '../../components/Welcome';
import HeaderBar from '../../components/HeaderBar';
import ColorBar from '../../components/ColorBar';
import NavigationService from '../../utils/NavigationService';
import Storager from '../../api/Storager.js';
import PaddingView from '../../components/PaddingView';
import theme from '../../config/theme';
import {fabColor} from '../../config/color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFFAFA',
  },
  PTR:{
    backgroundColor:'#FFFAFA'
  },
  fab:{
    position:'absolute',
    margin: 16,
    right:0,
    top:420,
    backgroundColor:fabColor
  },
  whisper:{
    width:300
  },
  card:{
    marginTop:5,
    marginBottom:5
  }
})

export default class WhisperHome extends Component{
  state={
    messageData:[]
  }
  render(){
    const {navigate} = this.props.navigation;
    return(
      <PaperProvider theme={theme}>
        <ColorBar/>
        <HeaderBar 
          text="悄悄话"
          iconType="menu"
          onPress={() => NavigationService.toggleDrawer()}
        />
        <PTRView offset={40} onRefresh={async () => setTimeout(() => {return true},1000)} showsVerticalScrollIndicator={false} style={styles.PTR}>
          <View style={styles.container}>
            <View style={styles.whisper}>
              <ScrollView
                showsVerticalScrollIndicator={false}
              >
                <Welcome text="Whisper" />
                {
                  this.state.messageData.length!==0
                  ?
                  this.state.messageData.sort((a,b) => moment(b.time).diff(a.time)).map((item,index) => {
                    return(
                      <Card style={styles.card} key={index} onPress={() => navigate('WhisperDetail',{
                        text:item.text,
                        time:item.time,
                        mid:item.mid
                      })}>
                        <Card.Title title={item.text} />
                        <Card.Content>
                          <Paragraph>{moment(item.time).format('YYYY-MM-DD')}</Paragraph>
                        </Card.Content>
                      </Card>
                    )
                  })
                  :
                  <View style={{flex:1,alignItems:"center",marginTop:60}}>
                    <Text style={{fontSize:15}}>这里啥子都没有哦~ 快来写下和TA的悄悄话叭</Text>
                  </View>
                }
                <PaddingView />
              </ScrollView>
          </View>
        </View>
        </PTRView>
        
        <FAB
          style={styles.fab}
          icon='add'
          onPress={() => navigate('WhisperCreate')}
        ></FAB>
      </PaperProvider>
    )
  }
  componentWillMount(){
    Storager.getStorage('whisper')
      .then(res => {
        res = res === undefined||res === '' ?'[]':res;
        this.setState({'messageData':JSON.parse(res)});
      })
  }
  componentDidMount(){
    DeviceEventEmitter.addListener('handleWhisperAdd',text => {
      const OutDateMessageDate = this.state.messageData;
      OutDateMessageDate.push({text:text,time:moment().toDate(),mid:genKey()})
      this.setState({messageData:OutDateMessageDate});
      Storager.setStorage('whisper',JSON.stringify(this.state.messageData))
    })
    DeviceEventEmitter.addListener('handleWhisperDelete',mid => {
      const OutDateMessageDate = this.state.messageData;
      const targerIndex = OutDateMessageDate.findIndex(item => item.mid === mid);
      OutDateMessageDate.splice(targerIndex,1);
      this.setState({'messageData':OutDateMessageDate});
      Storager.setStorage('whisper',JSON.stringify(OutDateMessageDate));
    })
  }
  componentWillUnmount(){
    DeviceEventEmitter.removeAllListeners();
  }
}