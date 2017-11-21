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
    const { question, answer, isLoading } = this.state;

    this.setState({ isLoading: true });

    deck.questions.push({
      question: question,
      answer: answer
    });

    this.props.saveDeck(deck);
    
    this.setState({
      question: '',
      answer: '',
      isLoading: false
    });

    this.clearFields();
  }

  clearFields = () => {
    this._answerInput.clearText();
    this._questionInput.clearText();
    this._questionInput.setFocus();
  }

  render() {

    const isEmpty = this.state.question === '' || this.state.answer === '';

    return (
      <KeyboardAvoidingContainer behavior='padding'>
        <TextField 
          ref={component => this._questionInput = component}
          placeholder="Enter Question"
          autoFocus={true}
          multiline={true}
          value={this.state.question}
          onChangeText={(question) => this.setState({question})}
        />

        <TextField 
          ref={component => this._answerInput = component}
          placeholder="Enter Answer"
          multiline={true}
          value={this.state.answer}
          onChangeText={(answer) => this.setState({answer})}
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

export default connect(mapStateToProps, { saveDeck })(AddQuestionView);