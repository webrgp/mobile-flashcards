import React, { Component } from 'react';
import styled from 'styled-components/native';
import { Text, View } from 'react-native';
import { darken } from 'polished';

// Styles
import { 
  DeckItemButton,
  DeckItemButtonText,
  DeckNewItemButton,
  DeckNewItemButtonText,
  DeckItemCardCountText
} from '../utils/styles';
import { toTitleCase } from '../utils/helpers';

class DeckListItem extends Component {

  render() {

    const { deck, onPress } = this.props;

    return (
      <View style={{ width: '50%'}}>
        { deck
          ? <DeckItemButton style={{ 
              backgroundColor: deck.color,
              shadowColor: darken(0.1, deck.color),
              aspectRatio: 1
            }} onPress={onPress}>
              <DeckItemButtonText>
                { 
                  deck.title.trim().length >= 25 
                  ? `${toTitleCase(deck.title.trim()).substring(0, 22).trim()}...` 
                  : toTitleCase(deck.title.trim()) 
                }
              </DeckItemButtonText>
              <DeckItemCardCountText>
                {
                  deck.questions.length
                  ? deck.questions.length
                  : 'No'
                }
                {` Card${ deck.questions.length !== 1 ? 's' : '' }`}
              </DeckItemCardCountText>
            </DeckItemButton>
          : <DeckNewItemButton
              onPress={onPress}
              style={{aspectRatio: 1}}
            >
              <DeckNewItemButtonText>+</DeckNewItemButtonText>
            </DeckNewItemButton>
        }
      </View>
    );
  }
}

export default DeckListItem;