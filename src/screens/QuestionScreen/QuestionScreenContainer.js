import { connect } from 'react-redux';
import QuestionScreen from './QuestionScreen';

import { nextQuestion, reset } from '../../store/actions';

const mapStateToProps = state => ({
  currentQuestion: state.currentQuestion,
});

const mapDispatchToProps = dispatch => ({
  nextQuestion: (answer, componentId) => {
    dispatch(nextQuestion(answer, componentId));
  },
  reset: () => {
    dispatch(reset());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionScreen);
