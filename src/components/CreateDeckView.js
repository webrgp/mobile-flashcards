import React, { Component } from 'react';
import { Text, View, Button, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';
import { addDeck } from '../actions/decks';
import TextField from './TextField';

import { getRandomColor, white, lightBlue, lightGray, gray } from '../utils/colors';
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
    showError: false
  }

  validateDeckName = () => {
    const { decks } = this.props;
    if (!(this.state.text in decks)) {
      const deck = {
        title: this.state.text.trim(),
        color: getRandomColor(),
        questions: []
      };
      this.props.addDeck(deck);
      this.props.navigation.goBack('DeckListView');
    } else {
      this.setState({ showError: true });
    }
  }

  saveDeck = () => {
    console.log('saved');
  }

  render() {

    const isEmpty = this.state.text === '';

    // Javascript: {
    //   title: 'Javascript',
    //   color: red
    // }

    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: white }}>
        <ScrollView style={{ flex: 1 }}>
          <NewDeckTitle>What's the title of your new deck?</NewDeckTitle>
          <TextField 
            placeholder="Javascript"
            onChangeText={(text) => this.setState({text})}
          />
          <TouchableOpacity
            onPress={ () => { this.validateDeckName() }}
            disabled={isEmpty}
          >
            <BtnText style={ isEmpty ? { backgroundColor: lightGray, color: gray } : {} }>Add New Deck</BtnText>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const mapStateToProps  = ({ decks }) => ({
  decks
});

export default connect(mapStateToProps, {addDeck})(CreateDeckView);