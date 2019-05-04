import React,{Component} from 'react';
import {StyleSheet,Text,View,StatusBar,ScrollView,DeviceEventEmitter} from 'react-native';
import {FAB,Avatar,Button,Card,Title,Paragraph,Drawer,Provider as PaperProvider,DefaultTheme} from 'react-native-paper';
import moment from 'moment';
import momentLocale from 'moment/locale/zh-cn';
import Storager from '../../api/Storager';
import genKey from '../../utils/randomString';

import Welcome from '../../components/Welcome';
import PaddingView from '../../components/PaddingView';
import HeaderBar from '../../components/HeaderBar';
import ColorBar from '../../components/ColorBar';
import NavigationService from '../../utils/NavigationService';

moment.updateLocale('zh-cn', momentLocale);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
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
    paddingTop: 30,
    paddingBottom: 30,
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
    title:'TA的生日',
    annual:true,
    time:'很久之前'
  },
  {
    title:'认识多少天',
    annual:false,
    time:'就刚刚'
  },
  {
    title:'TA的生日',
    annual:true,
    time:'很久之前'
  },
  {
    title:'认识多少天',
    annual:false,
    time:'就刚刚'
  },
  {
    title:'TA的生日',
    annual:true,
    time:'很久之前'
  },
  {
    title:'认识多少天',
    annual:false,
    time:'就刚刚'
  }
]

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
        <View style={styles.container}>
            <View style={styles.commemoration}>
              <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.ScrollView}
              >
                <Welcome text="纪念日" />
                {this.state.commemorationData.map((item,index) => {
                  return(
                    <Card style={styles.card} key={index} onPress={() => navigate('CommemorationDetail',{
                      title:item.text,
                      time:item.time,
                      annual:item.isAnnual
                    })}>
                      <Card.Title title={item.text} />
                      <Card.Content>
                        <Paragraph>{moment(item.time).fromNow(true)}</Paragraph>
                        <Text>{item.isAnnual}</Text>
                      </Card.Content>
                    </Card>
                  )
                })}
                <PaddingView />
              </ScrollView>
          </View>
          <FAB
            style={styles.fab}
            icon='add'
            onPress={() => navigate('CommemorationCreate')}
          ></FAB>
        </View>
      </PaperProvider>
    )
  }
  componentWillMount(){
    Storager.getStorage('commemoration')
      .then(res => {
        res = res === undefined || res === ''?'[]':res;
        this.setState({'commemorationData':JSON.parse(res)});
        console.log(this.state.commemorationData);
      })
  }
  componentDidMount(){
    DeviceEventEmitter.addListener('handleAdd',(text,date,isAnnual) => {
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
    DeviceEventEmitter.addListener('handleDelete');
  }
  componentWillUnmount(){
    DeviceEventEmitter.removeAllListeners();
  }
}