import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import DeckListItem from './DeckListItem';

// Styles
import { DeckListContainer } from '../utils/styles';
import { orange, lightBlue } from '../utils/colors';

class DeckListView extends Component {
  render() {

    const { decks }   = this.props;

    const deck = [
      { title: 'Javacript', questions: [ 0, 1, 2 ], color: orange },
      { title: 'React', questions: [ 0, 1, 2, 4, 5 ], color: lightBlue }
    ];

    return (
      <DeckListContainer>
        <DeckListItem />
        <DeckListItem deck={deck[0]} />
        <DeckListItem deck={deck[1]} />
      </DeckListContainer>
    );
  }
}

const mapStateToProps  = ({ decks }) => ({
  decks
});

export default connect(mapStateToProps)(DeckListView);