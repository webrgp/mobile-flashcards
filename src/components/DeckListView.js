import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, ScrollView } from 'react-native';
import DeckListItem from './DeckListItem';
import MainStatusBar from './MainStatusBar';
import { addDeck } from '../actions/decks';

// Styles
import { DeckListContainer } from '../utils/styles';
import { white, red, green, blue } from '../utils/colors';

class DeckListView extends Component {

  static navigationOptions = ({navigation}) => {
    return {
      title: 'UdaciCards'
    }
  }

  onPressCreateDeck = () => {
    console.log('pressed');
  }

  render() {

    // const { decks }   = this.props;

    const decks = {
      Javascript: {
        title: 'Javascript',
        color: red
      },
      'React Native': {
        title: 'React native practice',
        color: green
      },
      'ASdaszdaskmslmdadas dasdaskdas dsa': {
        title: 'ASda sd ask ms lm dadas dasdaskdas dsa',
        color: blue
      }
    }

    return (
      <View style={{ flex: 1}}>
        <MainStatusBar backgroundColor={white} barStyle='dark-content' />
        <ScrollView style={{ backgroundColor: white }}>
          <DeckListContainer>
            <DeckListItem onPress={this.onPressCreateDeck} />
            { decks && Object.keys(decks).map( key => (
              <DeckListItem key={decks[key].title} deck={decks[key]} />
            ))}
          </DeckListContainer>
      </ScrollView>
      </View>
    );
  }
}

const mapStateToProps  = ({ decks }) => ({
  decks
});

export default connect(mapStateToProps, {addDeck})(DeckListView);