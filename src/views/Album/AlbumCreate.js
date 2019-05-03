import React,{Component} from 'react';
import {View,Text,ScrollView,StyleSheet,PermissionsAndroid} from 'react-native';
import {TextInput,FAB,Avatar,Button,Card,Title,Paragraph,Drawer,Provider as PaperProvider,DefaultTheme} from 'react-native-paper';
import ImagePicker from 'react-native-image-picker';

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
    backgroundColor:'green'
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
              <Welcome text="新的照片" />
              <ScrollView>
                <Text>
                  快来记录下和Ta的点点滴滴吧
                </Text>
                <Button
                  icon="add-a-photo"
                  mode="contained"
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

                        ImagePicker.showImagePicker(pickerOptions,(response) => {
                          console.log(response); //response是整个文件的数据
                        })
                      } catch (err) {
                        console.warn(err);
                      }
                    }
                  }
                >
                  点击我选择照片
                </Button>
              </ScrollView>
          </View>
          <FAB
            style={styles.fab}
            icon='done'
            onPress={() => goBack()}
          ></FAB>
        </View>
      </PaperProvider>
    )
  }
}