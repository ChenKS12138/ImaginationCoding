import React,{Component} from 'react';
import {View,Text,ScrollView,StyleSheet} from 'react-native';
import {FAB,Avatar,Button,Card,Title,Paragraph,Drawer,Provider as PaperProvider,DefaultTheme} from 'react-native-paper';

import Welcome from '../../components/Welcome';
import CommonButton from '../../components/CommonButton';
import ColorBar from '../../components/ColorBar';
import HeaderBar from '../../components/HeaderBar';

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

export default class SchemeDetail extends Component{
  render(){
    const {title,timeList} = this.props.navigation.state.params;
    const {goBack} = this.props.navigation;
    return(
      <PaperProvider theme={theme}>
        <ColorBar />
        <HeaderBar 
          text="计划详情"
          iconType="back"
          onPress={() =>goBack()}
        />
        <View style={styles.container}>
          {/* <StatusBar style ={styles.statusBar} translucent={true} backgroundColor='#1874CD' /> */}
            <View style={styles.scheme}>
              <Welcome text="纪念日详情" />
              <ScrollView>
                <Card 
                  style={styles.card}
                >
                  <Card.Title title={title}/>
                  <Card.Content>
                    <Paragraph>已经打卡{timeList.length}天惹</Paragraph>
                  </Card.Content>
                </Card>
                <CommonButton 
                  text="打卡"
                  icon="done"
                  onPress={() => console.log('done')}
                />
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