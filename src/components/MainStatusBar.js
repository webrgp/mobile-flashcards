import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { Constants } from 'expo';

const MainStatusBar = ({backgroundColor, ...props}) => (
  <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);

export default MainStatusBar;