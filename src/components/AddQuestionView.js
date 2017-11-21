import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import TextField from './TextField';
import { white, lightGray, gray } from '../utils/colors';
import { KeyboardAvoidingContainer, BtnText } from '../utils/styles';
import { connect } from 'react-redux';
import { saveDeck } from '../actions/decks';

class AddQuestionView extends Component {

  static navigationOptions = ({ navigation, screenProps }) => {
    const { id } = navigation.state.params;
    const deck = screenProps.decks[id];
    return deck ? {
      title: 'Add Question',
      headerTitle: 
        <Text
          style={{ color: white, marginLeft: 10, fontSize: 22, fontFamily: 'Nunito-Light' }}
        >Add Question</Text>,
      headerStyle: {
        backgroundColor: deck.color
      },
      headerTitleStyle: {
        color: white
      },
      headerTintColor: white
    } : {}
  }

  state = {
    question: '',
    answer: '',
    isLoading: false
  }

  save = () => {
    const { deck } = this.props;
    
    console.log(deck);
  }

  render() {

    const isEmpty = this.state.question === '' || this.state.answer === '';

    return (
      <KeyboardAvoidingContainer behavior='padding'>
        <TextField 
          placeholder="Enter Question"
          autoFocus={true}
          multiline={true}
          onChangeText={(question) => this.setState({question})}
          value={this.state.question}
        />

        <TextField 
          placeholder="Enter Answer"
          multiline={true}
          onChangeText={(answer) => this.setState({answer})}
          value={this.state.answer}
        />

          <TouchableOpacity
            onPress={ () => { this.save() }}
            disabled={isEmpty}
          >
            <BtnText style={ isEmpty ? { backgroundColor: lightGray, color: gray } : {} }>Save & Add Another</BtnText>
          </TouchableOpacity>
      </KeyboardAvoidingContainer>
    );
  }
}

const mapStateToProps  = ({ decks }, { navigation }) => {
  const { id } = navigation.state.params;
  return {
    deck: decks[id] ? decks[id] : false
  };
};

export default connect(mapStateToProps, {saveDeck})(AddQuestionView);