import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { Navigation } from 'react-native-navigation';

// import ScoreView from '../ScoreView';
// import QuestionView from '../QuestionView';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});

const start = (componentId, startGame) => {
  startGame();

  Navigation.push(componentId, {
    component: {
      name: 'QuestionScreen',
    },
  });
};

const Home = ({ componentId, startGame }) => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          marginTop: 50,
          fontSize: 20,
          width: '50%',
          textAlign: 'center',
          fontWeight: 'bold',
        }}
      >
        Welcome to the Trivia Challenge!
      </Text>
      <Text
        style={{
          marginTop: 175,
          fontSize: 20,
          width: '50%',
          textAlign: 'center',
        }}
      >
        You will be presented with 10 true or false questions.
      </Text>
      <Text
        style={{
          marginTop: 125,
          marginBottom: 125,
          fontSize: 20,
          textAlign: 'center',
        }}
      >
        Can you score 100%?
      </Text>

      <TouchableHighlight
        style={{ height: 20 }}
        onPress={() => start(componentId, startGame)}
      >
        <Text
          style={{
            fontSize: 20,
            textAlign: 'center',
            height: 20,
          }}
        >
          BEGIN
        </Text>
      </TouchableHighlight>
    </View>
  );
};

Home.propTypes = {
  componentId: PropTypes.string.isRequired,
  startGame: PropTypes.func.isRequired,
};

export default Home;
