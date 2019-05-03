import React,{Component} from 'react';
import {View,Text,ScrollView,StyleSheet} from 'react-native';
import {FAB,Avatar,Button,Card,Title,Paragraph,Drawer,Provider as PaperProvider,DefaultTheme} from 'react-native-paper';

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
    backgroundColor:'red'
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

export default class WhisperDetail extends Component{
  render(){
    const {text,time} = this.props.navigation.state.params;
    return(
      <PaperProvider theme={theme}>
        <View style={styles.container}>
          {/* <StatusBar style ={styles.statusBar} translucent={true} backgroundColor='#1874CD' /> */}
            <View style={styles.whisper}>
              <Welcome text="悄悄话详情" />
              <ScrollView>
                <Card 
                  style={styles.card}
                >
                  <Card.Title title={time}/>
                  <Card.Content>
                    <Paragraph>{text}</Paragraph>
                  </Card.Content>
                </Card>
              </ScrollView>
          </View>
          <FAB
            style={styles.fab}
            icon='delete'
            onPress={() => console.log('delete')}
          ></FAB>
        </View>
      </PaperProvider>
    )
  }
}