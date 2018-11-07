import React, { Component } from 'react';
import { AppRegistry, Image, StyleSheet, Text } from 'react-native';

export default class TextComponent extends Component {
  render() {
    
    
    return (
      <Text style={styles.styledText}>
        {this.props.message}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  styledText: {
    fontSize: 20, 
    fontFamily: 'raleway-regular',
    padding: 10, 
    margin: 10
  }
});