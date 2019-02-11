import React from 'react';
import PropTypes from 'prop-types';

import { Animated, Text, View } from 'react-native';
import styles from '../styles';

const QuestionDetail = ({
  animatedStyle1,
  animatedStyle2,
  currentQuestion,
}) => (
  <View
    style={{
      ...styles.font,
      flex: 1,
      alignItems: 'center',
    }}
  >
    <Animated.View
      style={[
        animatedStyle1,
        {
          marginTop: 50,
          fontWeight: 'bold',
          position: 'absolute',
          top: 0,
        },
      ]}
    >
      <Text style={[styles.font, { fontSize: 30, textAlign: 'center' }]}>
        {currentQuestion.category}
      </Text>
    </Animated.View>

    <Animated.View style={[animatedStyle2]}>
      <Text
        style={{
          ...styles.font,
          marginTop: 150,
          fontSize: 20,
          textAlign: 'center',
        }}
      >
        {currentQuestion.index > -1 ? `${currentQuestion.index + 1} of 10` : ''}
      </Text>
    </Animated.View>
  </View>
);

export default QuestionDetail;

QuestionDetail.propTypes = {
  animatedStyle1: PropTypes.object.isRequired,
  animatedStyle2: PropTypes.object.isRequired,
  currentQuestion: PropTypes.object.isRequired,
};
