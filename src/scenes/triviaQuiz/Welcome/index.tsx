import React, {useEffect} from 'react';
import {useNavigation} from '@navigation/actions';
import routes from '@src/navigation/routeNames';
import Welcome from './Welcome';
import {
  asyncGetTriviaQuestions,
  dismissError,
} from '@src/store/reducers/triviaQuiz';
import {useAppDispatch, useAppSelector} from '@src/utils';

const TriviaQuizWelcome: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const fetchQuestions = async () => {
    dispatch(asyncGetTriviaQuestions());
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  const triviaQuiz = useAppSelector((state) => state.store.triviaQuiz);

  const {questions, isLoading, errorFetchingData} = triviaQuiz;

  const quizLength = questions.length;

  const onStartQuiz = () => {
    navigation.push(routes.triviaQuiz.question, {
      questionIndex: 0,
    });
  };

  const onReload = () => {
    fetchQuestions();
  };

  const onDismiss = () => {
    dispatch(dismissError());
  };

  return (
    <Welcome
      onStartQuiz={onStartQuiz}
      quizLength={quizLength}
      isLoading={isLoading}
      errorFetchingData={errorFetchingData}
      onReload={onReload}
      onDismiss={onDismiss}
    />
  );
};

export default TriviaQuizWelcome;
