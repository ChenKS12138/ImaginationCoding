import React,{Component} from 'react';
import {View,Text,ScrollView,StyleSheet,PermissionsAndroid,DeviceEventEmitter} from 'react-native';
import {TextInput,FAB,Avatar,Button,Card,Title,Paragraph,Drawer,Provider as PaperProvider,DefaultTheme} from 'react-native-paper';
import ImagePicker from 'react-native-image-picker';
import RNFS from 'react-native-fs';
import ImageResizer from 'react-native-image-resizer';

import Welcome from '../../components/Welcome';
import ColorBar from '../../components/ColorBar';
import HeaderBar from '../../components/HeaderBar';

import fengling from '../../assets/img/img0.jpg';

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    backgroundColor:'green'
  },
  album:{
    width:300
  },
  card:{
    marginTop:5,
    marginBottom:5
  },
  btn:{
    marginTop:60,
    color:'white',
    height:50,
    display: 'flex',
    alignItems:'center'
  },
  input:{
    backgroundColor:'transparent'
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

const pickerOptions = {
  title: 'Select Avatar',
  customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  }
}

export default class AlbumCreate extends Component{
  state={
    imgSource:null,
    description:"",
    rawImg:null,
  };
  render(){
    const {goBack} = this.props.navigation;
    return(
      <PaperProvider theme={theme}>
        <ColorBar />
        <HeaderBar
          iconType="back"
          text="新的照片"
          onPress={() => goBack()}
        />
        <View style={styles.container}>
            <View style={styles.album}>
              <ScrollView
                showsVerticalScrollIndicator={false}
              >
              <Welcome text="新的照片" />
                <Card
                  style={styles.card}
                >
                  <Card.Title title="快来记录下和Ta的点点滴滴吧~"/>
                  <Card.Cover source={this.state.imgSource}/>
                </Card>
                <TextInput 
                  label="描述"
                  value={this.state.description}
                  onChangeText={text => this.setState({description:text})}
                  style={styles.input}
                />
                <Button
                  icon="add-a-photo"
                  mode="contained"
                  style={styles.btn}
                  color="#1874CD"
                  contentStyle={{fontSize:40}}
                  onPress={
                    async () => {
                      try {
                        const grantedCamera = await PermissionsAndroid.request(
                          PermissionsAndroid.PERMISSIONS.CAMERA,
                          {
                            title: '申请摄像头权限',
                            message:
                              '一个很牛逼的应用想借用你的摄像头，' +
                              '然后你就可以拍出酷炫的皂片啦。',
                            buttonNeutral: '等会再问我',
                            buttonNegative: '不行',
                            buttonPositive: '好吧',
                          },
                        );

                        const grantedRead = await PermissionsAndroid.request(
                          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE
                        );

                        const grantedWrite = await PermissionsAndroid.request(
                          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
                        )

                        if(grantedCamera===PermissionsAndroid.RESULTS.GRANTED&&grantedWrite===grantedCamera&&grantedRead===grantedCamera){
                          ImagePicker.showImagePicker(pickerOptions,(response) => {
                            const {didCancel=null,data=null} = response;
                            // console.log(response); //response是整个文件的数据
                            if(didCancel===true){
                              console.log('cancle');
                            }
                            else{
                              ImageResizer.createResizedImage('data:image/jpeg;base64,'+response.data,1800,1600,'JPEG',70)
                                .then(async resizeResponse => {
                                  const resizeData = await RNFS.readFile(resizeResponse.path,'base64');
                                  this.setState({imgSource:{uri:'data:image/jpg;base64,'+resizeData},rawImg:resizeData})
                                })
                            }
                          })
                        }
                        
                      } catch (err) {
                        console.log(err);
                      }
                    }
                  }
                >
                  <Text>点击我选择照片</Text>
                </Button>
              </ScrollView>
          </View>
          <FAB
            style={styles.fab}
            icon='done'
            onPress={() => {
              DeviceEventEmitter.emit('handleAlbumAdd',this.state.rawImg,this.state.description);
              goBack();
            }}
          ></FAB>
        </View>
      </PaperProvider>
    )
  }
  componentWillMount(){
    this.setState({imgSource:fengling});
  }
}