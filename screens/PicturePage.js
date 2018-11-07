import React, { Component } from 'react';
import { AppRegistry, Image, StyleSheet, View, Button, Alert } from 'react-native';
import Pic from '../components/Pic.js';

export default class PicturePage extends Component {
  render() {
    return (
      <View>
        <Pic />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pic: {
    width: '100%',
    height: 240
  }
});