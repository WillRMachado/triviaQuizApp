import {combineReducers} from 'redux';

import triviaQuizReducer from './triviaQuiz';

const store = combineReducers({
  triviaQuiz: triviaQuizReducer,
});

export default store;
