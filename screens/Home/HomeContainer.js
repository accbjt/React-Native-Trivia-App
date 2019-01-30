import { connect } from 'react-redux';
import HomeComponent from './HomeComponent';

import { fetchData, nextQuestion, reset } from '../../store/actions';

const mapStateToProps = state => ({
  answers: state.answers,
  currentQuestion: state.currentQuestion,
  start: state.startQuestions,
  end: state.endQuestions,
});

const mapDispatchToProps = dispatch => ({
  startGame: () => {
    dispatch(fetchData());
  },
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
)(HomeComponent);
