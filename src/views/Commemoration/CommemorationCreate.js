import React,{Component} from 'react';
import {View,Text,ScrollView,StyleSheet,DeviceEventEmitter} from 'react-native';
import {TextInput,FAB,Avatar,Button,Card,Title,Paragraph,Drawer,Provider as PaperProvider,DefaultTheme,Switch} from 'react-native-paper';
import DatePicker from 'react-native-datepicker';
import moment from 'moment';

import Welcome from '../../components/Welcome';
import HeaderBar from '../../components/HeaderBar';
import ColorBar from '../../components/ColorBar';
import theme from '../../config/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
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
    backgroundColor:'green'
  },
  commemoration:{
    width:300
  },
  card:{
    marginTop:5,
    marginBottom:5
  },
  input:{
    backgroundColor:'transparent',
    marginTop:10
  },
  datePicker:{
    marginTop:30
  },
  switchArea:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    marginTop:30
  }
})

// const theme = {
//   ...DefaultTheme,
//   roundness: 2,
//   colors: {
//     ...DefaultTheme.colors,
//     primary: '#3498db',
//     accent: '#f1c40f',
//   }
// };

export default class CommemorationCreate extends Component{
  state={
    text:'',
    datePickerVisible:false,
    selectedDate:new Date(),
    isAnnual:true
  };
  render(){
    const {navigate,goBack} = this.props.navigation;
    const {isAnnual} = this.state;
    return(
      <PaperProvider theme={theme}>
        <ColorBar />
        <HeaderBar 
          text="新的纪念日"
          iconType="back"
          onPress={() => goBack()}
        />
        <View style={styles.container}>
            <View style={styles.commemoration}>
              <Welcome text="新的纪念日" />
              <ScrollView>
                <TextInput
                  label='请写下纪念日的内容'
                  value={this.state.text}
                  onChangeText={text => this.setState({text})}
                  style={styles.input}
                  multiline={true}
                />
                <View style={styles.switchArea}>
                  <Text>这是每年都有的纪念日吗</Text>  
                  <Switch 
                    value={isAnnual}
                    onValueChange={() => {
                      this.setState({isAnnual:!isAnnual});
                    }}
                    color="#1874CD"
                  />
                </View>
                <DatePicker 
                  mode="date"
                  date={this.state.selectedDate}
                  placeholder="请选择一个时间"
                  formate="YYYY-MM-DD"
                  onConfirm={date => this.setState({selectedDate:date})}
                  onCancel={() => this.setState({datePickerVisible:false})}
                  customStyles={{
                    dateIcon:{
                      display:"none"
                    },
                    dateInput: {
                      marginLeft: 36
                    }
                  }}
                  onDateChange={date => this.setState({selectedDate:moment(date).toDate()})}
                  style={styles.datePicker}
                />
              </ScrollView>
          </View>
          <FAB
            style={styles.fab}
            icon='done'
            onPress={() => {
              DeviceEventEmitter.emit('handleCommemorationAdd',this.state.text,this.state.selectedDate,this.state.isAnnual);
              goBack();
            }}
          ></FAB>
        </View>
      </PaperProvider>
    )
  }
}