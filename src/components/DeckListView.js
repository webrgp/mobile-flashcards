import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, ScrollView, Image } from 'react-native';
import DeckListItem from './DeckListItem';
import { addDeck } from '../actions/decks';


// Styles
import { DeckListContainer } from '../utils/styles';
import { white, red, green, blue, lightBlue } from '../utils/colors';

class DeckListView extends Component {

  static navigationOptions = ({navigation}) => {
    return {
      title: 'UdaciCards',
      headerTitle: <View
        style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}
      >
        <Image 
          style={{width: 18, height: 18}}
          source={require('../../assets/images/Deck.png')} />
        <Text
          style={{ color: white, marginLeft: 10, fontSize: 22, fontFamily: 'Nunito-Light' }}
        >Udaci<Text style={{ fontFamily: 'Nunito-Bold' }}>Cards</Text></Text>
      </View>,
      headerStyle: {
        backgroundColor: lightBlue
      },
      headerTitleStyle: {
        color: white
      },
      headerTintColor: white,
    }
  }

  onPressCreateDeck = () => {
    this.props.navigation.navigate('CreateDeckView');
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
        title: '1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 ds4567890',
        color: blue
      }
    }

    return (
      <View  style={{ flex: 1}}>
        <ScrollView 
          style={{ backgroundColor: white }}
          contentInsetAdjustmentBehavior="automatic"
        >
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