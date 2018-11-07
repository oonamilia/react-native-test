import React from 'react';
import { Image, StyleSheet, Text, View, ScrollView, StatusBar } from 'react-native';
import { AppLoading, Font } from 'expo';
import FrontPage from './screens/FrontPage.js';
import Colors from './screens/ColorfulPage.js';
import PicturePage from './screens/PicturePage.js';
import ToDo from './screens/ToDo.js';
import { createStackNavigator } from 'react-navigation';

const RootStack = createStackNavigator(
  {
    FrontPage: {
      screen: FrontPage,
    },
    Colors: {
      screen: Colors,
    },
    PicturePage: {
      screen: PicturePage,
    },
    ToDo: {
      screen: ToDo,
    },
  },
  {
    initialRouteName: 'FrontPage',
  }
);

export default class App extends React.Component {
  state = {
    loaded: false
  };

  componentWillMount() {
    this._loadAssetsAsync();
  }

  _loadAssetsAsync = async () => {
    await Font.loadAsync({
      'raleway-regular': require('./assets/fonts/Raleway-Regular.ttf'),
    });
    this.setState({ loaded: true });
  };

  render() {
    if (!this.state.loaded) {
      return <AppLoading />;
    }

    return <RootStack />;
    // return (
    //   <ScrollView contentContainerStyle={styles.container}>
    //   {/* Piilotetaan puhelimen status bar */}
    //   <StatusBar hidden /> 
      
    //   <Header></Header>

    //     <Text style={{ fontFamily: 'raleway-regular', fontSize: 27 }}>
    //         Hello, world!
    //     </Text>
        
    //     <View style={styles.pContainer}>
    //       <Text style={styles.basicParagraph}>Tämä on kissa-appi</Text>

    //       <Text style={styles.basicParagraph}> Lisää tekstiä </Text>
    //     </View>

    //     <Pic />

    //     <Image
    //       source={
    //         require('./assets/cat.png')
    //       }
    //       style={{width: 200, height: 200}}
    //     />

    //     <View style={styles.loremContainer}>
    //       <Text style={styles.basicParagraph}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. In elementum laoreet nisl, ut venenatis dolor aliquet quis. Nam rhoncus ipsum orci, sed aliquam velit dignissim nec. Nulla non rhoncus turpis, id ornare mi. Mauris ac lacus ante. Donec tincidunt ipsum a facilisis tempus. Curabitur quis nisi est. Suspendisse semper enim sit amet eros mattis tincidunt. Maecenas congue urna vitae ex dapibus, sed commodo nisi convallis. Mauris mattis rhoncus varius. </Text>
    //     </View>

    //     <Colors message={'Some fucking message'}/>
          
    //     <View>
    //       <Text> {this.state.kittens} </Text>
    //     </View>


    //   </ScrollView>

      
    // );
  }

 

}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  basicParagraph: {
    marginBottom: 10,
    fontFamily: 'raleway-regular'
  },
  pContainer: {
    marginTop: 30,
    marginBottom: 30
  },
  loremContainer: {
    color: '#46a094',
    width: '75%'
  }
});
