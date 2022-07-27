import React from 'react';
import {RouteWithParams, useNavigation} from '@navigation/actions';
import {saveAnswer} from '@src/store/reducers/triviaQuiz';
import routes from '@src/navigation/routeNames';
import Question from './Question';
import {useAppDispatch, useAppSelector} from '@src/utils';

type Props = RouteWithParams<{questionIndex: number}>;

const TriviaQuizWelcome: React.FC<Props> = (props) => {
  const {route} = props;
  const {params} = route;
  const questionIndex = params?.questionIndex || 0;
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const questionList = useAppSelector(
    (state) => state.store.triviaQuiz.questions,
  );

  const currentQuestionNumber = questionIndex + 1;

  const questionData = questionList[questionIndex];
  const isLast = currentQuestionNumber >= questionList.length;

  const onGoToNext = () => {
    isLast
      ? navigation.navigate(routes.triviaQuiz.ending)
      : navigation.push(routes.triviaQuiz.question, {
          questionIndex: questionIndex + 1,
        });
  };

  const onPressTrue = () => {
    dispatch(saveAnswer({questionIndex, answer: true}));
    onGoToNext();
  };

  const onPressFalse = () => {
    dispatch(saveAnswer({questionIndex, answer: false}));
    onGoToNext();
  };

  return (
    <Question
      onPressTrue={onPressTrue}
      onPressFalse={onPressFalse}
      questionData={questionData}
      currentQuestionNumber={currentQuestionNumber}
      questionsLength={questionList.length}
    />
  );
};

export default TriviaQuizWelcome;
