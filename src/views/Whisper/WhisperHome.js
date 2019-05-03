import React,{Component} from 'react';
import {StyleSheet,Text,View,StatusBar,ScrollView} from 'react-native';
import {FAB,Avatar,Button,Card,Title,Paragraph,Drawer,Provider as PaperProvider,DefaultTheme} from 'react-native-paper';
import moment from 'moment';

import Welcome from '../../components/Welcome';
import HeaderBar from '../../components/HeaderBar';
import ColorBar from '../../components/ColorBar';
import NavigationService from '../../utils/NavigationService';

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
    time:'很久之前'
  },
  {
    text:'hahah',
    time:'就刚刚'
  }
]

export default class WhisperHome extends Component{
  render(){
    const {navigate} = this.props.navigation;
    return(
      <PaperProvider theme={theme}>
        <ColorBar/>
        <HeaderBar 
          text="悄悄话"
          iconType="menu"
          onPress={() => NavigationService.toggleDrawer()}
        />
        <View style={styles.container}>
            <View style={styles.whisper}>
              <Welcome text="悄悄话" />
              <ScrollView
                showsVerticalScrollIndicator={false}
              >
                {fakeData.map((item,index) => {
                  return(
                    <Card style={styles.card} key={index} onPress={() => navigate('WhisperDetail',{
                      text:item.text,
                      time:item.time,
                      index:index
                    })}>
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