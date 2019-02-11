import { connect } from 'react-redux';
import Answer from './Answer';

import { nextQuestion } from '../../store/actions';

const mapDispatchToProps = dispatch => ({
  nextQuestion: (answer, componentId) => {
    dispatch(nextQuestion(answer, componentId));
  },
});

export default connect(
  undefined,
  mapDispatchToProps
)(Answer);
