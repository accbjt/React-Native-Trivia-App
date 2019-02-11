import { connect } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import ScoreScreen from './ScoreScreen';

import { reset } from '../../store/actions';

const mapStateToProps = state => ({
  answers: state.answers,
  correct: state.correct,
});

const mapDispatchToProps = dispatch => ({
  reset: componentId => {
    Navigation.popToRoot(componentId);
    dispatch(reset());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScoreScreen);
