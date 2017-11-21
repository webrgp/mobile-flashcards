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

  render() {

    const { borderColor } = this.state;
    const { placeholder, onChangeText } = this.props;

    return (
      <TextInputField 
        placeholder={placeholder}
        onChangeText={onChangeText}
        onFocus={ () => {this.onFocus()}} style={{borderColor}} 
      />
    );
  }
}

export default TextField;