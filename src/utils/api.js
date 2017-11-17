import { AsyncStorage } from 'react-native';

const DECKS_STORAGE_KEY = 'UdaciCards:decks'

export const fetchDecks = () => 
  AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then( results =>  JSON.parse(results) )
