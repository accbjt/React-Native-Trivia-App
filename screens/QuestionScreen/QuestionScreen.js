import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'react-native-elements';

import { AllHtmlEntities as Entities } from 'html-entities';
import { Text, View } from 'react-native';
import styles from '../../styles';

const entities = new Entities();

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

const QuestionScreen = ({ currentQuestion, nextQuestion, componentId }) => (
  <View
    style={{
      ...styles.font,
      flex: 1,
      backgroundColor: getBackgroundColor(),
      alignItems: 'center',
    }}
  >
    <Text
      style={{
        ...styles.font,
        marginTop: 50,
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        position: 'absolute',
        top: 0,
      }}
    >
      {currentQuestion.category}
    </Text>

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

    <View
      style={{
        ...styles.font,
        marginTop: 20,
        width: 300,
        height: 300,
      }}
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
    </View>
    <View
      style={{ ...styles.font, marginTop: 20, flex: 1, flexDirection: 'row' }}
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
            nextQuestion('True', componentId);
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
            nextQuestion('False', componentId);
          }}
        />
      </View>
    </View>
  </View>
);

QuestionScreen.propTypes = {
  componentId: PropTypes.string.isRequired,
  currentQuestion: PropTypes.object.isRequired,
  nextQuestion: PropTypes.func.isRequired,
};

export default QuestionScreen;
