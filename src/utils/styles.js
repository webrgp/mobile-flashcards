import styled from 'styled-components/native';
import { Font } from 'expo';
import { white, pearl, lightGray, gray } from './colors';
 

export const MainContainer = styled.View`
  flex: 1;
  background-color: ${pearl};
  justify-content: flex-start;
`

export const DeckListContainer = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: 20px;
  margin-left: 20px;
`

export const DeckItem = styled.View`
  width: 50%;
`
export const DeckItemButton = styled.TouchableOpacity`
  background-color: ${lightGray};
  border-radius: 8px;
  margin: 10px 0px;
  shadow-offset: 0px 8px;
  shadow-opacity: 1;
  shadow-radius: 0px;
  shadow-color: ${lightGray};
`

export const DeckNewItemButton = DeckItemButton.extend`
  flex-direction: column;
  justify-content: center;
`
export const DeckItemButtonText = styled.Text`
  color: ${white};
  font-family: 'Nunito-Black';
  font-size: 25px;
  text-align: left;
  margin: 14px 15px 10px;
`

export const DeckNewItemButtonText = DeckItemButtonText.extend`
  color: ${gray};
  font-size: 50px;
  text-align: center;
`


export const loadFonts = () => {
  return Font.loadAsync({
    'Nunito-Black': require('../../assets/fonts/Nunito-Black.ttf'),
    'Nunito-BlackItalic': require('../../assets/fonts/Nunito-BlackItalic.ttf'),
    'Nunito-Bold': require('../../assets/fonts/Nunito-Bold.ttf'),
    'Nunito-BoldItalic': require('../../assets/fonts/Nunito-BoldItalic.ttf'),
    'Nunito-ExtraBold': require('../../assets/fonts/Nunito-ExtraBold.ttf'),
    'Nunito-ExtraBoldItalic': require('../../assets/fonts/Nunito-ExtraBoldItalic.ttf'),
    'Nunito-ExtraLight': require('../../assets/fonts/Nunito-ExtraLight.ttf'),
    'Nunito-ExtraLightItalic': require('../../assets/fonts/Nunito-ExtraLightItalic.ttf'),
    'Nunito-Italic': require('../../assets/fonts/Nunito-Italic.ttf'),
    'Nunito-Light': require('../../assets/fonts/Nunito-Light.ttf'),
    'Nunito-LightItalic': require('../../assets/fonts/Nunito-LightItalic.ttf'),
    'Nunito-Regular': require('../../assets/fonts/Nunito-Regular.ttf'),
    'Nunito-SemiBold': require('../../assets/fonts/Nunito-SemiBold.ttf'),
    'Nunito-SemiBoldItalic': require('../../assets/fonts/Nunito-SemiBoldItalic.ttf')
  });
}