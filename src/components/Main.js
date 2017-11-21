// Modules
import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { AppLoading } from 'expo';

// Components
import DeckListView from './DeckListView';
import CreateDeckView from './CreateDeckView';
import DeckDetailView from './DeckDetailView';
import AddQuestionView from './AddQuestionView';

// Styles
import { MainContainer, loadFonts } from '../utils/styles';

import { connect } from 'react-redux';
import { fetchDecks, addDeck, removeDeck } from '../actions/decks';
import { white, lightBlue } from '../utils/colors';

const MainNavigator = StackNavigator({
  DeckList: {
    screen: DeckListView
  },
  CreateDeck: {
    screen: CreateDeckView
  },
  DeckDetail: {
    screen: DeckDetailView,
    path: 'deck/:id'
  },
  AddQuestion: {
    screen: AddQuestionView
  }
}, {
  initialRouteName: 'DeckList'
});

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

  removeDeckById = (id) => {
    this.props.removeDeck(id);
  }

  render() {
    
    const { isReady } = this.state;
    const { decks }   = this.props;

    if (isReady === false) return <AppLoading />
    
    return (
      <MainContainer>
        <MainNavigator screenProps={{decks, removeDeckById: this.removeDeckById }} />
      </MainContainer>
    );
  }
}

const mapStateToProps  = ({ decks }) => ({
  decks
});

export default connect(mapStateToProps, { fetchDecks, addDeck, removeDeck })(Main);