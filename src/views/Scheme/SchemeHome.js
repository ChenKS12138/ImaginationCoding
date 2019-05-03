import React,{Component} from 'react';
import {StyleSheet,Text,View,StatusBar,ScrollView} from 'react-native';
import {FAB,Avatar,Button,Card,Title,Paragraph,Drawer,Provider as PaperProvider,DefaultTheme} from 'react-native-paper';
import moment from 'moment';

import Welcome from '../../components/Welcome';
import PaddingView from '../../components/PaddingView';
import HeaderBar from '../../components/HeaderBar';
import ColorBar from '../../components/ColorBar';
import NavigationService from '../../utils/NavigationService';

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

const fakeData= [
  {
    title:'每天和TA在一起',
    timeList:[
      moment().set('date',2).format('x'),
      moment().set('date',1).format('x')
    ]
  },
  {
    title:'哈哈233',
    timeList:[
      moment().set('date',2).format('x'),
      moment().set('date',1).format('x')
    ]
  }
]

export default class SchemeHome extends Component{
  render(){
    const {navigate} = this.props.navigation;
    return(
      <PaperProvider theme={theme}>
        <ColorBar />
        <HeaderBar 
          text="恋爱打卡"
          iconType="menu"
          onPress={() => NavigationService.toggleDrawer()}
        />
        <View style={styles.container}>
          {/* <StatusBar style ={styles.statusBar} translucent={true} backgroundColor='#1874CD' /> */}
            <View style={styles.scheme}>
              <ScrollView
                showsVerticalScrollIndicator={false}
              >
                <Welcome text="恋爱打卡" />
                {fakeData.map((item,index) => {
                  return(
                    <Card
                      style={styles.card}
                      key={index} 
                      onPress={() => navigate('SchemeDetail',{
                        title:item.title,
                        timeList:item.timeList
                      })}
                    >
                      <Card.Title title={item.title} />
                      <Card.Content>
                        <Text>已经 {item.timeList.length}天了 </Text>
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
            onPress={() => navigate('SchemeCreate')}
          ></FAB>
        </View>
      </PaperProvider>
    )
  }
}