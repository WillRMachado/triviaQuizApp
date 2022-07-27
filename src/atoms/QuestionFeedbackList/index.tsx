import React from 'react';
import {FlatList} from 'react-native';
import QuestionFeedback from '../QuestionFeedback';
import {compareStringAndBoolean, useAppSelector} from '@src/utils';

const QuestionFeedbackList: React.FC = () => {
  const questionList = useAppSelector(
    (state) => state.store.triviaQuiz.questions,
  );
  const answersList = useAppSelector((state) => state.store.triviaQuiz.answers);

  return (
    <FlatList
      data={questionList}
      renderItem={({item, index}) => (
        <QuestionFeedback
          questionTitle={item.question}
          isCorrectAnswer={compareStringAndBoolean(
            item.correctAnswer,
            answersList[index].answer,
          )}
        />
      )}
      keyExtractor={(item, index) => item?.question + index}
    />
  );
};

export default QuestionFeedbackList;
