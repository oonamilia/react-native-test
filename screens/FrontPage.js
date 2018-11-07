import React, { Component } from 'react';
import { AppRegistry, Image, StyleSheet, View, Text, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import TextComponent from '../components/TextComponent.js';

export default class FrontPage
 extends Component {

  static navigationOptions = {
    title: 'Etusivu',
  };

  state = {
    frontPageText: 'Text text text'
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
                title="Tekstinsyöttötesti"
                onPress={() => this.props.navigation.navigate('Colors')}
              />
            </View>
            <View style={styles.buttonContainer}>
              <Button color="#383838"
                title="Kuva ja nappula"
                onPress={() => this.props.navigation.navigate('PicturePage')}
              />
            </View>
            <View style={styles.buttonContainer}>
              <Button color="#383838"
                title="Muistilista"
                onPress={() => this.props.navigation.navigate('ToDo')}
              />
            </View>
          </View>
          
          <View style={styles.smallerContainer}>
            <Text style={styles.smallerTitle}> Tämä etusivu scrollautuu niin pitkälle kuin sisältöä riittää </Text>
            <Text>{this.state.frontPageText}</Text>
            <Text>{this.state.frontPageText}</Text>
            <Text>{this.state.frontPageText}</Text>
            <Text>{this.state.frontPageText}</Text>
            <Text>{this.state.frontPageText}</Text>
            
            <TextComponent message={'Tämä viesti menee textcomponentille ja sitä voi käyttää this.props.message'} />
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