import React,{Component} from 'react';
import {View,Text,ScrollView,StyleSheet,DeviceEventEmitter,ToastAndroid} from 'react-native';
import {TextInput,FAB,Avatar,Button,Card,Title,Paragraph,Drawer,Provider as PaperProvider,DefaultTheme} from 'react-native-paper';

import Welcome from '../../components/Welcome';
import ColorBar from '../../components/ColorBar';
import HeaderBar from '../../components/HeaderBar';
import theme from '../../config/theme';
import {fabColor} from '../../config/color';

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
    backgroundColor:fabColor
  },
  scheme:{
    width:300
  },
  card:{
    marginTop:5,
    marginBottom:5
  },
  input:{
    backgroundColor:'transparent'
  }
})

export default class SchemeCreate extends Component{
  state={
    text:''
  };
  render(){
    const {navigate,goBack} = this.props.navigation;
    return(
      <PaperProvider theme={theme}>
        <ColorBar />
        <HeaderBar 
          text="新的打卡计划"
          iconType="back"
          onPress={() => goBack()}
        />
        <View style={styles.container}>
          {/* <StatusBar style ={styles.statusBar} translucent={true} backgroundColor='#1874CD' /> */}
            <View style={styles.scheme}>
              <Welcome text="新的打卡任务" />
              <ScrollView>
                <TextInput
                  label='请写下打卡任务的内容'
                  value={this.state.text}
                  onChangeText={text => this.setState({text})}
                  style={styles.input}
                />
              </ScrollView>
          </View>
          <FAB
            style={styles.fab}
            icon='done'
            onPress={() => {
              if(this.state.text.length){
                DeviceEventEmitter.emit('handleSchemeAdd',this.state.text);
                goBack();
              }
              else{
                ToastAndroid.show(`不要忘记写打卡计划的内容~`,ToastAndroid.SHORT);
              }
            }}
          ></FAB>
        </View>
      </PaperProvider>
    )
  }
}