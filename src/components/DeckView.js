import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { white, lightBlue } from '../utils/colors';
import { HeaderText, BtnText, MainContainer } from '../utils/styles';
import { Ionicons } from '@expo/vector-icons';

class DeckView extends Component {

  static navigationOptions = ({ navigation }) => {
    const { deck } = navigation.state.params;

    return {
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
      headerTintColor: white,
      headerRight: <TouchableOpacity
        onPress={ () => { 
          Alert.alert(
            `Remove ${deck.title} Deck`,
            'Are you sure you want to delete this deck?',
            [
              {text: 'Cancel', onPress: () => console.log('Cancel Pressed!'), style: 'cancel'},
              {text: 'Remove', onPress: () => console.log('OK Pressed!'), style: 'destructive'},
            ]
          );
        }}
        style={{ marginRight: 10 }}
      >
        <Ionicons name="ios-trash" size={32} color={white} />
      </TouchableOpacity>
    }
  }
  
  render() {

    const { deck } = this.props.navigation.state.params;

    return (
      <MainContainer>
        <HeaderText style={{ color: deck.color }}>{deck.title}</HeaderText>
      </MainContainer>
    );
  }
}

export default DeckView;