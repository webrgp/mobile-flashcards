import React, { Component } from 'react';
import { Text, View, Button, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationActions  } from 'react-navigation';
import { connect } from 'react-redux';
import { saveDeck } from '../actions/decks';
import TextField from './TextField';

import { getRandomColor, white, lightBlue, lightGray, gray, red } from '../utils/colors';
import { HeaderText, BtnText, KeyboardAvoidingContainer } from '../utils/styles';

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

  componentDidMount() {

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
      this.props.saveDeck(deck);
      const goToDeckAction = NavigationActions.reset({
        index: 1,
        actions: [
          NavigationActions.navigate({ routeName: 'DeckList'}),
          NavigationActions.navigate({ routeName: 'DeckDetail', params : { id: deckName }})
        ]
      });
      this.props.navigation.dispatch(goToDeckAction);
    } else {
      this.setState({ showError: true });
    }
  }

  render() {

    const isEmpty = this.state.text.trim() === '';
    const { showError } = this.state;

    return (
      <KeyboardAvoidingContainer style={{ flex: 1, backgroundColor: white }}>
        <ScrollView style={{ flex: 1 }}>
          { 
            showError
            ? <HeaderText style={{ color: red }}>A deck with this name already exists. Please enter another.</HeaderText>
            : <HeaderText>What's the title of your new deck?</HeaderText>
          }
          
          <TextField 
            ref={this.focusDeckNameInput}
            autoFocus={true}
            onChangeText={(text) => this.setState({text})}
          />
          <TouchableOpacity
            onPress={ () => { this.validateDeckName() }}
            disabled={isEmpty}
          >
            <BtnText style={ isEmpty ? { backgroundColor: lightGray, color: gray } : {} }>Add New Deck</BtnText>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingContainer>
    );
  }
}

const mapStateToProps  = ({ decks }) => ({
  decks
});

export default connect(mapStateToProps, {saveDeck})(CreateDeckView);