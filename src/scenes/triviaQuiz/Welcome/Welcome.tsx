import React from 'react';
import {SceneWrapper} from '@template/index';
import {ActivityIndicator, Snackbar} from '@react-native-material/core';

import {CustomButton, CustomText} from '@atoms/index';

type Props = {
  onStartQuiz: () => void;
  onReload: () => void;
  onDismiss: () => void;
  quizLength: number;
  isLoading: boolean;
  errorFetchingData: boolean;
};

const Welcome: React.FC<Props> = ({
  onStartQuiz,
  quizLength,
  isLoading,
  onReload,
  onDismiss,
  errorFetchingData,
}) => {
  return (
    <SceneWrapper>
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <>
          <CustomText title>Welcome to the Trivia Challenge</CustomText>
          <CustomText>
            {`You will be presented with ${quizLength} true or false questions.`}
          </CustomText>
          <CustomText>Can you score 100%?</CustomText>
          {errorFetchingData ? (
            <Snackbar
              message="There was an error loading your questions, we're running on the last questions available"
              action={
                <>
                  <CustomButton
                    variant="text"
                    title="RELOAD"
                    compact
                    onPress={onReload}
                  />
                  <CustomButton
                    variant="text"
                    title="DISMISS"
                    compact
                    onPress={onDismiss}
                  />
                </>
              }
            />
          ) : (
            <CustomButton title="Begin" onPress={onStartQuiz} />
          )}
        </>
      )}
    </SceneWrapper>
  );
};

export default Welcome;
