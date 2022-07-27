import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TriviaQuizStack from '@navigation/routes';
import {Provider} from 'react-redux';
import reducersStore from './store';

const AppContainer: React.FC = () => {
  return (
    <Provider store={reducersStore}>
      <NavigationContainer>
        <TriviaQuizStack />
      </NavigationContainer>
    </Provider>
  );
};

export default AppContainer;
