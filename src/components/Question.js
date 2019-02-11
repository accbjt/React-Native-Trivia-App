import React from 'react';
import PropTypes from 'prop-types';

import { AllHtmlEntities as Entities } from 'html-entities';
import { Text, Animated } from 'react-native';

import styles from '../styles';

const entities = new Entities();

const Question = ({ animatedStyle2, currentQuestion }) => (
  <Animated.View
    style={[
      styles.font,
      animatedStyle2,
      {
        marginTop: 20,
        width: 300,
        height: 300,
      },
    ]}
  >
    <Text
      style={{
        ...styles.font,
        fontSize: 30,
        padding: 20,
        textAlign: 'center',
      }}
    >
      {entities.decode(currentQuestion.question)}
    </Text>
  </Animated.View>
);

export default Question;

Question.propTypes = {
  animatedStyle2: PropTypes.object.isRequired,
  currentQuestion: PropTypes.object.isRequired,
};
