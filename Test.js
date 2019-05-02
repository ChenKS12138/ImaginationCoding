import React,{Component} from 'react';
import {View,Text} from 'react-native';
import {createAppContainer,createStackNavigator} from 'react-navigation';
import {Button} from 'react-native-paper';

class View1 extends Component{
  render(){
    const {navigate} = this.props.navigation;
    return(
      <View style={{marginTop:100}}>
        <Text>view1</Text>
        <Button
          mode="contained"
          onPress ={() => {
            navigate('View2');
          }}
        >BTN</Button>
      </View>
    )
  }
} 

const View2 = () => (
  <View style={{marginTop:100}}>
    <Text>view2</Text>
  </View>
)

const stackContent = createStackNavigator(
  {
    View1:{
      screen:View1
    },
    View2:{
      screen:View2
    }
  }
)

const AppContent = createAppContainer(stackContent);

export default class Test extends Component{
  // render(){
  //   return(
  //     <View>
  //     <View1 />
  //     <View2 />
  //     </View>
  //   )
  // }
  render(){
    return(
      <AppContent />
    )
  }
}