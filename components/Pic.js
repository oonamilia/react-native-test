import React, { Component } from 'react';
import { AppRegistry, Image, StyleSheet, View, Button, Alert } from 'react-native';
import TextComponent from './TextComponent.js';

export default class Pic extends Component {
  render() {
    let pic = {
      uri: 'https://www.nps.gov/common/uploads/stories/images/nri/20161013/articles/71B2B5D2-1DD8-B71B-0B76C91DF3E21792/71B2B5D2-1DD8-B71B-0B76C91DF3E21792.jpg'
    };
    return (
      <View>
        <Image source={pic} style={styles.pic}/>
        <TextComponent message={'Some fucking message'} />

        <Button color="#40724a"
          onPress={() => {
            Alert.alert('You tapped the button!');
          }}
          title="Tap me!"
        />
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