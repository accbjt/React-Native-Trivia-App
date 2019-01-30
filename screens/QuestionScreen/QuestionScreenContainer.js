import { connect } from 'react-redux';
import QuestionScreen from './QuestionScreen';

import { nextQuestion, reset } from '../../store/actions';

const mapStateToProps = state => {
  debugger;
  return {
    answers: state.answers,
    currentQuestion: state.currentQuestion,
    start: state.startQuestions,
    end: state.endQuestions,
  };
};

const mapDispatchToProps = dispatch => ({
  nextQuestion: answer => {
    dispatch(nextQuestion(answer));
  },
  reset: () => {
    dispatch(reset());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionScreen);
