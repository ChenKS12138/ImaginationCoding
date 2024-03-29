import React,{Component} from 'react';
import {StyleSheet,Text,View,ScrollView,ToastAndroid} from 'react-native';
import {TextInput,Portal,Dialog,FAB,Avatar,Button,Card,Title,Paragraph,Drawer,Provider as PaperProvider,DefaultTheme} from 'react-native-paper';
import moment from 'moment';
import genKey from '../../utils/randomString';
import PTRView from 'react-native-pull-to-refresh-component';

import Welcome from '../../components/Welcome';
import HeaderBar from '../../components/HeaderBar';
import ColorBar from '../../components/ColorBar';
import NavigationService from '../../utils/NavigationService';
import Storager from '../../api/Storager.js';
import PaddingView from '../../components/PaddingView';
import theme from '../../config/theme';
import {fabColor} from '../../config/color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFFAFA',
  },
  fab:{
    position:'absolute',
    margin: 16,
    right:0,
    top:420,
    backgroundColor:fabColor
  },
  plan:{
    width:300
  },
  card:{
    marginTop:5,
    marginBottom:5
  },
  PTR:{
    backgroundColor:'#FFFAFA'
  }
})

export default class PlanHome extends Component{
  state={
    planData:[],
    visible:false,
    text:""
  }
  render(){
    const {navigate} = this.props.navigation;
    return(
      <PaperProvider theme={theme}>
        <ColorBar/>
        <HeaderBar 
          text="和Ta约好的事"
          iconType="menu"
          onPress={() => NavigationService.toggleDrawer()}
        />
        <PTRView offset={40} onRefresh={async () => setTimeout(() => {return true},1000)} showsVerticalScrollIndicator={false} style={styles.PTR}>
          <View style={styles.container}>
            <View style={styles.plan}>
              <ScrollView
                showsVerticalScrollIndicator={false}
              >
                <Welcome text="Plan" />
                {
                  this.state.planData.length!==0
                  ?
                  this.state.planData.sort((a,b) => moment(b.time).diff(a.time)).map((item,index) => {
                    return(
                      <Card 
                        style={styles.card} 
                        key={index}
                        onPress={() => navigate('PlanDetail',{
                          text:item.text,
                          time:item.time
                        })}
                      >
                        <Card.Title title={item.text} />
                        <Card.Content>
                          <Paragraph>{moment(item.time).format('YYYY-MM-DD')}</Paragraph>
                          <Text>{item.done}</Text>
                        </Card.Content>
                      </Card>
                    )
                  })
                  :
                  <View style={{flex:1,alignItems:"center",marginTop:60}}>
                    <Text style={{fontSize:15}}>这里啥子都没有哦~ 快来写下和Ta约定好的事叭</Text>
                  </View>
                }
                <PaddingView />
              </ScrollView>
              <Portal>
                <Dialog
                  visible={this.state.visible}
                  onDismiss={() => this.setState({visible:!this.state.visible})}>
                  <Dialog.Title>新的约好的事</Dialog.Title>
                  <Dialog.Content>
                    <Paragraph>说好的事就要做到~</Paragraph>
                    <TextInput 
                      value={this.state.text}
                      label="要做啥子呢"
                      style={{backgroundColor:"transparent"}}
                      onChangeText={text => this.setState({text:text})}
                    />
                  </Dialog.Content>
                  <Dialog.Actions>
                    <Button style={{marginRight:10}} color="red" onPress={() => this.setState({visible:!this.state.visible})}>取消</Button>
                    <Button color="green" onPress={() => {
                      if(this.state.text.length){
                        this.handlePlanAdd(this.state.text);
                        this.setState({text:""});
                        this.setState({visible:!this.state.visible})
                      }
                      else{
                        ToastAndroid.show(`不要忘记写计划的内容~`,ToastAndroid.SHORT);
                      }
                    }}>好的</Button>
                  </Dialog.Actions>
                </Dialog>
              </Portal>
          </View>
        </View>
        </PTRView>
        
        <FAB
          style={styles.fab}
          icon='add'
          onPress={() => this.setState({visible:!this.state.visible})}
        ></FAB>
      </PaperProvider>
    )
  }
  handlePlanAdd(text){
    const OutdatePlanData = this.state.planData;
    OutdatePlanData.push(
      {
        text:text,
        time:moment().toDate(),
        pid:genKey(),
        done:false
      }
    );
    Storager.setStorage('plan',JSON.stringify(OutdatePlanData));
    this.setState({planData:OutdatePlanData});
  }
  componentWillMount(){
    Storager.getStorage('plan')
      .then(res => {
        res = res === undefined||res === '' ?'[]':res;
        this.setState({'planData':JSON.parse(res)});
      })
  }
}
