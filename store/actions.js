export const loadQuestions = payload => ({
  type: 'LOAD_QUESTIONS',
  payload,
});

export const loadNextQuestion = (nextQuestion, answer) => ({
  type: 'NEXT_QUESTION',
  nextQuestion,
  answer,
});

export const startQuestions = () => ({
  type: 'START_QUESTIONS',
});

export const endQuestions = () => ({
  type: 'END_QUESTIONS',
});

export const reset = () => ({
  type: 'RESET_QUESTIONS',
});

export const nextQuestion = answer => (dispatch, getState) => {
  const state = getState();
  const { currentQuestion, questions } = state;
  const question = questions[currentQuestion.index + 1];
  const currentAnswer = {
    ...currentQuestion,
    isCorrect: currentQuestion.correct_answer === answer,
  };

  if (currentQuestion.index + 1 === questions.length) {
    dispatch(loadNextQuestion(currentQuestion, currentAnswer));

    return dispatch(endQuestions());
  }

  return dispatch(loadNextQuestion(question, currentAnswer));
};

export const fetchData = () => async dispatch => {
  try {
    const fetchResult = await fetch(
      'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean'
    );
    const response = await fetchResult.json();

    dispatch(loadQuestions(response.results));
    dispatch(startQuestions());
  } catch (err) {
    console.log(err);
  }
};
