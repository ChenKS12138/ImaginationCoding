import React,{Component} from 'react';
import {View,Text,ScrollView,StyleSheet} from 'react-native';
import {TextInput,FAB,Avatar,Button,Card,Title,Paragraph,Drawer,Provider as PaperProvider,DefaultTheme} from 'react-native-paper';

import Welcome from '../../components/Welcome';
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

export default class SchemeCreate extends Component{
  state={
    text:''
  };
  render(){
    const {navigate,goBack} = this.props.navigation;
    return(
      <PaperProvider theme={theme}>
        <View style={styles.container}>
          {/* <StatusBar style ={styles.statusBar} translucent={true} backgroundColor='#1874CD' /> */}
            <View style={styles.scheme}>
              <Welcome text="新的打卡任务" />
              <ScrollView>
                <TextInput
                  label='请写下打卡任务的内容'
                  value={this.state.text}
                  onChangeText={text => this.setState({text})}
                />
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