import React, { Component } from 'react';
import { AppRegistry, Image, StyleSheet, View, Text, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class FrontPage
 extends Component {

  static navigationOptions = {
    title: 'Etusivu',
  };

  state = {
    frontPageText: 'Text as a state'
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.viewStyle}>
            
            <Image
              source={
                require('../assets/kitten.png')
              }
              style={styles.headerImage}
            />

            <Text style={styles.h1}>Kiva pieni sovellus</Text>

          </View>
          
          <View style={styles.smallerContainer}>
            <View style={styles.buttonContainer}>
              <Button color="#383838"
                title="Go to see a flex test"
                onPress={() => this.props.navigation.navigate('Colors')}
              />
            </View>
            <View style={styles.buttonContainer}>
              <Button color="#383838"
                title="Go see a picture screen"
                onPress={() => this.props.navigation.navigate('Pic')}
              />
            </View>
            <View style={styles.buttonContainer}>
              <Button color="#383838"
                title="Go see a picture screen"
                onPress={() => this.props.navigation.navigate('Pic')}
              />
            </View>
          </View>
          
          <View style={styles.smallerContainer}>
            <Text style={styles.smallerTitle}>This is Front page screen</Text>
            <Text>{this.state.frontPageText}</Text>
            <Text>{this.state.frontPageText}</Text>
            <Text>{this.state.frontPageText}</Text>
            <Text>{this.state.frontPageText}</Text>
            <Text>{this.state.frontPageText}</Text>
          </View>
      </ScrollView>
      
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#ceefea',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  smallerContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: 20,
    paddingTop: 30
  },
  buttonContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 5,
    width: '100%',
    padding: 5,
  },
  h1: {
    textAlign: 'center', 
    fontSize: 35, 
    marginBottom: 30,
    fontFamily: 'raleway-regular'
  },
  smallerTitle: {
    textAlign: 'center', 
    fontSize: 25, 
    marginBottom: 30,
    fontFamily: 'raleway-regular'
  },
  headerImage: {
    width: 100, 
    height: 110, 
    marginTop: 25,
    marginBottom: 20
  },
  navButton: {
    marginBottom: 30
  }
});