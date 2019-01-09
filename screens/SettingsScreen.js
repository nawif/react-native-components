import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native'
import {Announcment} from '../components/Announcment'

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Card Component',
  };

  

  render() {
    return (
      <Announcment title="This is Title" subTitle="this is a subtitle" iconType="attend" />
    );
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#eeeeee' , flexDirection: 'row', alignContent: 'flex-end', margin:20, borderRadius:15,
    elevation:2.5,
    shadowRadius: 5,
    shadowOpacity: 1.0 
    
  },
  cardImage:{
    width: 75, height: 75, alignSelf: "center", margin:10, marginStart:20 
  },
  textContainer:{
    flex: 1, justifyContent: 'flex-start', flexDirection: 'column', margin:10
  },
  title:{
    marginBottom:5,
    textAlign:'right',
    fontWeight: 'bold',
    fontSize:15
  },
  subTitle:{
    marginBottom: 5,
    textAlign:'right',
    fontWeight: 'normal',
    fontSize:11 
  }
});
