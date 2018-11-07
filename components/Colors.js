import React, { Component } from 'react';
import { AppRegistry, Image, StyleSheet, View, Text, TextInput } from 'react-native';
import TextComponent from './TextComponent.js';

export default class Colors extends Component {
  constructor(props) {
        super(props);
        this.state = {text: ''};
  }

  render() {
    return (

        <View style={{height: 600, width: '100%'}}>
            <View style={{flex: 1, backgroundColor: 'babyblue', alignItems: 'center'}}>
                <TextInput
                    style={{height: 40}}
                    placeholder="Tähän voi kirjoittaa oman kivan viestin"
                    onChangeText={(text) => this.setState({text})}
                />
            </View>
            <View style={{flex: 2, backgroundColor: 'powderblue', alignItems: 'center'}}>
                <Text>Se menee toiselle komponentille: </Text>
                <TextComponent message={this.state.text} />
            </View>
            <View style={{flex: 3, backgroundColor: 'skyblue', alignItems: 'center'}}>
                <Text> Moi </Text>
            </View>
            <View style={{flex: 4, backgroundColor: 'steelblue', alignItems: 'center'}}>
                <Text> Moi </Text>
            </View>

            <View>
                <Text>{this.props.message}</Text>
            </View>
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
});