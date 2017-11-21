import React, { Component } from 'react';
import { TextInputField } from '../utils/styles';
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

  handleKeyDown = (e) => {
    console.log(e);
  }

  render() {

    const { borderColor } = this.state;
    const { placeholder, onChangeText, autoFocus, multiline, numberOfLines } = this.props;

    return (
      <TextInputField 
        placeholder={placeholder}
        onChangeText={onChangeText}
        autoFocus={autoFocus}
        multiline={multiline}
        onFocus={ () => {this.onFocus()}} 
        onBlur={ () => {this.onBlur()}} 
        style={{borderColor}} 
      />
    );
  }
}

export default TextField;