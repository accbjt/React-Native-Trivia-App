import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { Icon } from 'react-native-elements';

import styles from '../../styles';

const start = (componentId, startGame) => {
  startGame();

  Navigation.push(componentId, {
    component: {
      name: 'QuestionScreen',
      options: {
        topBar: {
          title: {
            text: 'Questions',
          },
        },
      },
    },
  });
};

const Home = ({ componentId, startGame }) => (
  <View
    style={{
      ...styles.container,
      backgroundColor: '#303952',
    }}
  >
    <Text
      style={{
        ...styles.font,
        marginTop: 100,
        fontSize: 30,
        width: '50%',
        textAlign: 'center',
        fontWeight: 'bold',
      }}
    >
      Welcome to the Trivia Challenge!
    </Text>

    <View style={{ marginTop: 100 }}>
      <Icon
        raised
        name="play-circle"
        type="font-awesome"
        color="#e15f41"
        size={40}
        reverse
        onPress={() => start(componentId, startGame)}
      />
    </View>
  </View>
);

Home.propTypes = {
  componentId: PropTypes.string.isRequired,
  startGame: PropTypes.func.isRequired,
};

export default Home;
