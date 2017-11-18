// Modules
import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { AppLoading } from 'expo';

// Components
import DeckListView from './DeckListView';

// Styles
import { MainContainer, loadFonts } from '../utils/styles';

import { connect } from 'react-redux';
import { fetchDecks, addDeck, clearDecks } from '../actions/decks';
import { white } from '../utils/colors';

const MainNavigator = StackNavigator({
  Home: {
    screen: DeckListView
  }
}, {
  headerMode: 'none' 
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