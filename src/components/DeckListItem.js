import React, { Component } from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';
import { darken } from 'polished';

// Styles
import { 
  DeckItem,
  DeckItemButton,
  DeckItemButtonText,
  DeckNewItemButton,
  DeckNewItemButtonText
} from '../utils/styles';

class DeckListItem extends Component {
  render() {

    const { deck } = this.props;
    return (
      <DeckItem>
        { deck
          ? <DeckItemButton style={{ 
              backgroundColor: deck.color,
              shadowColor: darken(0.1, deck.color),
              aspectRatio: 1
            }}>
              <DeckItemButtonText>{deck.title}</DeckItemButtonText>
            </DeckItemButton>
          : <DeckNewItemButton style={{aspectRatio: 1}}>
              <DeckNewItemButtonText>+</DeckNewItemButtonText>
            </DeckNewItemButton>
        }
      </DeckItem>
    );
  }
}

export default DeckListItem;