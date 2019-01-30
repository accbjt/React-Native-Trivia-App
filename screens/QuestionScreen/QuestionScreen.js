import React from 'react';
import PropTypes from 'prop-types';

import { AllHtmlEntities as Entities } from 'html-entities';
import { Text, View, TouchableHighlight } from 'react-native';

const entities = new Entities();

const QuestionScreen = ({ currentQuestion, nextQuestion, componentId }) => (
  <View>
    <Text
      style={{
        marginTop: 50,
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
      }}
    >
      {currentQuestion.category}
    </Text>
    <View
      style={{
        marginTop: 80,
        justifyContent: 'center',
        width: 300,
        height: 300,
        borderWidth: 1,
      }}
    >
      <Text style={{ fontSize: 20, padding: 20, textAlign: 'center' }}>
        {entities.decode(currentQuestion.question)}
      </Text>
    </View>
    <Text style={{ marginTop: 20, fontSize: 20, textAlign: 'center' }}>
      {`${currentQuestion.index + 1} of 10`}
    </Text>
    <View style={{ marginTop: 140, flex: 1, flexDirection: 'row' }}>
      <TouchableHighlight
        style={{ height: 20 }}
        onPress={() => {
          nextQuestion('True', componentId);
        }}
      >
        <Text style={{ fontSize: 20, width: 150, textAlign: 'center' }}>
          True
        </Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={{ height: 20 }}
        onPress={() => {
          nextQuestion('False', componentId);
        }}
      >
        <Text style={{ fontSize: 20, width: 150, textAlign: 'center' }}>
          False
        </Text>
      </TouchableHighlight>
    </View>
  </View>
);

QuestionScreen.propTypes = {
  componentId: PropTypes.string.isRequired,
  currentQuestion: PropTypes.object.isRequired,
  nextQuestion: PropTypes.func.isRequired,
};

export default QuestionScreen;
