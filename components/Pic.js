import React, { Component } from 'react';
import { AppRegistry, Image, StyleSheet, View, Button, Alert } from 'react-native';


export default class Pic extends Component {
  render() {
    let pic = {
      uri: 'https://www.nps.gov/common/uploads/stories/images/nri/20161013/articles/71B2B5D2-1DD8-B71B-0B76C91DF3E21792/71B2B5D2-1DD8-B71B-0B76C91DF3E21792.jpg'
    };
    return (
      <View>
        <Image source={pic} style={styles.pic}/>

        <Button color="#40724a"
          onPress={() => {
            Alert.alert('Piip piip');
          }}
          title="Paina tästä"
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