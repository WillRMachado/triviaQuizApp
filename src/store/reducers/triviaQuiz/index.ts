import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {getQuestions} from '@src/service/triviaQuiz';
import {triviaQuizDTO, FormattedQuestionType} from '@src/utils';

type AnswerType = {
  questionIndex: number;
  answer: boolean | string;
};

type StateType = {
  questions: FormattedQuestionType[];
  answers: AnswerType[];
  isLoading: boolean;
  errorFetchingData: boolean;
};

type SaveAnswerType = {
  questionIndex: number;
  answer: boolean;
};
type SaveQuestionsType = {
  questionList: FormattedQuestionType[];
};

const fallbackQuestionList: FormattedQuestionType[] = [
  {
    category: 'Vehicles',
    question:
      'In 1993 Swedish car manufacturer Saab experimented with replacing the steering wheel with a joystick in a Saab 9000.',
    correctAnswer: 'True',
  },
  {
    category: 'Entertainment: Video Games',
    question:
      'In &quot;The Sims&quot; series, the most members in a household you can have is 8.',
    correctAnswer: 'True',
  },
  {
    category: 'History',
    question:
      'Joseph Stalin&#039;s real name was Ioseb Bessarionis dze Dzugashvili.',
    correctAnswer: 'True',
  },
  {
    category: 'Science: Mathematics',
    question:
      'If you could fold a piece of paper in half 50 times, its&#039; thickness will be 3/4th the distance from the Earth to the Sun.',
    correctAnswer: 'True',
  },
  {
    category: 'General Knowledge',
    question: 'In Scandinavian languages, the letter &Aring; means river.',
    correctAnswer: 'True',
  },
  {
    category: 'Entertainment: Music',
    question: 'The band STRFKR was also briefly known as Pyramiddd.',
    correctAnswer: 'True',
  },
  {
    category: 'History',
    question: 'The USS Missouri (BB-63) last served in the Korean War.',
    correctAnswer: 'False',
  },
  {
    category: 'Entertainment: Board Games',
    question:
      'The board game Go has more possible legal positions than the number of atoms in the visible universe.',
    correctAnswer: 'True',
  },
  {
    category: 'General Knowledge',
    question:
      'Spoon theory is a theory, utilizing &quot;Spoons&quot; as a metaphor for energy they can use in a day.',
    correctAnswer: 'True',
  },
  {
    category: 'Entertainment: Japanese Anime & Manga',
    question:
      'The protagonist in &quot;Humanity Has Declined&quot; has no discernable name and is simply referred to as &#039;I&#039; for most of the series.',
    correctAnswer: 'True',
  },
];

const initialState: StateType = {
  questions: fallbackQuestionList,
  answers: [],
  isLoading: false,
  errorFetchingData: false,
};

const triviaQuiz = createSlice({
  name: 'triviaQuiz',
  initialState,

  reducers: {
    _loading(state) {
      state.isLoading = true;
    },
    _errorFetchingData(state) {
      state.isLoading = false;

      state.errorFetchingData = true;
    },
    _saveQuestions(state, action: PayloadAction<SaveQuestionsType>) {
      const {payload} = action;
      state.isLoading = false;
      state.questions = payload.questionList;
    },
    saveAnswer: (state, action: PayloadAction<SaveAnswerType>) => {
      const {payload} = action;
      state.answers[payload.questionIndex] = {
        questionIndex: payload.questionIndex,
        answer: payload.answer,
      };
    },
    dismissError: (state) => {
      state.errorFetchingData = false;
    },
  },
});

const asyncGetTriviaQuestions = () => {
  return async function (
    dispatch: (arg0: {
      payload: SaveQuestionsType | undefined;
      type: string;
    }) => void,
  ) {
    dispatch(_loading());

    //fetch APIs
    const apiResults = await getQuestions();

    //verify api call success
    if (apiResults.status === 200) {
      const questionList = triviaQuizDTO(apiResults.data);
      dispatch(_saveQuestions({questionList}));
    } else {
      dispatch(_errorFetchingData());
    }
  };
};

export const {
  saveAnswer,
  _loading,
  _saveQuestions,
  _errorFetchingData,
  dismissError,
} = triviaQuiz.actions;
export {asyncGetTriviaQuestions};
export default triviaQuiz.reducer;
