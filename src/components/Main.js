// Modules
import React, { Component } from 'react';
import { Text, Button } from 'react-native';

// Components
import MainStatusBar from './MainStatusBar';

// Styles
import { Container } from '../utils/styles';

import { connect } from 'react-redux';
import { fetchDecks, addDeck, clearDecks } from '../actions/decks';

class Main extends Component {

  state = {
    isReady: false
  }

  componentDidMount() {
    this.props.fetchDecks();
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
    
    const { decks } = this.props;
    return (
      <Container>
        <MainStatusBar barStyle='light-content' />
        <Button 
          onPress={this.onPressCreateDeck}
          title="Add Deck"
          accessibilityLabel="Learn more about this purple button"
        />
        <Text>{JSON.stringify(decks)}</Text>
        <Button 
          onPress={this.onPressReset}
          title="Clear Decks"
          accessibilityLabel="Learn more about this purple button"
        />
      </Container>
    );
  }
}

const mapStateToProps  = ({ decks }) => ({
  decks
});

export default connect(mapStateToProps, { fetchDecks, addDeck, clearDecks })(Main);