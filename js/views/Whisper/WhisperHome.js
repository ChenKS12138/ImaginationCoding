import React,{Component} from 'react';
import {StyleSheet,Text,View,StatusBar,ScrollView} from 'react-native';
import {FAB,Avatar,Button,Card,Title,Paragraph,Drawer,Provider as PaperProvider,DefaultTheme} from 'react-native-paper';
import moment from 'moment';

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
    backgroundColor:'teal'
  },
  whisper:{
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
    text:'lalala',
    time:null
  },
  {
    text:'hahah',
    time:null
  }
]

export default class Whisper extends Component{
  render(){
    const {navigate} = this.props.navigation;
    return(
      <PaperProvider theme={theme}>
        <View style={styles.container}>
          {/* <StatusBar style ={styles.statusBar} translucent={true} backgroundColor='#1874CD' /> */}
            <View style={styles.whisper}>
              <Welcome text="悄悄话" />
              <ScrollView>
                {fakeData.map((item,index) => {
                  return(
                    <Card style={styles.card} key={index} onPress={() => navigate('WhisperDetail')}>
                      <Card.Title title={item.text} />
                      <Card.Content>
                        <Paragraph>{item.text}</Paragraph>
                      </Card.Content>
                    </Card>
                  )
                })}
              </ScrollView>
          </View>
          <FAB
            style={styles.fab}
            icon='add'
            onPress={() => navigate('WhisperCreate')}
          ></FAB>
        </View>
      </PaperProvider>
    )
  }
}