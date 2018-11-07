import React, { Component } from 'react';
import { AppRegistry, Image, StyleSheet, Text, View, TextInput, FlatList, Button } from 'react-native';

export default class ToDo extends Component {
    state = {
        tasks: [{key:'Siivoa'}, {key:'Syö'}],
        text: ""
    };

  render() {
    
    return (
        <View style={{flex: 1, backgroundColor: 'babyblue', alignItems: 'center'}}>
            <TextInput
                style={styles.textInput}
                placeholder="Muistettavaa"
                onChangeText={(text) => this.setState({text})}
            />
            <Button color="#383838"
                    onPress={() => {
                        const taskItems = this.state.tasks.slice(0);
                        const addedItem = this.state.text.slice(0);

                        taskItems.push({
                            key: addedItem
                        });

                        this.setState({
                            tasks: taskItems
                        });
                    }}
                    title="Lisää uusi"
            />

            <FlatList style={styles.listStyle}
                data={this.state.tasks}
                renderItem={({item}) => <Text style={styles.listItemStyle}>{item.key}</Text>}
            />
        </View>
        
    );
  }
}

const styles = StyleSheet.create({
    textInput: {
        backgroundColor: '#fff', 
        padding: 5,
        marginTop: 10,
        marginBottom: 20,
        width: '100%'
    },
    listStyle: {
      width: '90%',
      marginTop: 10
    },
    listItemStyle: {
        fontSize: 20,
        backgroundColor: '#fff',
        marginTop: 2,
        borderWidth: 1,
        borderColor: '#383838',
        padding: 10
      }
  });