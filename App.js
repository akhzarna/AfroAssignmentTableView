/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,
        FlatList,TouchableOpacity,Alert} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  constructor() {
      super();

      this.state={
          afroArray:['hasnain','hasan','ABC'],
        }
  }

  render() {
    return (
      <View style={styles.container}>

      <FlatList
        data={this.state.afroArray}
        renderItem={({index,item}) =>
        <TouchableOpacity onPress={
          ()=>this.rowSelected(index,item)
          }>

          <View style={styles.welcome}>
              <Text style={styles.welcome}>{item}
              </Text>
          </View>


        </TouchableOpacity>
      }
      />

      </View>
    );
  }

  rowSelected(index,item){
    Alert.alert('Welcome ' + this.state.afroArray[index]);
    Alert.alert('Welcome ' + item);
    Alert.alert('Welcome ' + index);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
