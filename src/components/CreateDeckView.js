import React, { Component } from 'react';
import { Text, View, Button, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Picker } from 'react-native';
import { SafeAreaView } from 'react-navigation';

import TextField from './TextField';

import { blue, white, lightBlue, lightGray, gray, colors } from '../utils/colors';
import { NewDeckTitle, BtnText } from '../utils/styles';

class CreateDeckView extends Component {

  static navigationOptions = ({navigation}) => {
    return {
      title: 'Create New Deck',
      headerStyle: {
        backgroundColor: lightBlue
      },
      headerTitleStyle: {
        color: white
      },
      headerTintColor: white,
      headerBackTitle: null
    }
  }

  state = {
    text: '',
    color: ''
  }

  saveDeck = () => {
    console.log('saved');
  }

  render() {

    const isEmpty = this.state.text === '';

    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: white }}>
        <ScrollView style={{ flex: 1 }}>
          <NewDeckTitle>What's the title of your new deck?</NewDeckTitle>
          <TextField 
            placeholder="Javascript"
            onChangeText={(text) => this.setState({text})}
          />
          <TouchableOpacity
            onPress={ () => { this.saveDeck() }}
            disabled={isEmpty}
          >
            <BtnText style={ isEmpty ? { backgroundColor: lightGray, color: gray } : {} }>Add New Deck</BtnText>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default CreateDeckView;