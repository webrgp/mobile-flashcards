import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, ScrollView, Image } from 'react-native';
import DeckListItem from './DeckListItem';

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
      headerBackTitle: null
    }
  }

  onPressCreateDeck = () => {
    this.props.navigation.navigate('CreateDeck');
  }

  onPressViewDeck = (deck) => {
    this.props.navigation.navigate('Deck', {deck});
  }

  render() {

    const { decks }   = this.props;

    return (
      <View  style={{ flex: 1}}>
        <ScrollView 
          style={{ backgroundColor: white }}
          contentInsetAdjustmentBehavior="automatic"
        >
          <DeckListContainer>
            <DeckListItem onPress={this.onPressCreateDeck} />
            { decks && Object.keys(decks).map( key => (
              <DeckListItem 
                onPress={() => {this.onPressViewDeck(decks[key])}} 
                key={decks[key].title} 
                deck={decks[key]} />
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

export default connect(mapStateToProps)(DeckListView);