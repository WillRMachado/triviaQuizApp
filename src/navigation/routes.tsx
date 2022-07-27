import React from 'react';
import triviaWelcome from '@scenes/triviaQuiz/Welcome';
import triviaQuestion from '@scenes/triviaQuiz/Question';
import triviaEnding from '@scenes/triviaQuiz/Ending';
import {createStackNavigator} from '@react-navigation/stack';
import routes from './routeNames';
const {triviaQuiz} = routes;

const Stack = createStackNavigator();

const TriviaQuizStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={triviaQuiz.welcome} component={triviaWelcome} />
      <Stack.Screen name={triviaQuiz.question} component={triviaQuestion} />
      <Stack.Screen name={triviaQuiz.ending} component={triviaEnding} />
    </Stack.Navigator>
  );
};

export default TriviaQuizStack;
