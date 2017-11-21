import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { lightGray, lightBlue } from '../utils/colors';
import { borderColor } from 'polished';

class TextField extends Component {

  state = {
    borderColor: lightGray
  }

  onFocus = () => {
    this.setState({
      borderColor: lightBlue
    });
  }

  onBlur = () => {
    this.setState({
      borderColor: lightGray
    });
  }

  clearText = () => {
    this.refs.TextInput.setNativeProps({text: ''});
  }

  setFocus = () => {
    this.refs.TextInput.focus();
  }

  render() {

    const { borderColor } = this.state;
    const { placeholder, onChangeText, autoFocus, multiline, numberOfLines } = this.props;

    return (
      <TextInput
        ref="TextInput"
        placeholder={placeholder}
        onChangeText={onChangeText}
        autoFocus={autoFocus}
        multiline={multiline}
        onFocus={ () => {this.onFocus()}} 
        onBlur={ () => {this.onBlur()}} 
        style={{ ...inputStyles, borderColor }} 
      />
    );
  }
}

const inputStyles = {
  fontSize: 24,
  fontFamily: 'Nunito-Bold',
  margin: 20,
  borderColor: lightGray,
  borderBottomWidth: 1,
  paddingTop: 5,
  paddingBottom: 5
}

export default TextField;