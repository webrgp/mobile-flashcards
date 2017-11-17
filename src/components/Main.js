import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainStatusBar from './MainStatusBar';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`

class Main extends Component {
  render() {
    return (
      <Container>
        <MainStatusBar barStyle='light-content' />
        <Text>Open up App.js to start working on your app!</Text>
      </Container>
    );
  }
}

export default Main;