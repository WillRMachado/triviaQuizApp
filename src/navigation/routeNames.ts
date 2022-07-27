export type RoutesType = {
  triviaQuiz: NavigatorTriviaQuiz;
};

export type NavigatorTriviaQuiz = {
  welcome: 'welcome';
  question: 'question';
  ending: 'ending';
};

const routes: RoutesType = {
  triviaQuiz: {
    welcome: 'welcome',
    question: 'question',
    ending: 'ending',
  },
};

export default routes;
