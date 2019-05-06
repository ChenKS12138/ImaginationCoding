import React,{Component} from 'react';
import {StyleSheet,Text,View,StatusBar,ScrollView,DeviceEventEmitter} from 'react-native';
import {FAB,Avatar,Button,Card,Title,Paragraph,Drawer,Provider as PaperProvider,DefaultTheme} from 'react-native-paper';
import moment from 'moment';
import momentLocale from 'moment/locale/zh-cn';
import Storager from '../../api/Storager';
import genKey from '../../utils/randomString';
import PTRView from 'react-native-pull-to-refresh-component';

import Welcome from '../../components/Welcome';
import PaddingView from '../../components/PaddingView';
import HeaderBar from '../../components/HeaderBar';
import ColorBar from '../../components/ColorBar';
import NavigationService from '../../utils/NavigationService';
import theme from '../../config/theme';
import {fabColor} from '../../config/color';

moment.updateLocale('zh-cn', momentLocale);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFFAFA'
  },
  fab:{
    position:'absolute',
    margin: 16,
    right:0,
    top:420,
    backgroundColor:'teal'
  },
  commemoration:{
    width:300
  },
  card:{
    marginTop:5,
    marginBottom:5
  },
  ScrollView:{
    paddingTop: 5,
    paddingBottom: 30,
  },
  PTR:{
    backgroundColor:'#FFFAFA'
  }
})

export default class CommemorationHome extends Component{
  state={
    commemorationData:[]
  }
  render(){
    const {navigate} = this.props.navigation;
    return(
      <PaperProvider theme={theme}>
        <ColorBar />
        <HeaderBar 
          text="纪念日"
          iconType="menu"
          onPress={() => NavigationService.toggleDrawer()}
        />
        <PTRView onRefresh={async () => setTimeout(() => {return true},1000)} showsVerticalScrollIndicator={false} style={styles.PTR}>
          <View style={styles.container}>
            <View style={styles.commemoration}>
              <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.ScrollView}
              >
                <Welcome text="commemoration" />
                {
                  this.state.commemorationData.length !==0
                  ?
                  this.state.commemorationData.sort((a,b) => moment(b.date).diff(a.date)).map((item,index) => {
                    return(
                      <Card style={styles.card} key={index} onPress={() => navigate('CommemorationDetail',{
                        title:item.text,
                        time:item.time,
                        isAnnual:item.isAnnual,
                        cid:item.cid,
                        date:item.date
                      })}>
                        <Card.Title title={item.text} />
                        <Card.Content>
                          <Paragraph>{item.isAnnual ===false?moment(item.date).diff(moment().toDate()) > 0 ? '还有' + moment().to(item.date,true) + '诶': '已经过了' + moment().from(item.date,true) + '诶':'还有' + moment().to(item.date,true) + '诶'}</Paragraph>
                        </Card.Content>
                      </Card>
                    )
                  })
                  :
                  <View style={{flex:1,alignItems:"center",marginTop:60}}>
                    <Text style={{fontSize:15}}>这里啥子都没有哦~ 快来记录下和TA的特殊的日子叭</Text>
                  </View>
                }
                <PaddingView />
              </ScrollView>
          </View>
        <FAB
          style={styles.fab}
          icon='add'
          onPress={() => navigate('CommemorationCreate')}
        ></FAB>
      </View>
        </PTRView>
      </PaperProvider>
    )
  }
  componentWillMount(){
    Storager.getStorage('commemoration')
      .then(res => {
        res = res === undefined || res === ''?'[]':res;
        this.setState({'commemorationData':JSON.parse(res)});
      })
  }
  componentDidMount(){
    DeviceEventEmitter.addListener('handleCommemorationAdd',(text,date,isAnnual) => {
      const OutDateData = this.state.commemorationData;
      OutDateData.push(
        {
          text:text,
          date:date,
          isAnnual:isAnnual,
          time:moment().toDate(),
          cid:genKey()
        }
      );
      this.setState({commemorationData:OutDateData});
      Storager.setStorage('commemoration',JSON.stringify(OutDateData));
    });
    DeviceEventEmitter.addListener('handleCommemorationDelete',cid => {
      const OutDateData = this.state.commemorationData;
      const targetIndex = OutDateData.findIndex(item => item.cid === cid);
      OutDateData.splice(targetIndex,1);
      this.setState({'commemorationData':OutDateData});
      Storager.setStorage('commemoration',JSON.stringify(OutDateData));
    });
  }
  componentWillUnmount(){
    DeviceEventEmitter.removeAllListeners();
  }
}