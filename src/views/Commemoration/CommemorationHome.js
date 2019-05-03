import React,{Component} from 'react';
import {StyleSheet,Text,View,StatusBar,ScrollView} from 'react-native';
import {FAB,Avatar,Button,Card,Title,Paragraph,Drawer,Provider as PaperProvider,DefaultTheme} from 'react-native-paper';
import moment from 'moment';

import Welcome from '../../components/Welcome';
import PaddingView from '../../components/PaddingView';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  fab:{
    position:'absolute',
    margin: 16,
    right:0,
    top:420,
    backgroundColor:'teal'
  },
  commemoration:{
    width:300
  },
  card:{
    marginTop:5,
    marginBottom:5
  },
  ScrollView:{
    paddingTop: 30,
    paddingBottom: 30,
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
    title:'TA的生日',
    annual:true,
    time:'很久之前'
  },
  {
    title:'认识多少天',
    annual:false,
    time:'就刚刚'
  },
  {
    title:'TA的生日',
    annual:true,
    time:'很久之前'
  },
  {
    title:'认识多少天',
    annual:false,
    time:'就刚刚'
  },
  {
    title:'TA的生日',
    annual:true,
    time:'很久之前'
  },
  {
    title:'认识多少天',
    annual:false,
    time:'就刚刚'
  }
]

export default class CommemorationHome extends Component{
  render(){
    const {navigate} = this.props.navigation;
    return(
      <PaperProvider theme={theme}>
        <View style={styles.container}>
          {/* <StatusBar style ={styles.statusBar} translucent={true} backgroundColor='#1874CD' /> */}
            <View style={styles.commemoration}>
              <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.ScrollView}
              >
                <Welcome text="纪念日" />
                {fakeData.map((item,index) => {
                  return(
                    <Card style={styles.card} key={index} onPress={() => navigate('CommemorationDetail',{
                      title:item.title,
                      time:item.time,
                      annual:item.annual
                    })}>
                      <Card.Title title={item.title} />
                      <Card.Content>
                        <Paragraph>{item.time}</Paragraph>
                        <Text>{item.annual}</Text>
                      </Card.Content>
                    </Card>
                  )
                })}
                <PaddingView />
              </ScrollView>
          </View>
          <FAB
            style={styles.fab}
            icon='add'
            onPress={() => navigate('CommemorationCreate')}
          ></FAB>
        </View>
      </PaperProvider>
    )
  }
}