import React,{Component} from 'react';
import {View,Text,StyleSheet,StatusBar,ScrollView} from 'react-native';
import {FAB,Provider as PaperProvider,DefaultTheme} from 'react-native-paper';


import Welcome from '../../components/Welcome';
import ColorBar from '../../components/ColorBar';
import HeaderBar from '../../components/HeaderBar';
import NavigationService from '../../utils/NavigationService';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
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
        <ColorBar />
        <HeaderBar iconType="menu" text="关于" onPress={() => NavigationService.toggleDrawer()}/>
        <View style={styles.container}>
            <View style={styles.whisper}>
              <Welcome text="About" />
              <ScrollView>
                <Text>
                  作为一位敬仰着小 b 同学的萌新，小 z 一直在钻研如何让自己的代码变得
                  优雅。去年，靠着自己的脑洞程序设计周作品，求生欲极强的小 z 成功追到了
                  自己喜欢的小姐姐/小哥哥（误）。可是一年后的某一天，小 z 在孜孜不倦地研 究代码时，小姐姐/小哥哥突然冲进来说：“你天天嘴里都是南邮还是小 b 同学
                  优秀，根本没有我，我生气了！”，小 z 很想挽回，可是小 z 太懒，于是他找
                  到了你，希望你帮他想想，如何设计一个软件来挽回他的爱情/基情？ 
                </Text>
                <Text style={{marginTop:10}}>
                  南邮还是小B同学优秀
                </Text>
              </ScrollView>
          </View>
        </View>
      </PaperProvider>
    )
  }
}