import React, { Component} from 'react';
import {StyleSheet, View, Text,TouchableOpacity, ScrollView} from 'react-native';
import { DrawerItems} from 'react-navigation-drawer'

import firebase from 'firebase';

export default class CustomSideBarMenu extends Component{
  render(){
    return(
      <View style={{flex:1}}>
        <View style={styles.drawerItemsContainer}>
          <DrawerItems {...this.props}/>
        </View>
        <View style={styles.logOutContainer}>            
          <TouchableOpacity style={styles.logOutContainer}
          onPress = {() => {
              this.props.navigation.navigate('SignupLoginScreen')
              firebase.auth().signOut()
          }}>
            <Text style={styles.logOutText}>Log Out</Text>
          </TouchableOpacity>          
        </View>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container : {
    flex:1
  },
  drawerItemsContainer:{
    flex:0.8
  },
  logOutContainer : {
    flex:0.25,
    justifyContent:'flex-end',
    paddingBottom:30,
    marginRight: 10
  },
  logOutButton : {
    justifyContent:'center',
    padding: 10,   
  },
  logOutText:{
    fontSize: 20,
    fontWeight:'bold'
  }
})