export type QuestionItemApiType = {
  category: string;
  correct_answer: string;
  question: string;
};

export type TriviaQuestionApiResponseType = {
  results: QuestionItemApiType[];
};

export type FormattedQuestionType = {
  category: string;
  correctAnswer: string;
  question: string;
};
