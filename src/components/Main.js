// Modules
import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { AppLoading } from 'expo';

// Components
import DeckListView from './DeckListView';
import CreateDeckView from './CreateDeckView';
import MainStatusBar from './MainStatusBar';


// Styles
import { MainContainer, loadFonts } from '../utils/styles';

import { connect } from 'react-redux';
import { fetchDecks, addDeck, clearDecks } from '../actions/decks';
import { white, lightBlue } from '../utils/colors';

const MainNavigator = StackNavigator({
  DeckListView: {
    screen: DeckListView
  },
  CreateDeckView: {
    screen: CreateDeckView
  }
}, {
  initialRouteName: 'DeckListView'
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

  onPressReset = () => {
    this.props.clearDecks();
  }

  render() {
    
    const { isReady } = this.state;
    const { decks }   = this.props;

    if (isReady === false) return <AppLoading />
    
    return (
      <MainContainer>
        <MainStatusBar backgroundColor={lightBlue} barStyle='light-content' />
        <MainNavigator />
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