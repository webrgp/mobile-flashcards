import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { white, lightGray, gray } from '../utils/colors';
import { HeaderText, BtnText, MainContainer } from '../utils/styles';
import { Ionicons } from '@expo/vector-icons';

class DeckDetailView extends Component {

  static navigationOptions = ({ navigation, screenProps }) => {
    const { id } = navigation.state.params;
    const deck = screenProps.decks[id];
    return deck ? {
      title: deck.title,
      headerTitle: <View
        style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}
      >
        <Image 
          style={{width: 18, height: 18}}
          source={require('../../assets/images/Deck.png')} />
        <Text
          style={{ color: white, marginLeft: 10, fontSize: 22, fontFamily: 'Nunito-Light' }}
        >{deck.title}</Text>
      </View>,
      headerStyle: {
        backgroundColor: deck.color
      },
      headerTitleStyle: {
        color: white
      },
      headerBackTitle: null,
      headerTintColor: white,
      headerRight: <TouchableOpacity
        onPress={ () => { 
          Alert.alert(
            `Remove ${deck.title} Deck`,
            'Are you sure you want to delete this deck?',
            [
              {text: 'Cancel', onPress: () => false, style: 'cancel'},
              {text: 'Remove', onPress: () => {
                navigation.goBack();
                screenProps.removeDeckById(id);
              }, style: 'destructive'},
            ]
          );
        }}
        style={{ marginRight: 10 }}
      >
        <Ionicons name="ios-trash" size={32} color={white} />
      </TouchableOpacity>
    } : {}
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.deck;
  }
  
  render() {

    const { deck, navigation } = this.props;

    return (
      <MainContainer>

        <HeaderText style={{ color: deck.color }}>{deck.title}</HeaderText>

        <TouchableOpacity
          onPress={ () => { console.log('Start Quiz') }}
          disabled={ deck.questions.length === 0 }
        >
          <BtnText style={ deck.questions.length === 0 ? { backgroundColor: lightGray, color: gray } : {} }>Start Quiz</BtnText>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={ () => { navigation.navigate('AddQuestion', { id: deck.title }) }}
        >
          <BtnText>Add Question</BtnText>
        </TouchableOpacity>

      </MainContainer>
    );
  }
}

const mapStateToProps  = ({ decks }, { navigation }) => {
  const { id } = navigation.state.params;
  return {
    deck: decks[id] ? decks[id] : false
  };
};

export default connect(mapStateToProps)(DeckDetailView);