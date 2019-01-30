import uuid from 'uuid';

const addIndexToQuestions = payload =>
  payload.map((question, index) => ({
    ...question,
    index,
    id: uuid(),
  }));

export const questions = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_QUESTIONS':
      return addIndexToQuestions(action.payload);
    case 'RESET_QUESTIONS':
      return [];
    default:
      return state;
  }
};

export const startQuestions = (state = 0, action) => {
  switch (action.type) {
    case 'START_QUESTIONS':
      return 1;
    case 'RESET_QUESTIONS':
      return 0;
    default:
      return state;
  }
};

export const endQuestions = (state = false, action) => {
  switch (action.type) {
    case 'END_QUESTIONS':
      return true;
    case 'RESET_QUESTIONS':
      return false;
    default:
      return state;
  }
};

export const currentQuestion = (state = {}, action) => {
  switch (action.type) {
    case 'LOAD_QUESTIONS':
      return addIndexToQuestions(action.payload)[0];
    case 'NEXT_QUESTION':
      return action.nextQuestion;
    case 'RESET_QUESTIONS':
      return {};
    default:
      return state;
  }
};

export const answers = (state = [], action) => {
  switch (action.type) {
    case 'NEXT_QUESTION':
      return [...state, action.answer];
    case 'RESET_QUESTIONS':
      return [];
    default:
      return state;
  }
};
