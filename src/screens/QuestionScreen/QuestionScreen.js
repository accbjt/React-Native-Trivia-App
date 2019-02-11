import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Animated, Dimensions } from 'react-native';

import QuestionDetail from '../../components/QuestionDetail';
import Question from '../../components/Question';
import Answer from '../../components/Answer';

import styles from '../../styles';

const { width } = Dimensions.get('window');

const getBackgroundColor = () => {
  const colors = [
    '#f3a683',
    '#546de5',
    '#778beb',
    '#e77f67',
    '#cf6a87',
    '#c44569',
    '#596275',
    '#303952',
    '#574b90',
    '#3dc1d3',
  ];

  return colors[Math.floor(Math.random() * Math.floor(colors.length))];
};

class QuestionScreen extends Component {
  componentWillUpdate() {
    this.animatedValue1 = new Animated.Value(0);
    this.animatedValue2 = new Animated.Value(width);

    Animated.timing(this.animatedValue1, {
      toValue: 1,
      duration: 1500,
    }).start();

    Animated.timing(this.animatedValue2, {
      toValue: 1,
      duration: 1500,
    }).start();
  }

  render() {
    const { componentId, currentQuestion } = this.props;
    const animatedStyle1 = { opacity: this.animatedValue1 };
    const animatedStyle2 = { left: this.animatedValue2 };

    return (
      <View
        style={{
          ...styles.font,
          flex: 1,
          backgroundColor: getBackgroundColor(),
          alignItems: 'center',
        }}
      >
        <QuestionDetail
          animatedStyle1={animatedStyle1}
          currentQuestion={currentQuestion}
          animatedStyle2={animatedStyle2}
        />

        <Question
          animatedStyle2={animatedStyle2}
          currentQuestion={currentQuestion}
        />

        <Answer componentId={componentId} />
      </View>
    );
  }
}

QuestionScreen.propTypes = {
  componentId: PropTypes.string.isRequired,
  currentQuestion: PropTypes.object.isRequired,
};

export default QuestionScreen;
