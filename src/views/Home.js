import React,{Component} from 'react';
import {StyleSheet,Text,View,StatusBar,ScrollView,ToastAndroid} from 'react-native';
import {Avatar,Button,Card,Title,Paragraph,Drawer,Provider as PaperProvider,DefaultTheme} from 'react-native-paper';
import PTRView from 'react-native-pull-to-refresh-component';

import Welcome from '../components/Welcome';
import Whisper from '../components/WhisperEntrance';
import Album from '../components/AlbumEntrance';
import Scheme from '../components/SchemeEntrance';
import Plan from '../components/PlanEntrance';
import Commemoration from '../components/CommemorationEntrance';
import HeaderBar from '../components/HeaderBar';
import ColorBar from '../components/ColorBar';
import PaddingView from '../components/PaddingView';
import Storager from '../api/Storager';
import moment from 'moment';

import theme from '../config/theme';

const styles = StyleSheet.create({
  home:{
    width:300
  },
  container: {
    flex: 1,
    paddingTop: 5,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFFAFA',
  }
});

export default class Home extends Component{
  state={
    preview:[]
  }
  render(){
    const {navigate} = this.props.navigation;
    const choseComponent={
      'whisper':(item) => (
        <Whisper
          preview={item}
          key ={item.key}
        />
      ),
      'album':(item) => (
        <Album 
          preview={item} 
          key={item.key}
        />
      ),
      'scheme':(item) => (
        <Scheme 
          preview={item}
          key={item.key}
        />
      ),
      'plan':(item) => (
        <Plan 
          preview={item}
          key={item.key}
        />
      ),
      'commemoration':(item) => (
        <Commemoration 
          preview={item}
          key={item.key}
        />
      )
    }
    return(
      <PaperProvider theme={theme}>
      <ColorBar />
      <HeaderBar
        iconType="menu"
        text="主页"
        onPress={() => this.props.navigation.toggleDrawer()}
      />
        <View style={styles.container}>
          <PTRView offset={40} onRefresh={this.getLocalData.bind(this)} showsVerticalScrollIndicator={false}>
          <View style={styles.home} >
            <ScrollView
              showsVerticalScrollIndicator={false}
            >
              <Welcome text="最近" />
              {
                this.state.preview.length!==0
                ?
                this.state.preview.map(item => choseComponent[item.type](item))
                :
                <View style={{flex:1,alignItems:"center",marginTop:60}}>
                  <Text style={{fontSize:15}}>这里啥子都没有哦~ 快来记录和Ta的点点滴滴叭</Text>
                </View>
              }
              <PaddingView />
            </ScrollView>
          </View>
          </PTRView>
        </View>
      </PaperProvider>
    )
  }
  async getLocalData(){
    const data = await Storager.getStorageMulti(['whisper','album','scheme','plan','commemoration'])
    const preview =[];
    data.filter(item => item[1]!=null).forEach((item) => {
      const  temp = item[1] === undefined||item[1] === '' ?{text:""}:JSON.parse(item[1]);
      temp.forEach((val) => {
        preview.push({
            ...val,
            type:item[0],
            key:preview.length+1
        })
      })
    })
    preview.sort((a,b) => moment(b.time).diff(a.time))
    this.setState({preview:preview});
  }
  async componentWillMount(){
    await this.getLocalData();
  }
}