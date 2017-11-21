import React, { Component } from 'react';
import { Text, View, Button, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView, NavigationActions  } from 'react-navigation';
import { connect } from 'react-redux';
import { addDeck } from '../actions/decks';
import TextField from './TextField';

import { getRandomColor, white, lightBlue, lightGray, gray, red } from '../utils/colors';
import { HeaderText, BtnText } from '../utils/styles';

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
    const deckName = this.state.text.trim();
    if (!(deckName in decks)) {
      const deck = {
        title: deckName,
        color: getRandomColor(),
        questions: []
      };
      this.props.addDeck(deck);
      const goToDeckAction = NavigationActions.reset({
        index: 1,
        actions: [
          NavigationActions.navigate('DeckList'),
          NavigationActions.navigate('Deck', {deck})
        ]
      });
      this.props.navigation.dispatch(goToDeckAction);
    } else {
      this.setState({ showError: true });
    }
  }

  saveDeck = () => {
    console.log('saved');
  }

  render() {

    const isEmpty = this.state.text.trim() === '';
    const { showError } = this.state;

    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: white }}>
        <ScrollView style={{ flex: 1 }}>
          { 
            showError
            ? <HeaderText style={{ color: red }}>A deck with this name already exists. Please enter another.</HeaderText>
            : <HeaderText>What's the title of your new deck?</HeaderText>
          }
          
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