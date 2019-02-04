import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'react-native-elements';

import { AllHtmlEntities as Entities } from 'html-entities';
import { Text, View, Animated, Dimensions } from 'react-native';
import styles from '../../styles';

const entities = new Entities();
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

  nextQuestion(answer, componentId) {
    const { nextQuestion } = this.props;

    nextQuestion(answer, componentId);
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
            {currentQuestion.index > -1
              ? `${currentQuestion.index + 1} of 10`
              : ''}
          </Text>
        </Animated.View>

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
        <View
          style={[
            styles.font,
            {
              marginTop: 20,
              flex: 1,
              flexDirection: 'row',
            },
          ]}
        >
          <View
            style={{
              margin: 30,
            }}
          >
            <Icon
              raised
              name="thumbs-up"
              type="font-awesome"
              color="#63cdda"
              reverse
              size={30}
              onPress={() => {
                this.nextQuestion('True', componentId);
              }}
            />
          </View>
          <View
            style={{
              margin: 30,
            }}
          >
            <Icon
              raised
              name="thumbs-down"
              type="font-awesome"
              color="#e15f41"
              size={30}
              reverse
              onPress={() => {
                this.nextQuestion('False', componentId);
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}

QuestionScreen.propTypes = {
  componentId: PropTypes.string.isRequired,
  currentQuestion: PropTypes.object.isRequired,
  nextQuestion: PropTypes.func.isRequired,
};

export default QuestionScreen;
