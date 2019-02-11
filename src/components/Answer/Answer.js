import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'react-native-elements';
import { View } from 'react-native';

import styles from '../../styles';

const Answer = ({ componentId, nextQuestion }) => (
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
);

export default Answer;

Answer.propTypes = {
  nextQuestion: PropTypes.func.isRequired,
  componentId: PropTypes.string.isRequired,
};
