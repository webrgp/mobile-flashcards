import { AsyncStorage } from 'react-native';

const DECKS_STORAGE_KEY = 'UdaciCards:decks'

export const saveDecks = async ( state ) => {
  try {
    await AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    console.log('AsyncStorage save error: ' + error.message);
  }
}

export const fetchDecks = () => 
  AsyncStorage.getItem(DECKS_STORAGE_KEY)