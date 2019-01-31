import React from 'react';
import PropTypes from 'prop-types';
import { AllHtmlEntities as Entities } from 'html-entities';
import { Text, View, TouchableHighlight, ScrollView } from 'react-native';
import styles from '../../styles';

const entities = new Entities();

const ScoreScreen = ({ answers, reset, componentId }) => {
  const correct = answers.filter(answer => answer.isCorrect);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#303952',
      }}
    >
      <Text
        style={{
          ...styles.font,
          color: '#fff',
          fontSize: 20,
          marginTop: 20,
          fontWeight: 'bold',
        }}
      >
        Your Score
      </Text>
      <Text
        style={{
          ...styles.font,
          fontSize: 20,
          marginTop: 10,
          marginBottom: 20,
          fontWeight: 'bold',
          color: '#fff',
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
              width: '100%',
              marginBottom: 10,
              color: '#fff',
              backgroundColor: answer.isCorrect ? '#63cdda' : '#e15f41',
              textAlign: 'center',
            }}
          >
            <Text
              style={{
                ...styles.font,
                color: '#fff',
                padding: 10,
                textAlign: 'center',
                fontSize: 20,
              }}
            >
              {entities.decode(answer.question)}
            </Text>
          </View>
        ))}
      </ScrollView>
      <TouchableHighlight
        style={{ marginTop: 20, marginBottom: 50 }}
        onPress={() => reset(componentId)}
      >
        <Text style={{ ...styles.font, color: '#fff', fontSize: 20 }}>
          PLAY AGAIN?
        </Text>
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
