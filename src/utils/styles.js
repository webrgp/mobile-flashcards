import styled from 'styled-components/native';
import { Font } from 'expo';
import { white, pearl, lightGray, gray, lightBlue } from './colors';
 

export const MainContainer = styled.View`
  flex: 1;
  background-color: ${pearl};
  justify-content: flex-start;
`

export const KeyboardAvoidingContainer = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: ${white};
`

export const DeckListContainer = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 20px;
`

export const DeckItemButton = styled.TouchableOpacity`
  background-color: ${lightGray};
  border-radius: 8px;
  margin: 10px 0px;
  shadow-offset: 0px 8px;
  shadow-opacity: 1;
  shadow-radius: 0px;
  shadow-color: ${lightGray};
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
export const DeckItemButtonText = styled.Text`
  color: ${white};
  font-family: 'Nunito-Black';
  font-size: 25px;
  text-align: left;
  align-self: flex-start;
  margin: 14px 15px 10px;
`
export const DeckItemCardCountText = styled.Text`
  color: ${white};
  font-family: 'Nunito-Light';
  font-size: 16px;
  text-align: center;
  margin-bottom: 10px;
`

export const DeckNewItemButton = DeckItemButton.extend`
  flex-direction: column;
  justify-content: center;
`

export const DeckNewItemButtonText = DeckItemButtonText.extend`
  color: ${gray};
  font-size: 50px;
  text-align: center;
  align-self: center;
`

export const HeaderText = styled.Text`
  color: ${lightBlue};
  font-size: 32px;
  text-align: center;
  font-family: 'Nunito-Bold';
  margin: 30px 20px 0px;
`

export const SubHeaderText = styled.Text`
  color: ${gray};
  font-size: 24px;
  text-align: center;
  font-family: 'Nunito-Bold';
  margin: 10px 20px;
`

export const BtnText = styled.Text`
  background-color: ${lightBlue};
  font-family: 'Nunito-Regular';
  padding: 10px;
  margin: 20px 20px;
  font-size: 24px;
  text-align: center;
  color: ${white};
`





export const loadFonts = () => {
  return Font.loadAsync({
    'Nunito-Black': require('../../assets/fonts/Nunito-Black.ttf'),
    'Nunito-Bold': require('../../assets/fonts/Nunito-Bold.ttf'),
    'Nunito-ExtraBold': require('../../assets/fonts/Nunito-ExtraBold.ttf'),
    'Nunito-Light': require('../../assets/fonts/Nunito-Light.ttf'),
    'Nunito-Regular': require('../../assets/fonts/Nunito-Regular.ttf')
  });
}