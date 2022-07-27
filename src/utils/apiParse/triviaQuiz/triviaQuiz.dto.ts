import {FormattedQuestionType, TriviaQuestionApiResponseType} from './types';

export const triviaQuizDTO = (
  apiData: TriviaQuestionApiResponseType,
): FormattedQuestionType[] => {
  const fallbackDefault: FormattedQuestionType[] = [];
  try {
    const questions = apiData.results;
    const formattedQuestion = questions.map((question) => {
      return {
        category: question?.category || '',
        correctAnswer: question?.correct_answer || '',
        question: question?.question || '',
      };
    });
    return [...formattedQuestion];
  } catch (error) {
    return fallbackDefault;
  }
};
