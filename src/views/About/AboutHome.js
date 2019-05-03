import React,{Component} from 'react';
import {View,Text,StyleSheet,StatusBar,ScrollView} from 'react-native';
import {FAB,Provider as PaperProvider,DefaultTheme} from 'react-native-paper';


import Welcome from '../../components/Welcome';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  whisper:{
    width:300
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

export default class Whisper extends Component{
  render(){
    return(
      <PaperProvider theme={theme}>
        <View style={styles.container}>
          {/* <StatusBar style ={styles.statusBar} translucent={true} backgroundColor='#1874CD' /> */}
            <View style={styles.whisper}>
              <Welcome text="关于" />
              <ScrollView>
                <Text>hello</Text>
              </ScrollView>
          </View>
        </View>
      </PaperProvider>
    )
  }
}