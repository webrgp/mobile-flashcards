import { AsyncStorage } from 'react-native';

const DECKS_STORAGE_KEY = 'UdaciCards:decks'

export const saveDeck = async ( deck ) => {
  try {
    await AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
      [deck.title]: deck
    }));
  } catch (error) {
    console.log('AsyncStorage save error: ' + error.message);
  }
}

export const removeDeck = async ( id ) => {
  try {
    await fetchDecks()
      .then( results => {
        const decks = JSON.parse(results);
        decks[id] = undefined;
        delete decks[id];
        AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks));
        return decks;
      });
  } catch (error) {
    console.log('AsyncStorage save error: ' + error.message);
  }
}

export const fetchDecks = () => 
  AsyncStorage.getItem(DECKS_STORAGE_KEY)