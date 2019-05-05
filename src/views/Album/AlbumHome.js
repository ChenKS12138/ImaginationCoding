import React,{Component} from 'react';
import {StyleSheet,Text,View,StatusBar,ScrollView,DeviceEventEmitter} from 'react-native';
import {FAB,Avatar,Button,Card,Title,Paragraph,Drawer,Provider as PaperProvider,DefaultTheme} from 'react-native-paper';
import moment from 'moment';
import RNFS from 'react-native-fs';
import Storager from '../../api/Storager.js';
import genKey from '../../utils/randomString';

import Welcome from '../../components/Welcome';
import PaddingView from '../../components/PaddingView';
import ColorBar from '../../components/ColorBar';
import NavigationService from '../../utils/NavigationService';
import HeaderBar from '../../components/HeaderBar';

import img0 from '../../assets/img/img0.jpg';
import img2 from '../../assets/img/img2.jpg';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
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

const fakeData= [
  {
    title:'风铃',
    img:img0,
    time:'刚刚',
    description:'风铃'
  },
  {
    title:'猫咪mua',
    img:img2,
    time:'刚刚',
    description:'猫咪mua'
  },
  {
    title:'风铃',
    img:img0,
    time:'刚刚',
    description:'风铃'
  },
  {
    title:'猫咪mua',
    img:img2,
    time:'刚刚',
    description:'猫咪'
  },
  {
    title:'风铃',
    img:img0,
    time:'刚刚'
  },
  {
    title:'猫咪mua',
    img:img2,
    time:'刚刚'
  }
]

export default class SchemeHome extends Component{
  state={
    albumData:[],
    imageData:[]
  }
  render(){
    const {navigate} = this.props.navigation;
    return(
      <PaperProvider theme={theme}>
        <ColorBar />
        <HeaderBar 
          text="照片时光机"
          iconType="menu"
          onPress={() => NavigationService.toggleDrawer()}
        />
        <View style={styles.container}>
            <View style={styles.album}>
              <ScrollView
                showsVerticalScrollIndicator={false}
              >
                <Welcome text="Album" />
                {
                  this.state.albumData.length !== 0
                  ?
                  this.state.albumData.map((item,index) => {
                  return(
                    <Card
                      style={styles.card}
                      key={index}
                      onPress = {() => navigate('AlbumDetail',{
                        image:this.state.imageData[this.state.imageData.findIndex(img => img.fileName === item.fileName)].imgSource,
                        time:item.time,
                        description:item.description,
                        fileName:item.fileName
                      })}
                    >
                      <Card.Title title={item.description} />
                      <Card.Cover source={this.state.imageData[this.state.imageData.findIndex(img => img.fileName === item.fileName)].imgSource} />
                    </Card>
                  )
                })
                :
                  <View style={{flex:1,alignItems:"center",marginTop:60}}>
                    <Text style={{fontSize:15}}>这里啥子都没有哦~ 快来添加和Ta的照片叭</Text>
                  </View>
                }
                <PaddingView />
              </ScrollView>
          </View>
          <FAB
            style={styles.fab}
            icon='add'
            onPress={() => navigate('AlbumCreate')}
          ></FAB>
        </View>
      </PaperProvider>
    )
  }
  componentWillMount(){
    Storager.getStorage('album')
      .then(res => {
        res = res === undefined||res === '' ?[]:JSON.parse(res);
        this.setState({imageData:res.map(item => {return{fileName:item.fileName,imgSource:img0}})});
        this.setState({albumData:res});
        Promise.all(
          res.map(item => RNFS.readFile(RNFS.DocumentDirectoryPath+`/${item.fileName}.jpg`))
        )
          .then(imageRes => {
            const ImageSource = res.map((item,index) => {
              return {fileName:item.fileName,imgSource:{uri:'data:image/jpg;base64,'+imageRes[index]}};
            })
            this.setState({imageData:ImageSource});
          })
      });
    RNFS.readDir(RNFS.DocumentDirectoryPath).then(res => console.log(res));
  }
  componentDidMount(){
    DeviceEventEmitter.addListener('handleAlbumAdd',(imgSource,description) => {
      const OutDateAlbumData = this.state.albumData;
      const OutDateImageData = this.state.imageData;
      const fileName = genKey();
      OutDateImageData.push(
        {
          fileName:fileName,
          imgSource:{uri:'data:image/jpg;base64,'+imgSource}
        }
      );
      OutDateAlbumData.push(
        {
          fileName:fileName,
          description:description,
          time:moment().toDate()
        }
      );
      this.setState({imageData:OutDateImageData});
      this.setState({albumData:OutDateAlbumData});
      RNFS.writeFile(RNFS.DocumentDirectoryPath+`/${fileName}.jpg`,imgSource);
      Storager.setStorage('album',JSON.stringify(OutDateAlbumData));
    })
    DeviceEventEmitter.addListener('handleAlbumDelete',(fileName=null) => {
      if(fileName!==null){
        RNFS.unlink(RNFS.DocumentDirectoryPath+`/${fileName}.jpg`)
        const OutDateAlbumData = this.state.albumData;
        const targetIndex = OutDateAlbumData.find(item => item.fileName === fileName);
        OutDateAlbumData.splice(targetIndex,1);
        Storager.setStorage('album',JSON.stringify(OutDateAlbumData));
        this.setState({albumData:OutDateAlbumData});
      }
    })
  }
  componentWillUnmount(){
    DeviceEventEmitter.removeAllListeners();
  }
}