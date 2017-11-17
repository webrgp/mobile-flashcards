import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { Constants } from 'expo';

const MainStatusBar = props => (
  <View style={{ height: Constants.statusBarHeight }}>
    <StatusBar translucent {...props} />
  </View>
);

export default MainStatusBar;