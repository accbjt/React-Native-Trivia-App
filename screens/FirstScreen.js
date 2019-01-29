/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { Navigation } from 'react-native-navigation';
const goToSecondScreen = (componentId) => {
  Navigation.push(componentId, {
    component: {
      name: 'SecondScreen'
    }
  })
}

const FirstScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>First Screen</Text>
      <TouchableHighlight
        style={{ height: 20 }}
        onPress={() => {
          goToSecondScreen(props.componentId);
        }}
      >
        <Text style={{ fontSize: 20, width: 150, textAlign: 'center' }}>
          True
        </Text>
      </TouchableHighlight>
    </View>
  );
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

export default FirstScreen;
