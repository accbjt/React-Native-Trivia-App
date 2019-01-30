import React from 'react';
import PropTypes from 'prop-types';
import { AllHtmlEntities as Entities } from 'html-entities';
import { Text, View, TouchableHighlight, ScrollView } from 'react-native';

const entities = new Entities();

const ScoreScreen = ({ answers, reset, componentId }) => {
  const correct = answers.filter(answer => answer.isCorrect);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text style={{ fontSize: 20, marginTop: 50, fontWeight: 'bold' }}>
        Your Score
      </Text>
      <Text
        style={{
          fontSize: 20,
          marginTop: 20,
          marginBottom: 20,
          fontWeight: 'bold',
        }}
      >
        {correct.length}
        /10
      </Text>
      <ScrollView>
        {answers.map(answer => (
          <View
            key={answer.id}
            style={{
              flex: 1,
              flexDirection: 'row',
              width: '90%',
              marginBottom: 10,
            }}
          >
            <Text style={{ fontSize: 20, padding: 10 }}>
              {answer.isCorrect ? '+' : '-'}
            </Text>
            <Text style={{ fontSize: 20 }}>
              {entities.decode(answer.question)}
            </Text>
          </View>
        ))}
      </ScrollView>
      <TouchableHighlight
        style={{ marginBottom: 50 }}
        onPress={() => reset(componentId)}
      >
        <Text style={{ fontSize: 20 }}>PLAY AGAIN?</Text>
      </TouchableHighlight>
    </View>
  );
};

ScoreScreen.propTypes = {
  answers: PropTypes.array.isRequired,
  componentId: PropTypes.string.isRequired,
  reset: PropTypes.func.isRequired,
};

export default ScoreScreen;
