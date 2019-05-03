import React,{Component} from 'react';
import {View,Text,ScrollView,StyleSheet} from 'react-native';
import {TextInput,FAB,Avatar,Button,Card,Title,Paragraph,Drawer,Provider as PaperProvider,DefaultTheme} from 'react-native-paper';
import DatePicker from 'react-native-datepicker'


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
    backgroundColor:'green'
  },
  commemoration:{
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

export default class CommemorationCreate extends Component{
  state={
    text:'',
    datePickerVisible:false,
    selectedDate:new Date()
  };
  render(){
    const {navigate,goBack} = this.props.navigation;
    return(
      <PaperProvider theme={theme}>
        <View style={styles.container}>
          {/* <StatusBar style ={styles.statusBar} translucent={true} backgroundColor='#1874CD' /> */}
            <View style={styles.commemoration}>
              <Welcome text="新的纪念日" />
              <ScrollView>
                <TextInput
                  label='请写下纪念日的内容'
                  value={this.state.text}
                  onChangeText={text => this.setState({text})}
                />
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
                  onDateChange={date => this.setState({selectedDate:date})}
                />
              </ScrollView>
          </View>
          <FAB
            style={styles.fab}
            icon='done'
            onPress={() => goBack()}
          ></FAB>
        </View>
      </PaperProvider>
    )
  }
}