// Modules
import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { AppLoading } from 'expo';

// Components
import MainStatusBar from './MainStatusBar';
import DeckListView from './DeckListView';

// Styles
import { MainContainer, loadFonts } from '../utils/styles';

import { connect } from 'react-redux';
import { fetchDecks, addDeck, clearDecks } from '../actions/decks';

class Main extends Component {

  state = {
    isReady: false
  }

  componentDidMount() {
    loadFonts().then( () => {
      this.props.fetchDecks()
        .then(() => this.setState({ isReady: true}));
    });
  }

  onPressCreateDeck = () => {
    
    this.props.addDeck({
      title: 'React',
      questions: [
        {
          question: 'What is React?',
          answer: 'A library for managing user interfaces'
        },
        {
          question: 'Where do you make Ajax requests in React?',
          answer: 'The componentDidMount lifecycle event'
        }
      ]
    });
  }

  onPressReset = () => {
    this.props.clearDecks();
  }

  render() {
    
    const { isReady } = this.state;
    const { decks }   = this.props;

    if (isReady === false) return <AppLoading />
    
    return (
      <MainContainer>
        <MainStatusBar barStyle='dark-content' />
        <DeckListView />
      </MainContainer>
    );
  }
}

const mapStateToProps  = ({ decks }) => ({
  decks
});

export default connect(mapStateToProps, { fetchDecks, addDeck, clearDecks })(Main);

/* <TouchableOpacity
  onPress={this.onPressCreateDeck}
>
  <ButtonText>Add Deck</ButtonText>
</TouchableOpacity>
<Text>{JSON.stringify(decks)}</Text>
<TouchableOpacity
  onPress={this.onPressReset}
>
  <ButtonText>Clear Decks</ButtonText>
</TouchableOpacity> */