import React,{Component} from 'react';
import {StyleSheet,Text,View,StatusBar,ScrollView,DeviceEventEmitter} from 'react-native';
import {FAB,Avatar,Button,Card,Title,Paragraph,Drawer,Provider as PaperProvider,DefaultTheme} from 'react-native-paper';
import moment from 'moment';
import genKey from '../../utils/randomString';
import Storager from '../../api/Storager';

import Welcome from '../../components/Welcome';
import PaddingView from '../../components/PaddingView';
import HeaderBar from '../../components/HeaderBar';
import ColorBar from '../../components/ColorBar';
import NavigationService from '../../utils/NavigationService';

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
    backgroundColor:'teal'
  },
  scheme:{
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

const fakeData= [
  {
    title:'每天和TA在一起',
    timeList:[
      moment().set('date',2).format('x'),
      moment().set('date',1).format('x')
    ]
  },
  {
    title:'哈哈233',
    timeList:[
      moment().set('date',2).format('x'),
      moment().set('date',1).format('x')
    ]
  }
]

export default class SchemeHome extends Component{
  state={
    schemeData:[]
  }
  render(){
    const {navigate} = this.props.navigation;
    return(
      <PaperProvider theme={theme}>
        <ColorBar />
        <HeaderBar 
          text="恋爱打卡"
          iconType="menu"
          onPress={() => NavigationService.toggleDrawer()}
        />
        <View style={styles.container}>
            <View style={styles.scheme}>
              <ScrollView
                showsVerticalScrollIndicator={false}
              >
                <Welcome text="Scheme" />
                {
                  this.state.schemeData.length !== 0
                  ?
                  this.state.schemeData.sort((a,b) => moment(b.time).diff(a.time)).map((item,index) => {
                  return(
                    <Card
                      style={styles.card}
                      key={index} 
                      onPress={() => navigate('SchemeDetail',{
                        title:item.title,
                        timeList:item.timeList,
                        sid:item.sid
                      })}
                    >
                      <Card.Title title={item.title} />
                      <Card.Content>
                        <Text>已经 {item.timeList.length}天了 </Text>
                      </Card.Content>
                    </Card>
                  )
                })
                :
                <View style={{flex:1,alignItems:"center",marginTop:60}}>
                  <Text style={{fontSize:15}}>这里啥子都没有哦~快来给自己定个小目标叭</Text>
                </View>
                }
                <PaddingView />
              </ScrollView>
          </View>
          <FAB
            style={styles.fab}
            icon='add'
            onPress={() => navigate('SchemeCreate')}
          ></FAB>
        </View>
      </PaperProvider>
    )
  }
  componentWillMount(){
    Storager.getStorage('scheme')
      .then(res =>{
        this.setState({schemeData:res === undefined || ''?[]:JSON.parse(res)});
      });
  }
  componentDidMount(){
    DeviceEventEmitter.addListener('handleAdd',title => {
      const OutDateSchemeData = this.state.schemeData;
      OutDateSchemeData.push(
        {
          title:title,
          sid:genKey(),
          time:moment().toDate(),
          timeList:[]
        }
      );
      this.setState({'schemeData':OutDateSchemeData});
      Storager.setStorage('scheme',JSON.stringify(OutDateSchemeData));
    })
    DeviceEventEmitter.addListener('handleDelete',sid => {
      const OutDateSchemeData = this.state.schemeData;
      const targetIndex = OutDateSchemeData.findIndex(item => item.sid === sid);
      OutDateSchemeData.splice(targetIndex,1);
      this.setState({scheme:OutDateSchemeData});
      Storager.setStorage('scheme',JSON.stringify(OutDateSchemeData));
    });
    DeviceEventEmitter.addListener('handleDaka',sid => {
      const OutDateSchemeData = this.state.schemeData;
      const target = OutDateSchemeData[OutDateSchemeData.findIndex(item => item.sid === sid)];
      if(target.timeList.length===0||moment(target.timeList[target.timeList.length-1]).format('YYYY-MM-DD') !== moment().format('YYYY-MM-DD')){
        target.timeList.push(moment().toDate());
        this.setState({schemeData:OutDateSchemeData});
        Storager.setStorage('scheme',JSON.stringify(OutDateSchemeData));
      }
    });
  }
  componentWillUnmount(){
    DeviceEventEmitter.removeAllListeners();
  }
}