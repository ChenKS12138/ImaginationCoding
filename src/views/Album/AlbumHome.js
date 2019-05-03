import React,{Component} from 'react';
import {StyleSheet,Text,View,StatusBar,ScrollView} from 'react-native';
import {FAB,Avatar,Button,Card,Title,Paragraph,Drawer,Provider as PaperProvider,DefaultTheme} from 'react-native-paper';
import moment from 'moment';
import { DrawerActions } from 'react-navigation-drawer';

import Welcome from '../../components/Welcome';
import PaddingView from '../../components/PaddingView';
import ColorBar from '../../components/ColorBar';
import NavigationService from '../../utils/NavigationService';
import HeaderBar from '../../components/HeaderBar';

import img0 from '../../assets/img/img0.jpg';
import img2 from '../../assets/img/img2.jpg';

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

const fakeData= [
  {
    title:'风铃',
    img:img0,
    time:'刚刚',
    description:'风铃'
  },
  {
    title:'猫咪mua',
    img:img2,
    time:'刚刚',
    description:'猫咪mua'
  },
  {
    title:'风铃',
    img:img0,
    time:'刚刚',
    description:'风铃'
  },
  {
    title:'猫咪mua',
    img:img2,
    time:'刚刚',
    description:'猫咪'
  },
  {
    title:'风铃',
    img:img0,
    time:'刚刚'
  },
  {
    title:'猫咪mua',
    img:img2,
    time:'刚刚'
  }
]

export default class SchemeHome extends Component{
  render(){
    const {navigate} = this.props.navigation;
    return(
      <PaperProvider theme={theme}>
        <ColorBar />
        <HeaderBar 
          text="照片时光机"
          iconType="menu"
          onPress={() => NavigationService.toggleDrawer()}
        />
        <View style={styles.container}>
          {/* <StatusBar style ={styles.statusBar} translucent={true} backgroundColor='#1874CD' /> */}
            <View style={styles.album}>
              <ScrollView
                showsVerticalScrollIndicator={false}
              >
                <Welcome text="照片时光机" />
                {fakeData.map((item,index) => {
                  return(
                    <Card
                      style={styles.card}
                      key={index}
                      onPress = {() => navigate('AlbumDetail',{
                        image:item.img,
                        time:item.time,
                        title:item.title,
                        description:item.description
                      })}
                    >
                      <Card.Title title={item.title} />
                      <Card.Cover source={item.img} />
                    </Card>
                  )
                })}
                <PaddingView />
              </ScrollView>
          </View>
          <FAB
            style={styles.fab}
            icon='add'
            onPress={() => navigate('AlbumCreate')}
          ></FAB>
        </View>
      </PaperProvider>
    )
  }
}