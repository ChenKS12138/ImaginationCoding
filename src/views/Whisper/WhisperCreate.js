import React,{Component} from 'react';
import {View,Text,ScrollView,StyleSheet,DeviceEventEmitter} from 'react-native';
import {TextInput,FAB,Avatar,Button,Card,Title,Paragraph,Drawer,Provider as PaperProvider,DefaultTheme} from 'react-native-paper';

import Welcome from '../../components/Welcome';
import HeaderBar from '../../components/HeaderBar';
import ColorBar from '../../components/ColorBar';
import Storager from '../../api/Storager';

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
  whisper:{
    width:300
  },
  card:{
    marginTop:5,
    marginBottom:5
  },
  input:{
    backgroundColor:'#F5FCFF'
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

export default class WhisperCreate extends Component{
  state={
    text:''
  };
  render(){
    const {goBack} = this.props.navigation;
    return(
      <PaperProvider theme={theme}>
        <ColorBar />
        <HeaderBar 
          text="新的悄悄话"
          iconType="back"
          onPress={() => goBack()}
        />
        <View style={styles.container}>
            <View style={styles.whisper}>
              <Welcome text="新的悄悄话" />
              <ScrollView>
                <TextInput
                  label='请写下和TA的悄悄话'
                  value={this.state.text}
                  onChangeText={text => this.setState({text})}
                  mode="flat"
                  multiline={true}
                  style={styles.input}
                />
              </ScrollView>
          </View>
          <FAB
            style={styles.fab}
            icon='done'
            onPress={() => {
              if(this.state.text){
                DeviceEventEmitter.emit('handleWhisperAdd',this.state.text);
                goBack();
              }
            }}
          ></FAB>
        </View>
      </PaperProvider>
    )
  }
}