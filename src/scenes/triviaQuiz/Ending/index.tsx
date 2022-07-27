import React, {useEffect, useState} from 'react';
import {resetRoutToTop, useNavigation} from '@navigation/actions';
import routes from '@src/navigation/routeNames';
import Ending from './Ending';
import {compareStringAndBoolean, useAppSelector} from '@src/utils';

const TriviaQuizWelcome: React.FC = () => {
  const [correctsAmount, setCorrectsAmount] = useState(0);

  const navigation = useNavigation();

  const questionList = useAppSelector(
    (state) => state.store.triviaQuiz.questions,
  );
  const answersList = useAppSelector((state) => state.store.triviaQuiz.answers);

  useEffect(() => {
    getCorrectAnswers();
  }, []);

  const onStartQuiz = () => {
    navigation.dispatch(resetRoutToTop(routes.triviaQuiz.welcome));
    resetRoutToTop(routes.triviaQuiz.welcome);
  };

  const getCorrectAnswers = () => {
    const corrects = questionList.filter((question, index) =>
      compareStringAndBoolean(
        question.correctAnswer,
        answersList[index].answer,
      ),
    );
    setCorrectsAmount(corrects.length);
  };

  return (
    <Ending
      questionList={questionList}
      onStartQuiz={onStartQuiz}
      questionAmount={questionList.length}
      correctsAmount={correctsAmount}
    />
  );
};

export default TriviaQuizWelcome;
